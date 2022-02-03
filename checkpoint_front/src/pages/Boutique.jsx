import React, { useState, useEffect } from "react";
import fetchAllCategories from "../services/categories";

const Boutique = () => {
  const [categories, setCategories] = useState([]);

   /**
   * Fetch des données
   */
    const getData = () => {
      fetchAllCategories()
        .then((data) => {
          setCategories(data);
          console.log(data);
        })
        .catch((err) => console.error(err));
    };
    useEffect(() => {
      getData();
    }, []);
    console.log(categories);
  return(
    <div className="boutique">
      <h1>Boutique</h1>
    </div>
  )
};

export default Boutique;