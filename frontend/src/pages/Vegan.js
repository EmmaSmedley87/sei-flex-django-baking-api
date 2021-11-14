import React from "react";

const Vegan = () => {
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
            <p>Feeling like a challenge!</p>
          </div>
        </section>
      </section>

      <div>
        <p>Need some help getting started?</p>
        <button>Vegan!</button>
      </div>

      <footer>
        <div>
          <p>Simply Baking by Emma</p>
        </div>
      </footer>
    </>
  );
};

export default Vegan;
