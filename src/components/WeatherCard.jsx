import React from 'react'
// import { useState } from 'react'
import Card from './Card'
import RightCard from './RightCard'

const WeatherCard = (props) => {
    // console.log(props.weather)
    const bgAndTextColor = () => {
        if (props.weather === "Rain"){
            return "bg-Rain text-[#dbeafe]"
            
        }
        else if (props.weather ==="Clear"){
                return "bg-Sunny text-black"
        }
        else if (props.weather === "Clouds"){
                return "bg-Clouds text-white"
        }
        else if (props.weather === "Snow"){
                return "bg-Snow text-white"
        }
        else if (props.weather === "Mist"){
            return "bg-Mist text-black"
        }
        else if (props.weather === "Thunderstorm"){
            return 'bg-Thunderstorm text-white'
        }

        else{
            return 'bg-[#4f46e5] text-white'
        }
    }
    return (

                <div className={`${bgAndTextColor()} bg-cover h-full z-full object-fit`}>
                <div className="flex flex-row">
                    <div className="md:basis-1/3 basis:2/3 h-[100vh] relative grow ">
                        <div className='absolute top-[50%] rounded-[15%] translate-y-[-50%] left-[50%] translate-x-[-50%] min-w-[70%] md:min-w-[18em]'>
                        <Card location={props.location} temp={props.temp} feels_like={props.feelsLike} description={props.weather} sunrise={props.sunrise} sunset={props.sunset}/>
                        </div>
                    </div>
                    <div className="md:basis-2/3 basis-1/3 relative h-[100vh]">
                        <div className="grid md:grid-cols-3 absolute grid-cols-1 left-[21%] top-[50%] translate-y-[-50%]">

                            <RightCard location="Delhi"></RightCard>
                            <RightCard location="New York"></RightCard>
                            <RightCard location="London"></RightCard>
                            <RightCard location="Tokyo"></RightCard>
                            <RightCard location="San Francisco"></RightCard>
                            <RightCard location="Dubai"></RightCard>
                            
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default WeatherCard