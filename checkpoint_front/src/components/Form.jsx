import React, { useState, useEffect } from "react";
import fetchAllCategories from "../services/categories";
import axios from "axios";
/** Import de CSS */
import "./Form.css";

const Form = ({ myProduct = {} }) => {
  const [categories, setCategories] = useState([]);
  const [categorieSelected, setCategorieSelected] = useState("");
  const [product, setProduct] = useState(myProduct);
  const [titleProduct, setTitleProduct] = useState("");
  const [quantiteProduct, setQuantiteProduct] = useState();
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [imgProduct, setImgProduct] = useState("");
  const [prixProduct, setPrixProduct] = useState();

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
  useEffect(() => {
    getCategories();
  }, []);

  /**
   * Création d'un produit en BDD
   *
   */
  const createProductInBDD = () => {
    const product = {
      name: titleProduct,
      quantite: quantiteProduct,
      description: descriptionProduct,
      image: imgProduct,
      prix: prixProduct,
      id_categories: categorieSelected,
    };
    axios
      .post(`http://localhost:5000/produits`, product)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="container-form">
      <div className="title">
        <h2 className="title-form">Ajouter un nouveau produit</h2>
        <p className="text-form">
          L ensemble des champs doivent être renseigné
        </p>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit} className="form">
          <div className="input">
            <label htmlFor="name">
              <h3 className="tite-input">Nom du Produit</h3>
              <input
                type="text"
                placeholder="Nom du produit"
                value={titleProduct}
                onChange={(e) => setTitleProduct(e.target.value)}
                className="form-control"
              />
            </label>
          </div>
          <div className="input">
            <label htmlFor="quantite">
              <h3 className="tite-input">Quantite en stock</h3>
              <input
                type="number"
                min="O"
                placeholder="0"
                value={quantiteProduct}
                onChange={(e) => setQuantiteProduct(e.target.value)}
                className="form-control"
              />
            </label>
          </div>
          <div className="input">
            <label htmlFor="description">
              <h3 className="tite-input">Description du Produit</h3>
              <input
                type="text"
                placeholder="Description du Produit"
                value={descriptionProduct}
                onChange={(e) => setDescriptionProduct(e.target.value)}
                className="form-control"
              />
            </label>
          </div>
          <div className="input">
            <label htmlFor="image">
              <h3 className="tite-input">Inserer l'image du produit</h3>
              <input
                type="text"
                placeholder="Inserer l'image du produit"
                value={imgProduct}
                onChange={(e) => setImgProduct(e.target.value)}
                className="form-control"
              />
            </label>
          </div>
          <div className="input">
            <label htmlFor="prix">
              <h3 className="tite-input">Prix du Produit</h3>
              <input
                type="number"
                min="O"
                placeholder="Prix du produit"
                value={prixProduct}
                onChange={(e) => setPrixProduct(e.target.value)}
                className="form-control"
              />
            </label>
          </div>
          <div className="input">
            <label htmlFor="prix">
              <h3 className="tite-input">Catégorie</h3>
              <select
                name="search"
                onChange={(e) => setCategorieSelected(e.target.value)}
                className="form-control"
              >
                <option>Sélectionner la categorie du Produit</option>
                {categories.map((categorie) => {
                  return (
                    <option value={categorie.id} key={categorie.id}>
                      {categorie.name}
                    </option>
                  );
                })}
              </select>
            </label>
          </div>
          <div className="input">
            <button
              type="submit"
              onClick={() => createProductInBDD()}
              className="btn-ajouter"
            >
              <h3 className="tite-input">Ajouter</h3>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
