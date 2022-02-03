import React from "react";
import { Link } from "react-router-dom";
/** Import de CSS */
import "./CarteProduits.css";
const CarteProduits = ({ produit }) => {
  return (
    <div>
      <div>
        <div className="card">
          <img src={produit.image} alt={produit.name} className="card-img" />
          <div className="card-body">
            <p className="card-produit">{produit.name}</p>
            <p className="card-produit">{produit.prix} €</p>
          </div>
          <div className="bloc-btn">
            <Link to={`/article/${produit.id}`}>
              <button type="button" className="btn">
                Voir le produit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarteProduits;
