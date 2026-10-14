function MenProducts() {
  const products = [
    {
      image: "/assets/Shape (3).png",
      name: "Fashion for Men",
      description: "Winter Jacket",
    },
    {
      image: "/assets/Shape (5).png",
      name: "Men's Collection",
      description: "Shop Men",
    },
    {
      image: "/assets/Shape (11).png",
      name: "Featured Men's Style",
      description: "Latest Collection",
    },
  ];

  return (
    <section className="shop-products">
      <h2>MEN'S COLLECTION</h2>

      <div className="shop-product-grid">
        {products.map((product, index) => (
          <div className="shop-product-card" key={index}>
            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MenProducts;