import axios from "axios";
import React, { useState, useEffect } from "react";

// const Allergies = () => {
//   return (
//     <div>
//       <header className="Home">
//         <h1 className="home-title">Simply Baking Homepage</h1>
//         <h2>Recipes for when you're...</h2>
//         <p>Needing Allergy Friendly Bakes</p>
//       </header>
//     </div>
//   );
// };

// export default Allergies;

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
    <section id="allergies">
      <section id="left-side-images">
        <div></div>
      </section>

      <section id="right-side-images">
        <div></div>
      </section>

      <section id="Navbar">
        <nav />
      </section>

      <section className="h-200 w-200 p-4 border-4 mx-auto flex text-center object-center bg-yellow-300 w-full -200 items-center">
        <div className="container px-10 py20 md: items-center">
          <h1 className="font-bold text-center text-4xl">Simply Baking</h1>
        </div>
      </section>

      <section className="middle area of chocolate">
        <section className="box-content h-100 w-400 p-4 border-4">
          <div className="container mx-auto px-10 py20 md: flex-row flex-col items-center text-center">
            <h2 className="font-medium font-style: italic text-2xl">
              Baking Recipes depending on your needs.. nice and simple!
            </h2>
          </div>
        </section>

        <section className="h-1400 w-400 p-4 border-4 items-center text-center">
          <div className="px-4 py-20">
            <p className="font-light text-3xl">Recipes for when you're...</p>
            <p className="font-bold text-3xl">A Chocoholic!</p>
          </div>
        </section>

        <section>
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

        <section className="website bottom section">
          <section className="h-1400 w-300 p-4 border-4 font-light text-2xl">
            <div className="left-section">
              <p className="text-left">Need some help getting started?</p>
              <div className="right-section">
                <button className="object-right bg-red-600 px-10 py-4 border-20 border-gray-200 text-white hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 cursor-pointer">
                  Yes- please help!
                </button>
              </div>
            </div>
          </section>

          <footer className="bg-gray-800 text-white items-center text-center">
            <div className="h-100 w-400">
              <p className="text-align-center px-4 py-4">
                Simply Baking by Emma
              </p>
            </div>
          </footer>
        </section>
      </section>
    </section>
  );
}
