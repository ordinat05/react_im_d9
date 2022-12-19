import "./App.css";
// import React from "react";
import React, { useState } from "react";

function SearchForm() {
  const [search, setSearch] = useState();
  return (
    <div className="App">
      <div className="container">
        <div className="row yanaKay">
          <input
            className="yanaKay"
            name="search"
            placeholder="search countries"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="col-md-4 mx-auto mt-1 "></div>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
