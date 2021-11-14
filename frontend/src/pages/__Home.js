import React from "react";

const Home = () => {
  return (
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
          <p>I'm in the mood to bake and... </p>
        </div>

        <div>
          <button>I'm short on time</button>
          <button>I'm a newbie</button>
          <button>I'm with the kids</button>
          <button>I have allergies</button>
          <button>It's a celebration!</button>
          <button>I feel like a challenge!</button>
          <button>I'm vegan</button>
          <button>I love chocolate</button>
          <button>I'm up for baking anything</button>
        </div>

        <div>
          <p>Need some help getting started?</p>
          <button>Yes- please help!</button>
        </div>
      </section>

      <footer>
        <div>
          <p>Simply Baking by Emma</p>
        </div>
      </footer>
    </section>
  );
};
export default Home;
