function Hero() {
    return (
        <section className="hero">

            <img
                src="/assets/Image.png"
                className="hero-image"
                alt="Hero Background"
            />

            <div className="social-sidebar">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-google"></i>
                <i className="fa-brands fa-instagram"></i>

                <span>FOLLOW US</span>
            </div>

            <div className="hero-content">

                <div className="slider-text">
                    <span className="prev">PREV</span>
                    <span className="next active">NEXT</span>
                </div>

                <h1>
                    SUMMER <br />
                    COLLECTION
                </h1>

                <p className="category">
                    01 &nbsp; MEN'S WEAR
                </p>

                <div className="slider-icons">

                    <button className="slide-btn active">
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>

                    <button className="slide-btn">
                        <i className="fa-regular fa-heart"></i>
                    </button>

                    <button className="slide-btn">
                        <i className="fa-solid fa-share-nodes"></i>
                    </button>

                </div>

                <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vivamus Sed fermentum nibh, vel aliquet massa. etiam in
                    magna id risus lacinia luctus eget eu est.
                </p>

                <button>
                    SHOP NOW
                </button>

            </div>

            <div className="offer-card">

                <img
                    src="/assets/bg.png"
                    className="offer-bg"
                    alt="Offer Background"
                />

                <div className="offer-text">

                    <h2>
                        SPECIAL OFFER <br />
                        OF THE MONTH
                    </h2>

                    <p>Black Long Sleeve</p>

                    <div className="offer-row">

                        <div className="price">
                            <span className="old-price">$105</span>
                            <span className="new-price">$65</span>
                        </div>

                        <button className="offer-btn">
                            SHOP NOW
                        </button>

                    </div>

                    <div className="offer-timer">

                        <div className="box">
                            <h3>09</h3>
                            <h4>----</h4>
                            <span>HOURS</span>
                        </div>

                        <div className="box">
                            <h3>56</h3>
                            <h4>----</h4>
                            <span>MINUTES</span>
                        </div>

                        <div className="box">
                            <h3>11</h3>
                            <h4>----</h4>
                            <span>SECONDS</span>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;