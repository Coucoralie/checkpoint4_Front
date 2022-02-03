import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
/** Import de CSS */
import "./Article.css";
/** Import de composant */
import Form from "../components/Form";
import Message from "../components/Message";

Modal.setAppElement("#root");
const Article = () => {
  const [envoiForm, setEnvoiForm] = useState(false);
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
  const deleteOneMovie = () => {
    axios.delete(`http://localhost:5000/produits/${id}`).then(() => {
      setTimeout(() => navigate('/'), 3000);
    });
  };
  const onDeleteConfirmation = (validation) => {
    if (validation) {
      deleteOneMovie(true);
      setRedirection(true);
    } else {
      setConfirmation(false);
    }
  };
  const onCancelModification = (produit) => {
    if (produit) setMyProduit(produit);
    setModification(false);
  };
  return (
    <>
      <Modal isOpen={confirmation}>
        <Message
          title="Suppression du produit"
          description={`Confirmez-vous la suppression du produit ${myProduit.name}`}
          buttonAction={onDeleteConfirmation} />
      </Modal>
      <Modal isOpen={redirection}>
        <Message title="Suppression du produit"
          description={`Suppression du produit ${myProduit.name} en cours, vous allez être redirigé`} />
      </Modal>
      <Modal isOpen={modification}>
        <Form myProduit={myProduit} buttonAction={onCancelModification} />
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
              <button type="submit" className="btn-add" onClick={() => setEnvoiForm(!envoiForm)}>
                Ajouter
              </button>
              <div className={envoiForm ? 'alert_open' : 'alert_close'}>
                <button
                  className="btn-close"
                  type="button"
                  onClick={() => setEnvoiForm(!envoiForm)}
                >
                  X
                </button>
                <h3 className="title-popup">Le produit a bien été ajouté</h3>
              </div>
              <div className="boutons">
                <button type="submit" className="btn-modifier" onClick={() => setModification(true)}>
                  Modifier
                </button>
                <button type="submit" className="btn-supprimer" onClick={() => setConfirmation(true)}>
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
