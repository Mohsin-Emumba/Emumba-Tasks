import React, { useState } from "react";
import { FaSearchPlus } from "react-icons/fa"
import DisplayWeather from "./DisplayWeather";
import "./Weather.css";
import { useDispatch, useSelector } from "react-redux";
import store from "../store";
import WeatherList from "./WeatherList";
import { weathersch } from "../actions";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InputGroup from 'react-bootstrap/InputGroup'
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { Row, Col, FormControl, Button } from 'react-bootstrap';
import { FontAwesome } from "react-icons/fa"
import { Search } from "@material-ui/icons";





function Weather() {
    const [weather, setWeather] = useState({
        data: ''
    });
    const [weatherFive, setWeatherFive] = useState({
        data: ''
    });
    const [form, setForm] = useState({
        city: '',
        // zip: '',
        country: '',

    });
    const dispatch = useDispatch();
    const APIKEY = "Enter Your APIKEY here";
    async function weatherData(e) {
        e.preventDefault();
        if (form.city == "") {
            alert("Add values");
        } else {
            const data = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${form.city}&APPID=fb8beb650a2e7c9273236241d9ba70e2`

            )
                .then((res) => res.json())
                .then((data) => data);

            const dataFive = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?q=${form.city}&cnt=5&APPID=c73aa228bfba692462f96e89080aa39a`

            )
                .then((res) => res.json())
                .then((data) => data);

            setWeather({ data: data });
            setWeatherFive({ data: dataFive });
        }
        dispatch(weathersch(weatherData.data));

    }

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name == "city") {
            setForm({ ...form, city: value });
        }

    };
    return (
        <div className="container-fullwidth">


            <>



                <InputGroup className="container-fluid">
                    <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title="City Name"
                        id="input-group-dropdown-1"
                    >
                        <Dropdown.Item href="#">City Name</Dropdown.Item>
                        <Dropdown.Item href="#">City Id</Dropdown.Item>
                        <Dropdown.Item href="#">City Code</Dropdown.Item>

                    </DropdownButton>

                    <FormControl className="searchbarbody"
                        aria-describedby="basic-addon1"
                        type="text"
                        placeholder="Search term"
                        name="city"
                        onChange={(e) => handleChange(e)}
                    />
                    <InputGroup.Append>
                        {/* <Button className="button" onClick={(e) => weatherData(e)}> <i class="fa fa-search" ></i>Search</Button> */}
                        <Button variant="outline-secondary"
                            size="md"


                            onClick={(e) => weatherData(e)} >
                            <i class="fas fa-search"></i>


                            <img src="https://img.icons8.com/ios-glyphs/20/000000/search.png" />
                        </Button>

                    </InputGroup.Append>
                </InputGroup>


            </>
            {
                weather.data && (
                    <DisplayWeather data={weather.data} />

                )
            }

            {
                weatherFive.data && (
                    <WeatherList weathers={weatherFive.data} />
                )
            }


        </div >
    );
}

export default Weather;