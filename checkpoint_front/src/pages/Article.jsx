import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const Article = () => {
  const [myProduit, setMyProduit] = useState({});
  const { id } = useParams();
  // const navigate = useNavigate();
  /**
   * Fetch des données
 */
useEffect(() => {
  axios
    .get( `http://localhost:5000/produits/${id}`)
    .then(response => 
      response.data[0])
    .then((data) => {
      setMyProduit(data);
  })
    .catch((err) => console.error(err));
}, []);
  console.log(myProduit);
  return (
    <div>
      <h1>Article</h1>
    </div>
  );
};

export default Article;
