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
      </div>
    </section>
  );
}
