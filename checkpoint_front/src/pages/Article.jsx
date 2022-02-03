import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
/** Import de CSS */
import "./Article.css";

const Article = () => {
  const [myProduit, setMyProduit] = useState({});
  const { id } = useParams();
  // const navigate = useNavigate();
  /**
   * Fetch des données
   */
  useEffect(() => {
    axios
      .get(`http://localhost:5000/produits/${id}`)
      .then((response) => response.data[0])
      .then((data) => {
        setMyProduit(data);
      })
      .catch((err) => console.error(err));
  }, []);
  console.log(myProduit);
  return (
    <>
      <h3 className="title-article">Article</h3>
      <div className="container">
        <div className="uva-card uva-card--horizontal">
          <div className="uva-card__media">
            <img src={myProduit.image} alt={myProduit.name} className="image"/>
          </div>
          <div className="uva-card__content">
            <div className="card-body">
              <h3 className="name">{myProduit.name}</h3>

              <p className="price">Prix : {myProduit.prix} €</p>
              <p className="des">Description : </p>
              <p className="description">{myProduit.description}</p>
              <button type="submit" className="btn-add">Ajouter</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
