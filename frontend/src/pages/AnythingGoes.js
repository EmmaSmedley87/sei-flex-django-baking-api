import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Cakes() {
  const [cakes, setCakes] = useState([]);

  // const [searchTerm, setSearchTerm] = useState("");

  // const anythingGoes = () => {
  //   return cakes.filter((cakes) => {
  //     console.log(`FILTERCAKES`, cakes.createdBy);
  //     if (searchTerm.length === 0) {
  //       return cakes;
  //     } else {
  //       return cakes.name.toLowerCase().includes(searchTerm.toLowerCase());
  //     }
  //   });
  // };

  useEffect(() => {
    async function getAllCakes() {
      const { data } = await axios.get("http://localhost:8000/api/cakes/");
      setCakes(data);
      console.log("Data here", data);
    }
    getAllCakes();
  }, []);

  // useEffect(() => {
  //   getAllCakes().then(function (response) {
  //     setCakes(response.data);
  //     console.log("This is a response", response.data);
  //   });
  // }, []);

  return (
    <>
      <div>
        <header className="Anything Goes">
          <h1 className="anything-goes-title">Simply Baking</h1>
          <h2>Recipes for when you're...</h2>
          <p>Up For Baking Anything!</p>
          <div>
            {cakes.map((cake) => {
              return (
                <div key={cake.id} className="">
                  <div>{cake.name}</div>
                  <div>{cake.recipe_ingrediants}</div>
                </div>
              );
            })}
          </div>
        </header>
      </div>
    </>
  );
}

//

// [
//     "id": 2,
//     "name": "Carrot Cake",
//     "cake_image": "http://",
//     "recipe_ingrediants": "Some ingrediants here",
//     "recipe_instructions": "Some recipe instructions here",
//     "time": "01:20:00",
//     "skill_level": "Easy",
//     "cake_Categories": [1]
