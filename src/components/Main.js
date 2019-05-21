import React, { Component } from "react";
import "../App.css";
const weatherDisplay = document.querySelector(".display__weather");

class Main extends Component {
  state = {
    weather: ""
  };

  fetchData = e => {
    // console.log(e.target.elements.city.value);
    e.preventDefault();
    console.log(weatherDisplay);
  };

  render() {
    return (
      <div className="display">
        <form onSubmit={this.fetchData} action="" className="display__form">
          <input type="text" name="city" placeholder="Enter city name" />
          <button>Search</button>
        </form>
        <div className="display__weather">
          <p>London, GB</p>
          <p>Drizzle, light intensity drizzle</p>
          <div className="display__weather__results">
            <p>
              <span>Temperature:</span>{" "}
            </p>
            <p>
              <span>Humidity:</span>{" "}
            </p>
            <p>
              <span>Pressure:</span>{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
