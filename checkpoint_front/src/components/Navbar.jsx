import React from "react";
import { Link } from "react-router-dom";
/** Import de CSS */
import "./Navbar.css";
/** Import des images */
import Logo from "../assets/images/logo.jpeg";
import Panier from "../assets/images/panier.png";

const Navbar = () => {
  return (
    <div className="nav">
      <img src={Logo} alt="Logo" className="logo" />
      <nav className="navbar_item" className="menu">
        <Link exact to="/Boutique" className="item">
          Boutique
        </Link>
        <Link exact to="/AjouterProduit" className="item">
          Ajouter un produit
        </Link>
        <Link exact to="/Contact" className="item">
          Contact
        </Link>
        <img src={Panier} alt="panier" className="panier" />
      </nav>
    </div>
  );
};

export default Navbar;
