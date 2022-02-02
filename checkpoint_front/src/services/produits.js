import axios from 'axios';
// mise en place d'un service produits et connection au fetch de Home

const fetchAllProduits = async() => {
  let url = `http://localhost:5000/produits`;
  const res = await axios.get(url);
  return res.data;
};

export default fetchAllProduits;