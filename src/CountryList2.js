import "./Card.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function CountryList2() {
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
    // const currenciesARA = country.currencies;
    // const currenciesARA =
    //   country.currencies && Object.keys(country.currencies)[0];

    // console.log(currenciesARA);

    return (
      <div key={generateId()} className="eeee">
        {/* <div className="container py-3">
          <div className="card">
            <div className="row ">
              <div className="col-md-5">
                <div
                  id="CarouselTest"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#CarouselTest"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li data-target="#CarouselTest" data-slide-to="1"></li>
                    <li data-target="#CarouselTest" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block"
                        src="https://picsum.photos/450/300?image=1072"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block"
                        src="https://picsum.photos/450/300?image=855"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block"
                        src="https://picsum.photos/450/300?image=355"
                        alt=""
                      />
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#CarouselTest"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#CarouselTest"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-7 px-3">
                <div className="card-block px-6">
                  <h4 className="card-title">
                    Horizontal Card with Carousel - Bootstrap 4{" "}
                  </h4>
                  <p className="card-text">
                    The Carousel code can be replaced with an img src, no
                    problem. The added CSS brings shadow to the card and some
                    adjustments to the prev/next buttons and the indicators is
                    rounded now. As in Bootstrap 3
                  </p>
                  <p className="card-text">
                    Made for usage, commonly searched for. Fork, like and use
                    it. Just move the carousel div above the col containing the
                    text for left alignment of images
                  </p>
                  <br></br>
                  <a href="/#" className="mt-auto btn btn-primary  ">
                    Detaylara Git
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="container">
          <div className="card ">
            <div className="row ">
              <div className="col-sm-5">
                <img
                  className="d-block w-100"
                  src={country.flags.png}
                  alt={country.name.common}
                />
              </div>
              <div className="col-sm-7">
                <div className="card-block">
                  <h6>
                    <strong>Ülke Adı : </strong> {country.name.common}
                  </h6>
                  <h6>
                    <strong>Başkenti : </strong> {country.capital}
                  </h6>
                  <h6>
                    <strong>Nüfusu : </strong> {country.population}
                  </h6>
                  <h6>
                    <strong>Para Birimi : </strong>
                    {/* {country.currencies[currenciesARA]?.name} */}
                    {/* <strong>{country.currencies[currenciesARA]?.symbol}</strong> */}
                    {/* {JSON.stringify(country.currencies)} */}
                    {/* {JSON.stringify(Object.keys(country))} */}
                    {/* {JSON.stringify(
                      currenciesARA && Object.keys(currenciesARA)
                    )} */}
                  </h6>
                  <h6>
                    <strong>Plaka Harfleri : </strong>
                    {country.car.signs}
                  </h6>

                  <h6>
                    <strong>
                      <a href={country.maps.googleMaps} target="_blank">
                        Haritada Yeri
                      </a>
                      &nbsp; &nbsp;
                      <a href={country.maps.openStreetMaps} target="_blank">
                        Sokak Görünümü
                      </a>
                    </strong>
                  </h6>
                  {/* 🔺🔺🔺🔺  */}
                  {/* <a href="/#" className="btn btn-primary btn-sm">
                    Read More
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          {/* <div className="card float-right">
            <div className="row">
              <div className="col-sm-5">
                <img
                  className="d-block w-100"
                  src="https://picsum.photos/150?image=641"
                  alt=""
                />
              </div>
              <div className="col-sm-7">
                <div className="card-block">
                  <p>Copy paste the HTML and CSS.</p>
                  <p>Change around the content for awsomenes</p>
                  <br></br>
                  <a href="/#" className="btn btn-primary btn-sm float-right">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <br></br>
        <br></br>
        {/* deneme 🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻 */}
        {/* <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto mt-1 ">
              <div className="country">
                <div className="row">
                  <img src={country.flags.png} alt={country.name.common} />
                </div>
                <div className="row">
                  <div>
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
        </div> */}
      </div>
    );
  });
}
export default CountryList2;
