import { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import { fetchWeather } from "../api/weather";

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    try {
      const data = await fetchWeather(city);
      setWeather(data);
      setError(null);
    } catch (err) {
      setError("City not found. Try again.");
      setWeather(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col items-center">
      <h1 className="text-4xl font-bold mt-10 text-gray-800">
        🌍 Weather Finder
      </h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-red-600 mt-4">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default Home;