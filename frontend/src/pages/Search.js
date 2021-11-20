import React from "react";

const Search = ({ handleSearchChange }) => {
  return (
    <section title="search-bar-section">
      <div title="search-bar">
        <div className="container mx-auto px-10 py26 md: flex-row flex-col items-center">
          <section className="cakes-search-bar-section">
            <div className="text-center">
              <input
                type="text"
                placeholder="I want to bake.."
                onChange={handleSearchChange}
              />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Search;
