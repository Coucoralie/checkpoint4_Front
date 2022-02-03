import React from "react";

const Form = () => {
  return(
    <div>
      <h1>Form</h1>
      <form>
        <label htmlFor="name">
          <input type="text" />
        </label>
        <label htmlFor="quantite">
          <input type="number" min="O"/>
        </label>
        <label htmlFor="description">
          <input type="text"/>
        </label>
        <label htmlFor="image">
          <input type="text"/>
        </label>
        <label htmlFor="prix">
          <input type="number" min="O"/>
        </label>
        <label htmlFor="prix">
          <select>
            <option>id_categorie</option>
          </select> 
        </label>
      </form>
    </div>
  )
};

export default Form;