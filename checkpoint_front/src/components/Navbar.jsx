import React from "react";
import { Link } from 'react-router-dom';
/** Import de CSS */
import './Navbar.css';
/** Import des images */
import Logo from '../assets/images/logo.jpeg';
import Panier from '../assets/images/panier.png';

const Navbar = () => {
  return(
    <div>
      <img src={Logo} alt="Logo" className="logo"/>
      <nav>
        <Link exact to="/Boutique">
          Boutique
        </Link>
        <Link exact to="/AjouterProduit">
          Ajouter un produit
        </Link>
        <Link exact to="/Contact">
          Contact
        </Link>
      </nav>
      <img src={Panier} alt="panier" className="panier" />
    </div>
  );
};

export default Navbar;