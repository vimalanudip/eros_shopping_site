function ShopProducts({ selectedCategory }) {
  const products = [
    {
      image: "/assets/featured_oroduct_korean_boy.png",
      name: "Ted Baker Womens Light",
      brand: "Gucci",
      oldPrice: "$70.00",
      newPrice: "$120.00",
      category: "spring-summer",
    },
    {
      image: "/assets/Shape (8).png",
      name: "Ted Baker Womens Light",
      brand: "Gucci",
      oldPrice: "$70.00",
      newPrice: "$120.00",
      category: "sweatshirt",
    },
    {
      image: "/assets/Shape (10).png",
      name: "Ted Baker Womens Light",
      brand: "Gucci",
      oldPrice: "$70.00",
      newPrice: "$120.00",
      category: "sneakers",
    },
    {
      image: "/assets/Shape (11).png",
      name: "Ted Baker Womens Light",
      brand: "Gucci",
      oldPrice: "$70.00",
      newPrice: "$120.00",
      category: "gadgets",
    },
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <section className="shop-products">
      <h2>SHOP PRODUCTS</h2>

      {filteredProducts.length > 0 ? (
  <div className="shop-product-grid">
    {filteredProducts.map((product, index) => (
      <div className="shop-product-card" key={index}>
        <img src={product.image} alt={product.name} />

        <h3>{product.name}</h3>

        <p>{product.brand}</p>

        <div className="shop-price">
          <span className="shop-old-price">
            {product.oldPrice}
          </span>

          <span className="shop-new-price">
            {product.newPrice}
          </span>
        </div>
      </div>
    ))}
  </div>
) : (
  <p className="no-products">
    No products found in this category.
  </p>
)}

    </section>
  );
}

export default ShopProducts;