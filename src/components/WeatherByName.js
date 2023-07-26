import axios from 'axios';


const weatherByName = (location) => {
    const options = {
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather',
        params: {q: `${location}`, units: 'metric', appid: '5681e1c83ac90a5023f98a72575f8ea5'}
        };
        
        axios.request(options).then(function (response) {
            console.log(response.data)
            return response.data
        })
        .catch(function (error) {
            console.error(error);
            return error
        });
    }
    
export default weatherByName;