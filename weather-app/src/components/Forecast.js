import React, { useEffect, useState } from 'react'

function Forecast({ city }) {
    const [forecast, setForecast] = useState(null)

    useEffect(() => {
        const getForecast = async () => {
            const apiKey = process.env.REACT_APP_WEATHER_API_KEY
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=es`

            try {
                const response = await fetch(url)
                const data = await response.json()
                setForecast(data)
            } catch (error) {
                console.error('Error al obtener el pronóstico:', error)
            }
        }

        if (city) {
            getForecast()
        }
    }, [city])

    return (
        <div className="p-5">
            {forecast && forecast.list && forecast.list.length > 0 ? (
                <div className="bg-slate-600/35  border border-white/30 overflow-auto h-52">
                    <div>
                        {forecast.list.slice(0, 5).map((item, index) => (
                            <div key={index} className=" p-3 grid grid-cols-3 border-b border-white/20">
                                <p className='text-slate-400 text-sm'>
                                    {new Date(item.dt * 1000).toLocaleDateString('es-ES', {
                                        day: 'numeric',
                                        month: 'long',
                                        hour: 'numeric',
                                        minute: '2-digit',
                                        hour12: true,
                                    })}
                                </p>
                                <p>{item.weather[0].description}</p>
                                <p>Temperatura: {item.main.temp}°C</p>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p className="text-red-400">No se encontraron pronósticos.</p>
            )}
        </div>
    )
}

export default Forecast
