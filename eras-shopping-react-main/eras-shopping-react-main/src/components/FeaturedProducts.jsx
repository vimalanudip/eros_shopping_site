function FeaturedProducts() {
  return (
    <div className="featured-product">

      <p>FEATURED PRODUCTS</p>

      {/* Nav */}
      <div className="featured-nav">
        <ul className="nav-links">
          <li><a href="#">All</a></li>
          <li><a href="#">spring-summer</a></li>
          <li><a href="#">sweatshirts</a></li>
          <li><a href="#">sneakers</a></li>
          <li><a href="#">gadgets</a></li>
          <li><a href="#">outdoors</a></li>
        </ul>
      </div>

      {/* Cards Grid */}
      <div className="product-container">

        {/* Left Arrow */}
        <div className="feature-arrow left-arrow">
          <i className="fa-solid fa-chevron-left"></i>
        </div>

        {/* Product Card 1 */}
        <div className="product-card">
          <img
            src="/assets/featured_oroduct_korean_boy.png"
            alt="Product"
          />

          <div className="product-info">
            <h4>Ted Baker Womens Light</h4>
            <p className="brand">Gucci</p>

            <div className="price">
              <span className="old-price">$70.00</span>
              <span className="new-price">$120.00</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="product-card">
          <img src="/assets/Shape (8).png" alt="Product" />

          <div className="product-info">
            <h4>Ted Baker Womens Light</h4>
            <p className="brand">Gucci</p>

            <div className="price">
              <span className="old-price">$70.00</span>
              <span className="new-price">$120.00</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="product-card">
          <img src="/assets/Shape (10).png" alt="Product" />

          <div className="product-info">
            <h4>Ted Baker Womens Light</h4>
            <p className="brand">Gucci</p>

            <div className="price">
              <span className="old-price">$70.00</span>
              <span className="new-price">$120.00</span>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="product-card">
          <img src="/assets/Shape (11).png" alt="Product" />

          <div className="product-info">
            <h4>Ted Baker Womens Light</h4>
            <p className="brand">Gucci</p>

            <div className="price">
              <span className="old-price">$70.00</span>
              <span className="new-price">$120.00</span>
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <div className="feature-arrow right-arrow">
          <i className="fa-solid fa-chevron-right"></i>
        </div>

      </div>

      {/* Show More Action Button */}
      <div className="show-more">
        <button>SHOW MORE</button>
      </div>

    </div>
  );
}

export default FeaturedProducts;