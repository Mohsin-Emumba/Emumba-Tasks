
import './WeatherCard.css';
import React from 'react';
import { Card } from 'react-bootstrap';
import moment from 'moment';


const WeatherCard = ({ dt, temp_min, temp_max, main, icon }) => {
    // create a date object with Date class constructor
    const date = new Date(dt);
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
        <Card >
            <Card.Body className="card">
                {/* <h1>{this.dt ? this.getDay(this.dt) : ''}</h1> */}

                {/* <Card.Title >{main}</Card.Title> */}
                <span className="cardsubtitle">
                    {/* As of {new Date().toLocaleTimeString()}  As of {new Date().toLocaleDateString()} */}
                    <p > {weekday[date.getDay() + 1]}</p>
                </span>
                <Card.Img
                    variant="top"



                    // get the src from example url and pass the icon prop for icon code
                    src={`https://openweathermap.org/img/wn/${icon}@2x.png`}

                //  src={`https://openweathermap.org/img/wn/${data.cod != 404 ? data.weather[0].icon : null}.png`}

                />
                <h4> {Math.floor(temp_min - 273.15)}<sup>o</sup>  {Math.floor(temp_max - 273.15)}<sup>o</sup></h4>


            </Card.Body>


        </Card>
    );
};

export default WeatherCard;