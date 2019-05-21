import React, { Component } from "react";

class Main extends Component {
  state = {
    weather: "",
    apiKey: "f2e1751f17c5b88c00e4dfeac793e96c"
  };

  fetchData = e => {
    const city = e.target.elements.city.value;
    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
        this.state.apiKey
      }`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          weather: data
        });
      })
      .catch(err => alert("Could not fetch data: \n" + err));
    e.preventDefault();
  };

  render() {
    let name = "",
      country = "",
      weatherCondition = "",
      weatherDescription = "",
      temperature = "",
      humidity = "",
      pressure = "";

    if (this.state.weather !== "") {
      name = this.state.weather.name + ",";
      country = this.state.weather.sys.country;
      weatherCondition = this.state.weather.weather[0].main + ",";
      weatherDescription = this.state.weather.weather[0].description;
      temperature =
        Math.round(this.state.weather.main.temp - 273.15) + " celcius";
      humidity = this.state.weather.main.humidity + "%";
      pressure = this.state.weather.main.pressure + " hPa";
    }
    return (
      <div className="display">
        <form onSubmit={this.fetchData} action="" className="display__form">
          <input type="text" name="city" placeholder="Enter city name" />
          <button>Search</button>
        </form>
        <div className="display__weather">
          <p>
            {name} {country}
          </p>
          <p>
            {weatherCondition} {weatherDescription}
          </p>
          <div className="display__weather__results">
            <p>
              <span>Temperature:</span> {temperature}
            </p>
            <p>
              <span>Humidity:</span> {humidity}
            </p>
            <p>
              <span>Pressure:</span> {pressure}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
