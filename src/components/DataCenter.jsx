import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';
import WeatherCard from './WeatherCard';
import SearchBar from './SearchBar';

const DataCenter = (props) => {
    const [city,setCity] = useState('Raleigh')
    const [userAddress, setUserAddress] = useState(null);
    const [weatherData, setWeatherData] = useState(Array(5).fill(null));

    // Getting Current location
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            const { latitude, longitude } = position.coords;
            fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDoy9VIc4f7dTvrCSsJNlJyZKNtDxCpUGA`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setUserAddress(data.results[0].formatted_address);
            });
        })
    },[])

    // Weather Forecast from location
    useEffect(()=>{ 
        navigator.geolocation.getCurrentPosition((position)=>{
            const {latitude,longitude} = position.coords;
            const options = {
                method: 'GET',
                url: 'https://api.openweathermap.org/data/2.5/weather',
                params: {lat: `${latitude}`, lon: `${longitude}`, appid: `${process.env.WEATHER_API}`,units:'metric'}
              };


            axios.request(options).then(function (response) {
                    
                    // Update State
                    setWeatherData([response.data.weather[0].main,
                                    response.data.main.feels_like,
                                    response.data.sys.sunrise,
                                    response.data.sys.sunset,
                                    response.data.main.temp])
                })
                .catch(function (error) {
                    console.error(error);
                });
        
        })

    },[city])

    // get weather from name location 
    useEffect(()=>{
        const options = {
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather',
        params: {q: `${city}`, units: 'metric', appid: '18b28d123e8a646e52b51a25226feaac'}
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

    },[city])

    const final_location = () => {
        return userAddress != null ? setCity(userAddress) : city
    }   

    return (

        <div className="h-[100vh] w-[100vw] relative">
            <div className="absolute z-10  left-[50%] top-[10%]">
                <SearchBar stateChanger={setCity}/>
            </div>
                <WeatherCard feelsLike = {weatherData[1]} temp = {weatherData[4]} sunrise = {weatherData[2]} sunset = {weatherData[3]} location = {city} weather = {weatherData[0]} />
        </div>
    )
}

export default DataCenter