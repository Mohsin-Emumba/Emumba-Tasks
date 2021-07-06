import React from "react";
import "./displayweather.css";
function DisplayWeather(props) {
    const { data } = props;
    const iconurl =
        "https://openweathermap.org/img/wn/" +
        `${data.cod != 404 ? data.weather[0].icon : null}` +
        ".png";

    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return (
        <div className="container-fluid">
            {data.cod != 404 ? (
                <React.Fragment>

                    <div className="maincard">


                        <span className="cardtitle">
                            {data.name} , {data.sys.country}
                        </span>
                        <span className="cardsubtitle">
                            {/* As of {new Date().toLocaleTimeString()}  As of {new Date().toLocaleDateString()} */}
                            {weekday[d.getDay()]}
                        </span>
                        <span className="status">{data.weather[0].main}</span>
                        <span className="tempp">         <h1>
                            {" "}
                            {Math.floor(data.main.temp - 273.15)}
                        </h1>
                            <h3> <sup><sup>o</sup>C|<sup>o</sup>F
                            </sup>  </h3> </span>
                        <img className="weather-icon" src={iconurl} alt="" srcSet="" />

                        <div className="desc">

                            <h4>Wind Speed:  {Math.floor((data.wind.speed * 18) / 5)} m/s</h4>
                            <h4>Humidity  :  {data.main.humidity} %</h4>
                            <h4>Pressure  :  {data.main.pressure} hPa </h4>
                        </div>













                    </div>

                </React.Fragment>
            ) : (
                <div className="maincard">
                    <h2>{data.message}</h2>
                </div>
            )}
        </div>
    );
}

export default DisplayWeather;