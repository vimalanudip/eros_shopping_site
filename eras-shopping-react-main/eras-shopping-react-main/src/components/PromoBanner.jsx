function PromoBanner() {
  return (
    <section className="promo-banner">

      {/* Banner Background */}
      <img src="/assets/Shape (6).png" alt="banner" />

      {/* Text */}
      <div className="banner-content">
        <h2>WE OFFER BRAND NEW STYLES</h2>

        <p>SIGN UP NOW AND GET 50% OFF</p>

        <a href="#" className="btn-light">
          SEE FULL COLLECTION
        </a>
      </div>

    </section>
  );
}

export default PromoBanner;