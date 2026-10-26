import {Await, useLoaderData, Link} from 'react-router';
import type {Route} from './+types/_index';
import {Suspense, useEffect, useState} from 'react';
import type {RecommendedProductsQuery} from 'storefrontapi.generated';
import {ProductItem} from '~/components/ProductItem';
import {MockShopNotice} from '~/components/MockShopNotice';

export const meta: Route.MetaFunction = () => {
  return [
    {title: 'Jewels by Tulz | Fine Jewelry for Every Day'},
    {
      name: 'description',
      content:
        'Discover thoughtfully designed jewelry made to be worn, loved, and lived in.',
    },
  ];
};

export async function loader(args: Route.LoaderArgs) {
  // Start fetching non-critical data without blocking time to first byte
  const deferredData = loadDeferredData(args);

  // Await the critical data required to render initial state of the page
  const criticalData = await loadCriticalData(args);

  return {...deferredData, ...criticalData};
}

/**
 * Load data necessary for rendering content above the fold. This is the critical data
 * needed to render the page. If it's unavailable, the whole page should 400 or 500 error.
 */
async function loadCriticalData({context}: Route.LoaderArgs) {
  const [{collections}] = await Promise.all([
    context.storefront.query(FEATURED_COLLECTION_QUERY),
    // Add other queries here, so that they are loaded in parallel
  ]);

  return {
    isShopLinked: Boolean(context.env.PUBLIC_STORE_DOMAIN),
    featuredCollection: collections.nodes[0],
  };
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 */
function loadDeferredData({context}: Route.LoaderArgs) {
  const recommendedProducts = context.storefront
    .query(RECOMMENDED_PRODUCTS_QUERY)
    .catch((error: Error) => {
      // Log query errors, but don't throw them so the page can still render
      console.error(error);
      return null;
    });

  return {
    recommendedProducts,
  };
}

export default function Homepage() {
  const data = useLoaderData<typeof loader>();
  const collectionUrl = data.featuredCollection
    ? `/collections/${data.featuredCollection.handle}`
    : '/collections/all';

  return (
    <div className="home">
      {data.isShopLinked ? null : <MockShopNotice />}
      <section className="home-hero" aria-labelledby="home-hero-heading">
        <div className="home-hero-copy">
          <p className="eyebrow">Jewels by Tulz · Fine jewelry</p>
          <h1 id="home-hero-heading">A little brilliance, every day.</h1>
          <p className="home-hero-description">
            Thoughtfully chosen pieces for the moments that make a life yours.
          </p>
          <Link className="button-primary" to={collectionUrl}>
            Discover the collection
          </Link>
          <p className="hero-note">Made to be worn. Made to be kept.</p>
        </div>
        <Suspense
          fallback={
            <HeroImageFallback />
          }
        >
          <Await resolve={data.recommendedProducts}>
            {(response) => (
              <HeroSlideshow
                products={response?.products.nodes.filter(
                  (product) => product.featuredImage,
                ) ?? []}
              />
            )}
          </Await>
        </Suspense>
      </section>

      <div className="brand-promises" aria-label="Jewels by Tulz values">
        <p>Considered design</p>
        <span aria-hidden="true" />
        <p>Made for everyday</p>
        <span aria-hidden="true" />
        <p>Chosen to last</p>
      </div>

      <RecommendedProducts products={data.recommendedProducts} />

      <section className="home-story" aria-labelledby="home-story-heading">
        <p className="eyebrow">A more personal kind of luxury</p>
        <h2 id="home-story-heading">For the days worth remembering.</h2>
        <p>
          The best pieces don’t wait for a special occasion. They become part of
          the story you’re already wearing.
        </p>
        <Link className="button-secondary" to='/collections/all'>
          Find your piece
        </Link>
      </section>
    </div>
  );
}

function HeroSlideshow({
  products,
}: {
  products: NonNullable<RecommendedProductsQuery>['products']['nodes'];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (products.length < 2 || isPaused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % products.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPaused, products.length]);

  const product = products[activeIndex];
  const image = product?.featuredImage;

  if (!product || !image) return <HeroImageFallback />;

  return (
    <div className="home-hero-image-wrap">
      <Link
        className="home-hero-slide-link"
        to="/collections/all"
        aria-label={`Shop the catalog, featuring ${product.title}`}
      >
        <img
          className="home-hero-image"
          src={image.url}
          alt={image.altText || product.title}
          loading="eager"
        />
        <span className="hero-image-caption">{product.title}</span>
      </Link>
      {products.length > 1 && (
        <div className="hero-slideshow-controls" aria-label="Slideshow controls">
          <button
            type="button"
            onClick={() => setIsPaused((paused) => !paused)}
            aria-pressed={isPaused}
          >
            {isPaused ? 'Play' : 'Pause'}
          </button>
          {products.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={index === activeIndex ? 'is-active' : undefined}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${slide.title}`}
              aria-current={index === activeIndex ? 'true' : undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function HeroImageFallback() {
  return (
    <div className="home-hero-image-wrap">
      <Link
        className="home-hero-slide-link"
        to="/collections/all"
        aria-label="Explore the jewelry catalog"
      >
        <img
          className="home-hero-image"
          src="/jewelry-campaign.jpg"
          alt="Sculptural gold earrings resting on pale stone"
          loading="eager"
        />
        <span className="hero-image-caption">The everyday, elevated</span>
      </Link>
    </div>
  );
}

function RecommendedProducts({
  products,
}: {
  products: Promise<RecommendedProductsQuery | null>;
}) {
  return (
    <section
      className="recommended-products"
      aria-labelledby="recommended-products"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">A few forever favorites</p>
          <h2 id="recommended-products">The pieces you’ll reach for.</h2>
        </div>
        <Link className="text-link" to="/collections/all">
          View all jewelry <span aria-hidden="true">→</span>
        </Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {(response) => (
            <div className="recommended-products-grid">
              {response?.products.nodes.length
                ? response.products.nodes.map((product) => (
                    <ProductItem
                      key={product.id}
                      product={product}
                      loading="lazy"
                    />
                  ))
                : (
                    <p className="products-empty">
                      New pieces are on their way.
                    </p>
                  )}
            </div>
          )}
        </Await>
      </Suspense>
    </section>
  );
}

const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
` as const;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    featuredImage {
      id
      url
      altText
      width
      height
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
` as const;
