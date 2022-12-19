import "./App.css";
import React from "react";
import CountryList from "./CountryList";
import CountryList2 from "./CountryList2";
import SearchForm from "./SearchForm";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h5>React Dersleri DERS09</h5>
        <div className="row">
          <div className="col-md-8 mx-auto mt-1 ">
            <SearchForm />
            <CountryList2 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
