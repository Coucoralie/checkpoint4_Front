import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return(
    <div>
      <img src={Logo} alt="Logo" />
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
      <img src={panier} alt="panier" />
    </div>
  );
};

export default Navbar;