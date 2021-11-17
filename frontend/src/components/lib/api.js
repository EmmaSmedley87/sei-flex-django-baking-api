import axios from "axios";
const baseUrl = "http://localhost:3000/api";

// All methods for interacting with the api

//Method to get all cakes from the api

export const getAllCakes = async () => {
  const data = await axios.get(`http://localhost:3000/api/cakes`);

  return data;
};

// method to get all cakes by id
export const getAllCakesById = async (id) => {
  const data = await axios.get(`${baseUrl}/api/cakes${id}`);
  console.log("This is our cakes returning with Ids");
  return data;
};

// method for updating a cake
export const updateCake = async (formData) => {
  return axios.post(`${baseUrl}/cakes`, formData);
};

// method for getting all cakes for category

// method to add a cake
export const createCake = (formData) => {
  return axios.post(`${baseUrl}/cakes`, formData);
};

// method to delete a cake
export const deleteCake = (id) => {
  return axios.delete(`${baseUrl}/api/cakes/${id}`);
};
