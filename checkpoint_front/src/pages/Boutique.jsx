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
   * Fetch des données
   */
    const getCategories = () => {
      fetchAllCategories()
        .then((data) => {
          setCategories(data);
          console.log(data);
        })
        .catch((err) => console.error(err));
    };
    useEffect(() => {
      getCategories();
    }, []);
    console.log(categories);
    const getProduits = () => {
      fetchAllProduits()
        .then((data) => {
          setProduits(data);
          console.log(data);
        })
        .catch((err) => console.error(err));
    };
    useEffect(() => {
      getProduits();
    }, []);
    console.log(categories);
  return(
    <div className="boutique">
      <h3 className="title-boutique">Boutique</h3>
      <div className="input-boutique">
      <label htmlFor="search" className="search">
        Rechercher par catégorie
        <input type ="text" value={categorieFiltered} onChange={(e) => setCategorieFiltered(e.target.value)} className="input"/>
      </label>
      </div>
      <div className="card-container">
      {/* {categories.filter((value) => {
        if(categorieFiltered === ''){
          return value;
        }else if( value.name.toLowerCase().includes(categorieFiltered.toLowerCase())){
          return value;
        }
        console.log(value);
      })} */}
      {produits.map((produit) => (
        <CarteProduits produit={produit} />
      ))}
      </div>
    </div>
  )
};

export default Boutique;
 