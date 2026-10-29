const categories = [
  {
    name: 'Necklaces',
    image: '/featured-fine-inspired.jpg',
    imageAlt: 'Delicate gold necklaces worn in layers',
  },
  {
    name: 'Earrings',
    image: '/category-earrings.jpg',
    imageAlt: 'Pair of gold and diamond stud earrings',
  },
  {
    name: 'Bracelets',
    image: '/featured-fine-jewelry.jpg',
    imageAlt: 'Polished gold bracelet worn on the wrist',
  },
  {
    name: 'Rings',
    image: '/category-rings.jpg',
    imageAlt: 'Gold ring worn on a hand',
  },
];

export function FeaturedCategories() {
  return (
    <section className="featured-categories" aria-labelledby="featured-categories-heading">
      <div className="featured-categories-inner">
        <div className="featured-categories-heading">
          <h2 id="featured-categories-heading">Shop by category</h2>
        </div>
        <div className="featured-categories-grid">
          {categories.map((category) => (
            <article className="featured-category" key={category.name}>
              <div className="featured-category-image-wrap">
                <img
                  className="featured-category-image"
                  src={category.image}
                  alt={category.imageAlt}
                  loading="lazy"
                />
              </div>
              <h3>{category.name}</h3>
            </article>
          ))}
        </div>
        <ul className="category-usps" aria-label="Shopping benefits">
          <li className="category-usp">
            <ShippingIcon />
            <span>Free Shipping over $49</span>
          </li>
          <li className="category-usp">
            <ReturnsIcon />
            <span>No hassle returns</span>
          </li>
          <li className="category-usp">
            <SecureCheckoutIcon />
            <span>Secure checkout</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

function ShippingIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z" />
      <circle cx="7.5" cy="18" r="1.8" />
      <circle cx="17.5" cy="18" r="1.8" />
    </svg>
  );
}

function ReturnsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 10a8 8 0 1 1 .8 6.2M4 4v6h6" />
      <path d="M12 8v4l2.5 1.5" />
    </svg>
  );
}

function SecureCheckoutIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="10" width="16" height="11" rx="1.5" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
    </svg>
  );
}
