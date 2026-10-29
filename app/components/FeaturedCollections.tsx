import {Link} from 'react-router';

const collections = [
  {
    name: 'Jewels by Tulz',
    href: '/collections/jewels-by-tulz',
    image: '/featured-fine-jewelry.jpg',
    imageAlt: 'Close-up of a gold bracelet styled on a model',
    callToAction: 'Explore fine jewelry',
  },
  {
    name: 'Jewels by Tulz Too',
    href: '/collections/jewels-by-tulz-too',
    image: '/featured-fine-inspired.jpg',
    imageAlt: 'Close-up of layered delicate gold necklaces',
    callToAction: 'Explore the fine-inspired jewelry',
  },
];

export function FeaturedCollections() {
  return (
    <section className="featured-collections" aria-labelledby="featured-collections-heading">
      <div className="featured-collections-inner">
        <div className="featured-collections-heading">
          <h2 id="featured-collections-heading">Find your signature</h2>
        </div>
        <div className="featured-collections-grid">
          {collections.map((collection) => (
            <article className="featured-collection" key={collection.name}>
              <Link
                className="featured-collection-image-link"
                to={collection.href}
                aria-label={`${collection.name} — ${collection.callToAction}`}
              >
                <img
                  className="featured-collection-image"
                  src={collection.image}
                  alt={collection.imageAlt}
                  loading="lazy"
                />
              </Link>
              <div className="featured-collection-copy">
                <h3>{collection.name}</h3>
                <Link className="featured-collection-link" to={collection.href}>
                  {collection.callToAction}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
