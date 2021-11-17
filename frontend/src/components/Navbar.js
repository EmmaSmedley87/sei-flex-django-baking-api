import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ fixed }) => {
  return (
    <>
      <header className="bg-gray-800 md:sticky top-0 z-10">
        <div className="container mx-auto items-center text-center">
          <div className="title-font font-large text-white mb-4 md:mb-0 md:border-blue-700">
            Simply Baking!
          </div>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-blue-700 flex-wrap items-center text-base">
          <div className="navbar-items">
            <Link to="/" className="mr-5 text-white">
              Home
            </Link>
            <Link to="/AnythingGoes" className="mr-5 text-white">
              All Cake Recipes
            </Link>
            <Link to="/Allergies" className="mr-5 text-white">
              Allergies
            </Link>
            <Link to="/Celebration" className="mr-5 text-white">
              Celebration
            </Link>
            <Link to="/ChallengingBakes" className="mr-5 text-white">
              Challenging Bakes
            </Link>
            <Link to="/LoveChocolate" className="mr-5 text-white">
              Love Chocolate
            </Link>
            <Link to="/Newbie" className="mr-5 text-white">
              Baking Newbie
            </Link>
            <Link to="/ShortOnTime" className="mr-5 text-white">
              Short on Time
            </Link>
            <Link to="/Vegan" className="mr-5 text-white">
              Vegan
            </Link>
            <Link to="/WithTheKids" className="mr-5 text-white">
              With The Kids
            </Link>
            <Link to="/Register" className="mr-5 text-white">
              Register
            </Link>
            <Link to="/Login" className="mr-5 text-white">
              Log In
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
