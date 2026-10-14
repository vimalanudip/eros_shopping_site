function WomenProducts() {
  const products = [
    {
      image: "/assets/Shape (2).png",
      name: "Vintage Look",
      description: "Fashion for Women",
    },
    {
      image: "/assets/Shape (7).png",
      name: "Women's Collection",
      description: "Shop Women",
    },
    {
      image: "/assets/featured_oroduct_korean_boy.png",
      name: "Ted Baker Womens Light",
      description: "Featured Product",
    },
  ];

  return (
    <section className="shop-products">
      <h2>WOMEN'S COLLECTION</h2>

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

export default WomenProducts;