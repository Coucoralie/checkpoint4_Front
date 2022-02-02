import React, { useEffect, useState } from "react";
import CarteProduits from "../components/CarteProduits";
import fetchAllProduits from "../services/produits";
/** Import de CSS */
import "./Home.css";

const Home = () => {
  const [produits, setProduits] = useState([]);
  const [filterProduits, setFilterProduits] = useState(6); // state pour filtrer le nombre de data

  /**
   * Fetch des données
   */
  const getData = () => {
    fetchAllProduits()
      .then((data) => {
        setProduits(data);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getData();
  }, []);
  // charge + de data
  const loadMore = () => {
    setFilterProduits(filterProduits + filterProduits);
  };
  // filtre le nombre de data
  const slice = produits.slice(0, filterProduits);
  return (
    <>
      <div className="new">
        <h3 className="nouveautes">Nouveautes</h3>
      </div>
      <div className="card-container">
        {slice.map((produit) => (
          <CarteProduits produit={produit} key={produit.id} />
        ))}
      </div>
      <div className="button">
        <button type="button" className="btn-more" onClick={() => loadMore()}>
          Voir plus
        </button>
      </div>
    </>
  );
};

export default Home;
