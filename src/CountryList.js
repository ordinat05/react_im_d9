import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function CountryList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      // .get("https://restcountries.eu/rest/v2/all%22)
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data))
      .catch((error) => console.log({ error }));
  }, []);

  const generateId = () => {
    return Math.random()
      .toString(36)
      .substr(2, 9);
  };

  return countries.map((country) => {
    return (
      <div key={generateId()} className="countryList">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto mt-1 ">
              <div className="country">
                <div className="row">
                  <img src={country.flags.png} alt={country.name.common} />
                </div>
                <div className="row">
                  <div>
                    {/* <h3>{country.altSpellings[1]}</h3> */}
                    <span>
                      Ülke Adı : <b>{country.name.common}</b>
                    </span>
                    <p>
                      Başkenti : <b>{country.capital}</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
}
export default CountryList;
