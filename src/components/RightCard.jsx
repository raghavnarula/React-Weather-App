import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';


const RightCard = (props) => {

    const [weatherData, setWeatherData] = useState(Array(5).fill(null));

    useEffect(()=>{
        const options = {
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather',
        params: {q: `${props.location}`, units: 'metric', appid:`${process.env.REACT_APP_WEATHER_API}`}
        };

        axios.request(options).then(function (response) {
            

            // Update State
            setWeatherData([response.data.weather[0].main,
                                response.data.main.feels_like,
                                response.data.sys.sunrise,
                                response.data.sys.sunset,
                                response.data.main.temp])

        }).catch(function (error) {
        console.error(error);
        });
    },[])

    return (
        <div className="border-4 border-black shadow-2xl rounded-2xl p-2 md:h-[20vh] backdrop-blur-lg px-5 m-[4%]">
            <div className="text-[150%] font-bold underline">
                {props.location}
            </div>
            <div className="">
                {weatherData[1]}
            </div>
            <div className="className">
                {weatherData[0]}
            </div>
            
        </div>
    )
}

export default RightCard