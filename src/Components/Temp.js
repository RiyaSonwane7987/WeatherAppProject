import React, { useEffect, useState } from "react";
import searchimg from "./images/search.png";
import WeatherCard from "./WeatherCard";

function Temp()
{
    const[searchValue, setSearchValue] = useState("pune");
    const[temInfo,setTemInfo]=useState({});
    function handleChange(event)
    {
        setSearchValue(event.target.value);
    }
    async function getWeatherInfo() {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=270a0acf92b0a630aa1ae39e1386642e`;  

            const res = await fetch(url);
            const data = await res.json();
            const {temp, humidity} = data.main;
            const{main:weathermood}=data.weather[0];
            const{name} = data;
            const{speed} = data.wind;
            const{country,sunset} = data.sys;
            const myNewWeatherInfo = {
                temp,
                humidity,
                weathermood,
                name,
                speed,
                country,
                sunset,
            };
            setTemInfo(myNewWeatherInfo);




            console.log(temp);
        } catch (error) {
            console.log(error);    
        }   
    };
    
    return(
        <div className="card">
        <div className="search">
        <input type="text" placeholder="enter city name" spellCheck="false" value={searchValue} onChange={handleChange} />
        <button onClick={getWeatherInfo}><img src={searchimg} alt="searchimg" /></button>
        </div>
        <WeatherCard temInfo={temInfo} />
        </div>
    )
}
export default Temp;