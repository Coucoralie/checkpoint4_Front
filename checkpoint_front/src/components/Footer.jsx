import React from "react";
/** Import de CSS */
import "./Footer.css";
/** Import des images */
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-haut">
        <div className="footer-contact">
          <h2>REVE & CREE</h2>
          <p>02 02 02 02 02</p>
          <p>reveetcree@gmail.com</p>
          <br />
          <p>4 rue Baron, 44000 Nantes</p>
        </div>
        <div className="footer-reseaux">
          <a href="https://www.facebook.com">
            <img className="footer-logo" src={facebook} alt="logo facebook" />
          </a>
          <a href="https://www.instagram.com">
            <img className="footer-logo" src={instagram} alt="logo instagram" />
          </a>
          <a href="https://www.twitter.com">
            <img className="footer-logo" src={twitter} alt="logo twitter" />
          </a>
        </div>
      </div>
      <div className="footer-bas">
        <a href="mentions.html" target="_blank">
          <p className="mentions">
            Mentions légales / Politiques de confidentialité
          </p>
        </a>
        <p className="footer-copyright">Copyright</p>
      </div>
    </div>
  );
};

export default Footer;
