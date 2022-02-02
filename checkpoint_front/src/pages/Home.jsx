import React, { useEffect, useState } from 'react';
import CarteProduit from '../components/CarteProduits';
import fetchAllProduits from '../services/produits';

const Home = () => {
  const [produits, setProduits] = useState([]);

   /**
   * Fetch des données
   */

   const getData = () => {
     fetchAllProduits()
     .then((data) => {
       setProduits(data);
       console.log(data);
     })
     .catch((err) => console.error(err));
   };
   useEffect(() => {
     getData();
   }, []);
console.log(produits);
  return(
    <div>
      <h1>Home</h1>
      {produits.length > 0 && produits.map((produit) => <CarteProduit produit={produit} key={produit.id} />)}
    </div>
  )
};

export default Home;