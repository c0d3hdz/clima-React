import React from 'react'
import ThunderstormIcon from '../icons/thunderstorm.svg'
import DrizzleIcon from '../icons/drizzle.svg'
import RainIcon from '../icons/rain.svg'
import SnowIcon from '../icons/snow.svg'
import AtmosphereIcon from '../icons/atmosphere.svg'
import ClearSkyIcon from '../icons/clear.svg'
import CloudsIcon from '../icons/clouds.svg'

const weatherIcons = {
    Thunderstorm: ThunderstormIcon,
    Drizzle: DrizzleIcon,
    Rain: RainIcon,
    Snow: SnowIcon,
    Atmosphere: AtmosphereIcon,
    Clear: ClearSkyIcon,
    Clouds: CloudsIcon,
}

const WeatherIcon = ({ weatherCode }) => {
    let weatherType

    if (weatherCode >= 200 && weatherCode < 300) {
        weatherType = 'Thunderstorm'
    } else if (weatherCode >= 300 && weatherCode < 400) {
        weatherType = 'Drizzle'
    } else if (weatherCode >= 500 && weatherCode < 600) {
        weatherType = 'Rain'
    } else if (weatherCode >= 600 && weatherCode < 700) {
        weatherType = 'Snow'
    } else if (weatherCode >= 700 && weatherCode < 800) {
        weatherType = 'Atmosphere'
    } else if (weatherCode === 800) {
        weatherType = 'Clear'
    } else if (weatherCode > 800 && weatherCode < 900) {
        weatherType = 'Clouds'
    }

    const Icon = weatherIcons[weatherType] || ClearSkyIcon

    return <img src={Icon} alt={weatherType} className="mr-3 w-12 border-r-2 pr-1" />
}

export default WeatherIcon
