import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
const Article = () => {
  const [myProduit, setMyProduit] = useState({});
  const { id } = useParams;
  const navigate = useNavigate();
  return (
    <div>
      <h1>Article</h1>
      <p>{myProduit.name}</p>
    </div>
  );
};

export default Article;
