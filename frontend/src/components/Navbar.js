import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/" className="navbar-items">
          Home
        </Link>
        <Link to="/AnythingGoes" className="navbar-items">
          All Cake Recipes
        </Link>
        <Link to="/Allergies" className="navbar-items">
          Allergies
        </Link>
        <Link to="/Celebration" className="navbar-items">
          Celebration
        </Link>
        <Link to="/ChallengingBakes" className="navbar-items">
          Challenging Bakes
        </Link>
        <Link to="/LoveChocolate" className="navbar-items">
          Love Chocolate
        </Link>
        <Link to="/Newbie" className="navbar-items">
          Baking Newbie
        </Link>
        <Link to="/ShortOnTime" className="navbar-items">
          Short on Time
        </Link>
        <Link to="/Vegan" className="navbar-items">
          Vegan
        </Link>
        <Link to="/WithTheKids" className="navbar-items">
          With The Kids
        </Link>
        <Link to="/Register" className="navbar-items">
          Register
        </Link>
        <Link to="/Login" className="navbar-items">
          Log In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
