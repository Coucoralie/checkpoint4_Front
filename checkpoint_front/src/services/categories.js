import axios from "axios";
// mise en place d'un service produits et connection au fetch de Home

const fetchAllCategories = async () => {
  let url = `http://localhost:5000/categories`;
  const res = await axios.get(url);
  return res.data;
};

export default fetchAllCategories;