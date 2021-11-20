import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CakesCard from "../components/CakesCard";
import Search from "../pages/Search";
// import { Button } from "bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Cakes() {
  const [cakes, setCakes] = useState([]);
  const [cake, setCake] = useState([]);
  const [filteredCakes, setFilteredCakes] = useState([]);

  // Modal Setup
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    const buttonValue = e.target.value;
    setCake(cakes.filter((cake) => cake.name === buttonValue));
    setShow(true);
  };

  useEffect(() => {
    async function getAllCakes() {
      const { data } = await axios.get("http://localhost:8000/api/cakes/");
      setCakes(data);
      console.log("Data here", data);
    }
    getAllCakes();
  }, []);

  const handleChange = (e) => {
    const userInput = e.target.value;
    const regexSearch = new RegExp(userInput, "i");
    setFilteredCakes(cakes.filter((cake) => regexSearch.test(cake.name)));
  };

  return (
    <>
      {cake.map((cakeObj) => {
        return (
          <Modal key={cakeObj.id} show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{cakeObj.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="recipe-instructions">
                {cakeObj.recipe_instructions}
              </div>
              <div className="ingredients"></div>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
        );
      })}

      <section id="anything-goes">
        <section id="left-side-images">
          <div></div>
        </section>

        <section id="right-side-images">
          <div></div>
        </section>

        <section id="Navbar">
          <nav />
        </section>

        <Search handleSearchChange={handleChange} />

        <section className="h-200 w-200 p-4 border-4 mx-auto flex text-center object-center bg-yellow-300 w-full -200 items-center">
          <div className="container px-10 py20 md: items-center">
            <h1 className="font-bold text-center text-4xl">Simply Baking</h1>
          </div>
        </section>

        <section title="middle area of home">
          <section className="box-content h-100 w-400 p-4 border-4">
            <div className="container mx-auto flex px-10 py20 md: flex-row flex-col items-center">
              <h2 className="font-medium font-style: italic text-2xl">
                Baking Recipes depending on your needs.. nice and simple!
              </h2>
            </div>
          </section>

          <section className="h-1400 w-400 p-4 border-4 items-center text-center">
            <div className="px-4 py-20">
              <p className="font-light text-3xl">Recipes for when...</p>
              <p className="font-bold text-3xl">Anything Goes...</p>
            </div>
          </section>

          <section className="h-14000 w-400 p-4 border-4 items-center text-center">
            {(filteredCakes.length > 0 ? filteredCakes : cakes).map((cake) => {
              return (
                <CakesCard
                  name={cake.name}
                  key={cake.id}
                  id={cake.id}
                  handleShowModal={handleShow}
                />
              );
            })}
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
    </>
  );
}
