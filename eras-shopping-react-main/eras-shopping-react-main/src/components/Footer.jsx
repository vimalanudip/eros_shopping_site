function Footer() {
  return (
    <footer>

      <div className="footer">
        <div className="footer-container">

          {/* Footer Column 1 */}
          <div className="footer-column">
            <h4>INFORMATION</h4>
            <ul>
              <li><a href="#">The brand</a></li>
              <li><a href="#">Local stores</a></li>
              <li><a href="#">Customer service</a></li>
              <li><a href="#">Privacy & cookies</a></li>
              <li><a href="#">Site map</a></li>
            </ul>
          </div>

          {/* Footer Column 2 */}
          <div className="footer-column">
            <h4>MY PROFILE</h4>
            <ul>
              <li><a href="#">Getting Started</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Buying Guide</a></li>
              <li><a href="#">Order Returns</a></li>
              <li><a href="#">Affiliate Program</a></li>
            </ul>
          </div>

          {/* Footer Column 3 */}
          <div className="footer-column">
            <h4>YOUR ACCOUNT</h4>
            <ul>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">Secure Shopping</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Award Winning</a></li>
              <li><a href="#">Ethical Trading</a></li>
            </ul>
          </div>

          {/* Footer Column 4 */}
          <div className="footer-column">
            <h4>LOOKBOOK</h4>
            <ul>
              <li><a href="#">Getting Started</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Buying Guide</a></li>
              <li><a href="#">Order Returns</a></li>
              <li><a href="#">Affiliate Program</a></li>
            </ul>
          </div>

          {/* Footer Column 5 */}
          <div className="footer-column contact">
            <h4>CONTACT DETAILS</h4>

            <p>
              <strong>Telephone:</strong> 0123-456-789
            </p>

            <p>
              <strong>Email:</strong> free@psdfreebies.com
            </p>

            <br />

            <p>
              <strong>Head Office:</strong>
              <br />
              245 Yellow House,
              <br />
              Main Street, London, 456789
            </p>
          </div>

        </div>
      </div>

      {/* Copyright Block */}
      <div className="copyright">
        <p>
          © Copyright e-commerce Designed by Ishika &hearts;
        </p>
      </div>

      {/* Footer Logo Block */}
      <div className="footer-logo">
        <img src="/assets/Fashion.png" alt="Footer Logo" />
      </div>

    </footer>
  );
}

export default Footer;