import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
/** Import de CSS */
import "./Article.css";
/** Import de composant */
import Form from "../components/Form";

Modal.setAppElement("#root");
const Article = () => {
  const [myProduit, setMyProduit] = useState({});
  const { id } = useParams();
  const [confirmation, setConfirmation] = useState(false);
  const [modification, setModification] = useState(false);
  const [redirection, setRedirection] = useState(false);
  const navigate = useNavigate();
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
  }, [id]);
  return (
    <>
      <Modal isOpen={confirmation}></Modal>
      <Modal isOpen={redirection}></Modal>
      <Modal isOpen={modification}>
        <Form myProduit={myProduit} />
      </Modal>
      <h3 className="title-article">Article</h3>
      <div className="container">
        <div className="uva-card uva-card--horizontal">
          <div className="uva-card__media">
            <img src={myProduit.image} alt={myProduit.name} className="image" />
          </div>
          <div className="uva-card__content">
            <div className="card-body">
              <h3 className="name">{myProduit.name}</h3>

              <p className="price">Prix : {myProduit.prix} €</p>
              <p className="des">Description : </p>
              <p className="description">{myProduit.description}</p>
              <button type="submit" className="btn-add">
                Ajouter
              </button>
              <div className="boutons">
                <button type="submit" className="btn-modifier">
                  Modifier
                </button>
                <button type="submit" className="btn-supprimer">
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
