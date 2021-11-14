import axios from "axios";
const baseUrl = "http://localhost:3000/api";

// All methods for interacting with the api

//Method to get all cakes from the api

export const getAllCakes = async () => {
  const data = await axios.get(`http://localhost:3000/api/cakes`);

  return data;
};

// method to get all countries by id

// method for getting all cakes for category

// method to add a country

// method to delete a country
