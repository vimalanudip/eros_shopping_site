function ProductTypes() {
  return (
    <section className="product-types">

      {/* Heading */}
      <div className="section-title">
        <p>PRODUCT TYPES</p>
      </div>

      <div className="discount">
        <p>up to 30% discount</p>
      </div>

      {/* Cards Wrapper */}
      <div className="types-wrapper">

        {/* Left Arrow Button */}
        <button className="side-btn">PREV</button>

        {/* Men */}
        <div className="type-card">
          <img src="/assets/Shape (5).png" alt="men" />
          <a href="/" className="product btn-dark">
            SHOP MEN
          </a>
        </div>

        {/* Women */}
        <div className="type-card">
          <img src="/assets/Shape (7).png" alt="women" />
          <a href="/" className="product btn-dark">
            SHOP WOMEN
          </a>
        </div>

        {/* Kids */}
        <div className="type-card">
          <img
            src="/assets/Rechteck 1 copy 3.png"
            alt="kids"
          />
          <a href="/" className="product btn-dark">
            SHOP KIDS
          </a>
        </div>

        {/* Right Arrow */}
        <button className="side-btn">NEXT</button>

      </div>

    </section>
  );
}

export default ProductTypes;
