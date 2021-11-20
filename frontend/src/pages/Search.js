import React, { useState } from "react";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("searchterm", searchTerm);
  };

  return (
    <section className="cakes-search-bar-section">
      <div className="text-center">
        <div title="cakes-search-bar"></div>
        <div className="flex">
          <input
            type="text"
            placeholder="I want to bake.."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <div title="button">
            <button className="" onClick={handleSearch}>
              SEARCH
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
