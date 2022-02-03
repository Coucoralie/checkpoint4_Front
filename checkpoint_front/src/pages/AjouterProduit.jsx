import React from "react";
import { useNavigate } from "react-router-dom";
/** Import des composants */
import Form from "../components/Form";

const AjouterProduit = () => {
  const navigate = useNavigate();

  const onBackToHome = () => {
    navigate("/");
  };
  return (
    <div>
      <Form buttonAction={onBackToHome} create />
    </div>
  );
};

export default AjouterProduit;
