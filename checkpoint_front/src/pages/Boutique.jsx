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
  const [produitsShown, setProduitsShown] = useState([]);
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
        setProduitsShown(data);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getCategories();
    getProduits();
  }, []);

  useEffect(() => {
    const provProduct = produits.filter(
      (product) => product.id_categories === parseInt(categorieFiltered, 10)
    );
    setProduitsShown(provProduct);
  }, [categorieFiltered]);
  return (
    <div className="boutique">
      <h3 className="title-boutique">Boutique</h3>
      <div className="input-boutique">
        <label htmlFor="search" className="search">
          <select
            name="search"
            value={categorieFiltered}
            onChange={(e) => setCategorieFiltered(e.target.value)}
            className="input"
          >
            <option>Rechercher par catégorie</option>
            {categories.map((categorie) => {
              <option>Rechercher par catégorie</option>;
              return (
                <option value={categorie.id} key={categorie.id}>
                  {categorie.name}
                </option>
              );
            })}
          </select>
        </label>
      </div>
      <div className="card-container">
        {produitsShown.map((produit) => (
          <CarteProduits produit={produit} />
        ))}
      </div>
    </div>
  );
};

export default Boutique;
