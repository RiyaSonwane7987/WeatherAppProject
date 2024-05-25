import React, { useEffect } from "react";
import clearimg from "./images/clear.png"
import cloudimg from "./images/clouds.png";
import drizzleimg from "./images/drizzle.png";
import mistimg from "./images/mist.png";
import rainimg from "./images/rain.png";
import snowimg from "./images/snow.png";
import humidimg from "./images/humidity.png";
import windimg from "./images/wind.png";
import sunsetimg from "./images/sunset.png";
function WeatherCard({temInfo})
{
    const[weatherState, setWeatherState] = React.useState("");
    const {
        temp,
        humidity,
        weathermood,
        name,
        speed,
        country,
        sunset,
} = temInfo;

useEffect(() => {

    if(temInfo.weathermood) {
        switch(temInfo.weathermood) {
            
            case "Clouds":
                setWeatherState(cloudimg);
                break;
            case "Clear":
                setWeatherState(clearimg);
                break;

            case "Rain":
                setWeatherState(rainimg);
                break;
            case "Mist":
                setWeatherState(mistimg);
                break;
            case "Snow":
                setWeatherState(snowimg);
                break;
            case "Drizzle":
                setWeatherState(drizzleimg);
                break;
            default:
                setWeatherState(clearimg);
                break;
        }
    }
},[temInfo.weathermood]);
let sec= sunset;
let date = new Date(sec * 1000);
let timeStr = `${date.getHours()}:${date.getMinutes()}`;
    return(
        <div className="weather">
        <img className="weather-icon" src={weatherState} alt="weathericon" />
        <h1 className="temp">{temp}°c</h1>
        <h2 className="tempType">{weathermood}</h2>
        <h3 className="city">{name},{country}</h3>
        <div className="details">
        <div className="col">
        <img src={sunsetimg} alt="sunsetimg" />
        <div>
        <p className="sunset">{timeStr} pm</p>
        <p>Sunset</p>
        </div>
        </div>
        <div className="col">
        <img src={humidimg} alt="humidimg" />
        <div>
        <p className="humidity">{humidity}%</p>
        <p>Humidity</p>
        </div>
        </div>
        <div className="col">
        <img src={windimg} alt="windimg" />
        <div>
        <p className="wind">{speed} km/hr</p>
        <p>Wind Speed</p>
        </div>
        </div>
        </div>
        </div>

    )

}
export default WeatherCard;