import React, { useState } from 'react'

function Weather() {
    const [city, setCity] = useState('')
    const [weather, setWeather] = useState(null)

    const getWeather = async () => {
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`

        try {
            const response = await fetch(url)
            const data = await response.json()
            setWeather(data)
        } catch (error) {
            console.error('Error al obtener los datos del clima:', error)
        }
    }

    return (
        <div className="bg-sky-700/20 p-7 rounded-md  shadow-2xl text-center">
            <h1 className="text-center text-4xl font-bold mb-9 text-white">Clima</h1>
            <input
                type="text"
                value={city}
                onChange={e => setCity(e.target.value)}
                placeholder="Ingrese la ciudad"
                className="focus:outline-none px-5 py-2 rounded-sm block"
            />
            <button
                className="rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50 mt-5 mb-5"
                onClick={getWeather}
            >
                Obtener Clima
            </button>
            {weather && weather.cod === 200 && (
                <div className="bg-gray-700/20 p-5 shadow-2xl border border-white/30 rounded-md">
                    <h2>
                        {weather.name}, {weather.sys.country}
                    </h2>
                    <p>{weather.weather[0].description}</p>
                    <p>Temperatura: {weather.main.temp}°C</p>
                    <p>Humedad: {weather.main.humidity}%</p>
                    <p>Viento: {weather.wind.speed} m/s</p>
                </div>
            )}
            {weather && weather.cod !== 200 && <p>Ciudad no encontrada</p>}
        </div>
    )
}

export default Weather
