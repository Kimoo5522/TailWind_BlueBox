import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaXTwitter,
  FaGithub,
  FaCcVisa,
  FaCcPaypal,
} from "react-icons/fa6";
// import { SiGooglePay, SiApplePay } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <div className="footer-1">
        <p>STAY UP TO DATE ABOUT OUR LATEST STYLES</p>
        <div className="subscribe">
          <input type="text" placeholder="Enter your email address"/>
          <button>Subscribe to Newsletter</button>
        </div>
      </div>

      <div className="">
        <div className="footer-info">
          <div className="site-info">
            <h3>SHOP.CO</h3>
            <p>
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>
            <a
              href="https://facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF className="social-icon" />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaXTwitter className="social-icon" />
            </a>
            <a
              href="https://github.com/ahmedabdelhakeem"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="social-icon github-icon" />
            </a>
          </div>
          <div className="company">
            <h4>COMPANY</h4>
            <p>About</p>
            <p>Features</p>
            <p>Works</p>
            <p>Career</p>
          </div>
          <div className="help">
            <h4>HELP</h4>
            <p>Customer Support</p>
            <p>Delivery Details</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className="faq">
            <h4>FAQ</h4>
            <p>Accounts</p>
            <p>Manage Deliveries</p>
            <p>Orders</p>
            <p>Payments</p>
          </div>
          <div className="resources">
            <h4>RESOURCES</h4>
            <p>Free eBooks</p>
            <p>Development Tutorials</p>
            <p>How to - Blog</p>
            <p>Youtube Playlist</p>
          </div>
        </div>

        <div className="copyright">
          <hr />
          <div className="copyright-container">
            <p className="copyright-text">
              © 2025 Ahmed Abdelhakeem. All rights reserved.
            </p>

            <div>
              <div className="payment-icons">
                <FaCcVisa className="payment-icon" title="Visa" />
                <FaCcPaypal className="payment-icon" title="PayPal" />
                <div
                  className="payment-icon"
                  style={{ fontSize: "12px", color: "black" }}
                  title="Google Pay"
                >
                  G Pay
                </div>
                <div
                  className="payment-icon"
                  style={{ fontSize: "12px", color: "black" }}
                  title="Apple Pay"
                >
                  Apple Pay
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
