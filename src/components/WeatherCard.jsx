const WeatherCard = ({ weather }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 mt-6 w-80 mx-auto text-center">
      <h2 className="text-2xl font-bold text-gray-800">{weather.name}</h2>
      <p className="text-gray-500">{weather.weather[0].description}</p>
      <h3 className="text-5xl font-semibold mt-3">{weather.main.temp}°C</h3>
      <div className="flex justify-between mt-4 text-sm text-gray-600">
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind: {weather.wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherCard;