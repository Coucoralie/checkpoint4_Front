import React from "react";
import { Link } from 'react-router-dom';

const CarteProduit = ({ produit }) => {
  return(
    <div>
    <div>
      <img src= {produit.image} alt={produit.name} />
      <h2>{produit.name}</h2> <p>{produit.prix} €</p>
    </div>
    <div>
    <Link to={'/'}>
      <button type="button">
        Voir plus
      </button>
    </Link>
    </div>
    </div>
  )
}
export default CarteProduit;