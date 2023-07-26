import * as React from 'react';
import moment from "moment";


export default function BasicCard(props) {
    // console.log(typeof(props.sunrise),"dfasdf")
    var h = moment.unix(props.sunrise).toArray()
    const sunrise_time = `${h[3]} : ${h[4]} : ${h[5]}`

    var f = moment.unix(props.sunset).toArray()
    const sunset_time = `${f[3]} : ${f[4]} : ${f[5]}`

    const text_size = () => {
        // console.log(props.location.length)
        return (props.location.length < 12 ? 'text-6xl' : 'text-3xl')
    }

    return (
        <div className='relative min-h-fit m-[2%] backdrop-blur-sm'>
            <div className='mt-[5%] ml-[10%] '>
                <h1 className={`${text_size()} `}>{props.location}</h1>
                <br/>
                <div className="flex flex-row ">
                    <div className="flex flex-col basis-1/2">
                        <div>Feels</div>
                        <h1 className='text-5xl'>{props.feels_like}</h1>
                    </div>

                    <div className='basis-1/2 ml-[15%]'>
                        <h2 >Temp</h2> 
                        <h2 className="text-2xl">{props.temp}</h2>
                    </div>
                </div>
                <br></br>
                <div className="flex flex-row">
                    <div className="basis-1/4"></div>
                    <div className="basis-1/2">
                        <h1 className='text-6xl'>{props.description}</h1>
                    </div>
                    <div className="basis-1/4"></div>
                </div>
                <br></br>

                <div className='flex flex-row '> 
                <p className='text-2xl border-1'>Sunrise - &nbsp;</p> 
                <p className='text-xl'>{sunrise_time}</p>
                </div>

                <div className='flex flex-row'> 
                <p className='text-2xl items-baseline'>Sunset - &nbsp;</p> 
                <p className='text-xl items-baseline'>{sunset_time}</p>
                </div>

            </div>
        </div>
    );
}