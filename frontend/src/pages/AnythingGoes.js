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
      <section>
        <div>
          <header className="Home">
            <h1 className="home-title">Simply Baking Homepage</h1>
          </header>
        </div>

        <section>
          <div>
            <h2>Baking Recipes depending on your needs.. nice and simple!</h2>
          </div>
        </section>

        <section>
          <div>
            <p>Recipes for when you're... </p>
            <p>Up for baking anything!</p>
          </div>
        </section>

        <div>
          {cakes.map((cake) => {
            return (
              <div key={cake.id} className="">
                <div>{cake.name}</div>
                <div>Make this cake!</div>
                {/* <div>{cake.recipe_ingrediants}</div> */}
              </div>
            );
          })}
        </div>
      </section>

      <div>
        <p>Need some help getting started?</p>
        <button>Yes- please help!</button>
      </div>

      <footer>
        <div>
          <p>Simply Baking by Emma</p>
        </div>
      </footer>
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
