import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import WeatherIcon from './WeatherIcon'
import L from 'leaflet'

function Weather() {
    const [city, setCity] = useState('')
    const [weather, setWeather] = useState(null)
    const [weatherCode, setWeatherCode] = useState(null)

    const getWeather = async () => {
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`

        try {
            const response = await fetch(url)
            const data = await response.json()
            setWeather(data)
            if (data.weather && data.weather.length > 0) {
                setWeatherCode(data.weather[0].id)
            }
        } catch (error) {
            console.error('Error al obtener los datos del clima:', error)
        }
    }

    function MapUpdater({ coord }) {
        const map = useMap()
        useEffect(() => {
            if (coord) {
                map.setView([coord.lat, coord.lon], 10)
            }
        }, [coord, map])
        return null
    }
    const customIcon = L.icon({
        iconUrl:
            'https://www.openstreetmap.org/assets/leaflet/dist/images/marker-icon-3d253116ec4ba0e1f22a01cdf1ff7f120fa4d89a6cd0933d68f12951d19809b4.png', // URL del icono
        iconSize: [25, 41],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
    })

    return (
        <div className="bg-sky-700/20 p-7 rounded-md shadow-2xl text-center">
            <h1 className="text-center text-4xl font-bold mb-9 text-white">El clima en:</h1>
            <input
                type="text"
                value={city}
                onChange={e => setCity(e.target.value)}
                placeholder="Ingrese la ciudad"
                className="focus:outline-none px-5 py-2 rounded-sm block w-full"
            />
            <button
                className="rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50 mt-5 mb-5"
                onClick={getWeather}
            >
                Obtener Clima
            </button>
            {weather && weather.cod === 200 && (
                <div className="bg-gray-700/20 p-5 shadow-2xl border border-white/30 rounded-md text-start">
                    <h2 className="font-bold text-2xl text-slate-200">
                        {weather.name}, {weather.sys.country}
                    </h2>
                    <p className="font-bold text-lg text-white">
                        {new Date(weather.dt * 1000).toLocaleDateString('es-ES', {
                            day: 'numeric',
                            month: 'long',
                            hour: 'numeric',
                            minute: '2-digit',
                            hour12: true,
                        })}
                    </p>
                    <div className="flex justify-center items-center mt-2">
                        <WeatherIcon weatherCode={weatherCode} />
                        <p className="mt-2 font-semibold text-slate-400">{weather.weather[0].description}</p>
                    </div>
                    <p className="mt-2 font-semibold text-green-300">Temperatura: {weather.main.feels_like}°C</p>
                    <p className="-mt-1 text-amber-300 text-sm underline"> {weather.main.temp}°C</p>
                    <p className="mt-2 font-semibold text-slate-400">Humedad: {weather.main.humidity}%</p>
                    <p className="mt-2 font-semibold text-slate-400">Nubes: {weather.clouds.all}%</p>
                    <p className="mt-2 font-semibold text-slate-400">Viento: {weather.wind.speed} m/s</p>
                    <p className="mt-2 font-semibold text-slate-400">Visibilidad: {weather.visibility} m</p>
                    <div className="mt-4 rounded-md overflow-hidden  hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 duration-300">
                        {weather && weather.coord && (
                            <MapContainer
                                center={[weather.coord.lat, weather.coord.lon]}
                                zoom={10}
                                style={{ height: '200px', width: '250px' }}
                            >
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Marker position={[weather.coord.lat, weather.coord.lon]} icon={customIcon}>
                                    <Popup>
                                        {weather.name}, {weather.sys.country}
                                    </Popup>
                                </Marker>
                                <MapUpdater coord={weather.coord} />
                            </MapContainer>
                        )}
                    </div>
                </div>
            )}
            {weather && weather.cod !== 200 && <p className="mt-2 font-semibold text-red-400">Ciudad no encontrada</p>}
        </div>
    )
}

export default Weather
