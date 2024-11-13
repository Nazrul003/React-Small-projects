import { useState, useEffect } from "react";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import humadity from "../assets/images/humadity.png";

function WeatherData() {
  let [city, SetCity] = useState('');
  let [weatherData, setWeatherData] = useState({ 
    temp: '',
    windSpeed: ''
  });
  let [error, setError] = useState('');
  let [er, setEr] = useState(false);

  useEffect(() => {
    if (city) {
      setWeatherData({ temp: '', windSpeed: '' });
      setError('');

      fetch(`https://api.openweathermap.org/data/2.5/find?q=${city}&appid=109788ac252eb509d2234de480ca391a`)
        .then((response) => response.json())
        .then((data) => {
          if (data.list.length === 0) {
            setError('City not found');
            setEr(true);
            return;
          }

          setWeatherData({
            temp: data.list[0].main.temp,
            windSpeed: data.list[0].wind.speed
          });
          setEr(false); 
        })
        .catch((error) => {
          setError('City not found');
          setEr(true);
        });
    }
  }, [city]);

  let temperature = weatherData.temp && !isNaN(weatherData.temp)
    ? (weatherData.temp - 273.15).toFixed(2)
    : '';
  let windSpeed = weatherData.windSpeed && !isNaN(weatherData.windSpeed) 
    ? weatherData.windSpeed.toFixed(2) 
    : '';

  return (
    <div className='mx-auto flex flex-col items-center w-[500px] shadow-xl p-4 rounded-lg bg-gray-800 my-20'>
      <input
        className='w-96 text-center my-6 text-[25px] rounded-3xl focus:outline-none bg-white border-none p-2 text-black placeholder:text-white'
        type="text"
        value={city}
        placeholder="Enter your city name"
        onChange={(e) => {
          SetCity(e.target.value);
        }}
      />

      <div>
        {er && city !== '' ? (
          <h1 className='text-white'>{error}</h1>
        ) : (
          <div>
            <div className="flex items-center justify-around w-full">
              <h1 className='text-white text-[40px] font-bold mt-10'>
                {city === '' ? '' : temperature}°C
              </h1>
            </div>

            <div className="text-center my-2 text-[30px] text-white">
              {city}
            </div>

            <div className="flex mt-10 relative mx-auto w-[300px] p-5 items-center">
              <div>
                <TiWeatherWindyCloudy className="text-[30px] text-white absolute top-0 left-0" />
              </div>
              <div>
                <img className="w-[30px] bg-transparent absolute top-0 right-[80px]" src={humadity} alt="Humidity Icon" />
                <h2 className="absolute top-0 right-0 text-white">
                  {city !== '' ? windSpeed : ''}{windSpeed !== '' && ' km/h'}
                </h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherData;
