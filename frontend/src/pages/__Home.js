import React from "react";
// import LinkButton from "../components/fields/LinkButton";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section id="home">
      <section id="left-side-images">
        <div></div>
      </section>

      <section id="right-side-images">
        <div></div>
      </section>

      <section className="h-200 w-200 p-4 border-4 mx-auto flex text-center object-center bg-yellow-300 w-full -200">
        <div className="container px-10 py20 md:">
          <h1 className="font-bold text-center text-4xl">Simply Baking</h1>
        </div>
      </section>

      <section className="middle area of home">
        <section className="box-content h-100 w-400 p-4 border-4">
          <div className="container mx-auto px-10 py20 md: flex-row flex-col items-center text-center">
            <h2 className="font-medium font-style: italic text-2xl">
              Baking Recipes depending on your needs.. nice and simple!
            </h2>
          </div>
        </section>

        <section className="h-1400 w-400 p-4 border-4 items-center text-center">
          <div className="px-4 py-20">
            <p className="font-light text-3xl">
              I'm in the mood to bake and...{" "}
            </p>
          </div>
        </section>

        <section className="box-content h-1000 w-400 p-4 border-4 mx-auto flex items-center text-center object-center">
          <div class="font-light text-2xl bg-white rounded-lg border border-gray w-full -200 w-48 text-gray-900 text-sm items-center">
            <div class="px-4 py-4 border-b border-gray-200 w-full bg-red-600 text-white hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 cursor-pointer">
              <Link to="/AnythingGoes">I'm up for baking anything</Link>
            </div>
            <div class="px-4 py-4 border-b border-gray-200 w-full bg-green-700 text-white hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 cursor-pointer">
              <Link to="/ShortOnTime">I'm short on time</Link>
            </div>
            <div class="px-4 py-4 border-b border-gray-200 w-full bg-pink-500 text-white hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 cursor-pointer">
              <Link to="/Newbie">I'm a newbie</Link>
            </div>
            <div class="px-4 py-4 border-b border-gray-200 w-full bg-blue-500 text-white hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 cursor-pointer">
              <Link to="/WithTheKids">I'm with the kids</Link>
            </div>
            <div class="px-4 py-4 border-b border-gray-200 w-full bg-yellow-300 text-white hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 cursor-pointer">
              <Link to="/Allergies">I have allergies</Link>
            </div>
            <div class="px-4 py-4 border-b border-gray-200 w-full bg-purple-500 text-white hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 cursor-pointer">
              <Link to="/Vegan">I'm vegan</Link>
            </div>
            <div class="px-4 py-4 border-b border-gray-200 w-full bg-green-400 text-white hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 cursor-pointer">
              <Link to="/Celebration">It's a celebration!</Link>
            </div>
            <div class="px-4 py-4 border-b border-gray-200 w-full bg-yellow-600 text-white hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 cursor-pointer">
              <Link to="/ChallengingBakes">I feel like a challenge!</Link>
            </div>
            <div class="px-4 py-4 border-b border-gray-200 w-full bg-pink-900 text-white hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 cursor-pointer">
              <Link to="/LoveChocolate">I love chocolate</Link>
            </div>
          </div>
        </section>
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
            <p className="text-align-center px-4 py-4">Simply Baking by Emma</p>
          </div>
        </footer>
      </section>
    </section>
  );
};
export default Home;
