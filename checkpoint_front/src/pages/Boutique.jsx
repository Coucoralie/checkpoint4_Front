import React, { useState, useEffect } from "react";
import fetchAllCategories from "../services/categories";
import fetchAllProduits from "../services/produits";
/** Import de CSS */
import "./Boutique.css";
/** Import des composants */
import CarteProduits from "../components/CarteProduits";
const Boutique = () => {
  const [categories, setCategories] = useState([]);
  const [produits, setProduits] = useState([]);
  const [categorieFiltered, setCategorieFiltered] = useState("");

  /**
   * Fetch des données Categories
   */
  const getCategories = () => {
    fetchAllCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.error(err));
  };
  /**
   * Fetch des données Produits
   */
  const getProduits = () => {
    fetchAllProduits()
      .then((data) => {
        setProduits(data);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getProduits();
  }, []);
  return (
    <div className="boutique">
      <h3 className="title-boutique">Boutique</h3>
      <div className="input-boutique">
        <label htmlFor="search" className="search">
          Rechercher par catégorie
          <input
            type="text"
            value={categorieFiltered}
            onChange={(e) => setCategorieFiltered(e.target.value)}
            className="input"
          />
        </label>
      </div>
      <div className="card-container">
        {produits.map((produit) => (
          <CarteProduits produit={produit} />
        ))}
      </div>
    </div>
  );
};

export default Boutique;
