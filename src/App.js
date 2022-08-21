import { useState } from "react";
import "./App.css";
import Insta from "./assets/instagram.png";
import Git from "./assets/github.png";
import Linkdin from "./assets/linkedin.png";


const api = {
  key: "116de2e51f4047fea61819b3c00dfc1f",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState();
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    // if (evt.key === "Enter") {
    //   fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    //     .then((res) => res.json())
    //     .then((result) => {
    //       setWeather(result);
    //       setQuery();
    //       console.log(weather);
    //     });
    // }

    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setQuery();
        console.log(weather);
      });
  };


  const dateBuild = (d) => {
    let months = [
      "january",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "Novembar",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thrusday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "app warm "
            : "app"
          : "app"
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="serch.."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          ></input>
          <button className="submit-btn" onClick={search} type="submit">
            submit
          </button>
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name} , {weather.sys.country}
              </div>
              <div className="date">{dateBuild(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°c </div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="footer">
          <div className="footer-icons">
            <a href="https://www.linkedin.com/in/jayesh-s-patil-89b3871bb/"><img src={Linkdin} className="footer-img" alt="linkdin"></img></a>
            <a href="https://www.instagram.com/jayeshspatil1602/"><img src={Insta} className="footer-img" alt="insta"></img></a>
            <a href="https://github.com/jayesh1602"><img src={Git} className="footer-img" alt="github"></img></a> 
          </div>
          <h3>love ❤️ from jayesh</h3>
        </div>
      </main>
    </div>
  );
}

export default App;
