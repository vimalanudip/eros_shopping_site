function ProductGrid() {
  return (
    <section className="product-grid">

      {/* Left Column */}
      <div className="left-column">

        {/* Shoe Card */}
        <div className="card shoe-card">
          <img src="/assets/Shape.png" alt="shoe" />

          <div className="card-content">
            <h3>
              BUY 2 GET <br />
              UP 50% OFF
            </h3>
          </div>
        </div>

        {/* Bag Card */}
        <div className="card small">
          <img src="/assets/Shape (1).png" alt="bag" />
        </div>

      </div>

      {/* Center Column Block */}
      <div className="card large new-card">
        <span className="tag-new">NEW</span>

        <img src="/assets/Shape (2).png" alt="woman" />

        <div className="card-content">
          <span>Winter Jacket</span>

          <h3>
            VINTAGE LOOK
            <br />
            FOR WOMEN
          </h3>

          <a href="/" className="btn-dark">
            SHOP NOW
          </a>
        </div>
      </div>

      {/* Right Column Block */}
      <div className="right-column">

        {/* Top Men Jacket Card */}
        <div className="card medium">
          <img src="/assets/Shape (3).png" alt="man" />

          <div className="card-content">
            <span>Winter Jacket</span>

            <h3>
              FASHION
              <br />
              FOR MEN
            </h3>

            <a href="/" className="btn-dark">
              SHOP NOW
            </a>
          </div>
        </div>

        {/* Sunglasses */}
        <div className="card medium">
          <span className="tag-new">NEW</span>

          <img src="/assets/Shape (4).png" alt="sunglasses" />

          <div className="card-content bottom-center">
            <h4>40% OFF ON SUNGLASSES</h4>
          </div>
        </div>

      </div>

    </section>
  );
}

export default ProductGrid;
