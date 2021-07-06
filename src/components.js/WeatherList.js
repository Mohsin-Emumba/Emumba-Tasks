
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import WeatherCard from './WeatherCard'
import './WeatherList.css';

const WeatherList = ({ weathers }) => {
    const weatherList = weathers.list;

    return (
        <div className=" container">
            <Row >
                {
                    weatherList && (
                        weatherList.map(({ dt, main, weather }) => (
                            <Col key={dt} className="collist">
                                <WeatherCard
                                    temp_max={main.temp_max}
                                    temp_min={main.temp_min}
                                    dt={dt * 1000}
                                    main={weather[0].main}
                                    icon={weather[0].icon}
                                />
                            </Col>
                        ))
                    )
                }
            </Row></div>
    )
}

export default WeatherList;
