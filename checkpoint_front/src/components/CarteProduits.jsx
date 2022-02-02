import React from "react";


const CarteProduit = ({ produit }) => {
  return(
    <div>
      <img src= {produit.image} alt={produit.name} />
      <h2>{produit.name}</h2> <p>{produit.prix} €</p>
    </div>
  )
}
export default CarteProduit;