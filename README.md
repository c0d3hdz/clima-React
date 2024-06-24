
# Clima app - React

Esta es una aplicación del clima desarrollada con React. Permite a los usuarios obtener información meteorológica actualizada para una ciudad especificada.

## Características

- Buscar el clima por ciudad.
- Mostrar el clima actual, incluyendo la temperatura, humedad y velocidad del viento.
- Mostrar un ícono representativo del estado del clima (despejado, nublado, lluvia, etc.).

## Tecnologías Utilizadas

- React
- OpenWeatherMap API
- Tailwind CSS

## Requisitos Previos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior) o yarn

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/clima-React.git
   cd clima-React
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Crea un archivo `.env.local` en la raíz del proyecto y agrega tu clave de API de OpenWeatherMap:

   ```env
   REACT_APP_OPENWEATHER_API_KEY=tu_clave_api
   ```

## Uso

1. Inicia la aplicación:

   ```bash
   npm start
   ```

2. Abre tu navegador web y ve a `http://localhost:3000`.

3. Ingresa el nombre de una ciudad y haz clic en "Obtener Clima" para ver el clima actual de esa ciudad.

## Estructura del Proyecto

```
weather-app/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── Weather.js
│   │   ├── WeatherIcon.js
│   ├── icons/
│   │   ├── clear.svg
│   │   ├── clouds.svg
│   │   ├── drizzle.svg
│   │   ├── rain.svg
│   │   ├── snow.svg
│   │   ├── thunderstorm.svg
│   ├── App.js
│   ├── index.js
├── .env.local
├── .gitignore
├── package.json
└── README.md
```

## Personalización

Puedes personalizar los íconos del clima reemplazando los archivos SVG en la carpeta `src/icons/` con tus propios íconos. Asegúrate de mantener los mismos nombres de archivo o de actualizar las importaciones en `WeatherIcon.js`.

## Contribuciones

Las contribuciones son bienvenidas. Siéntete libre de abrir un issue o enviar un pull request.

## Licencia

Este proyecto está disponible para uso personal. Siéntete libre de clonar, modificar y utilizar este proyecto para tus propios propósitos. Sin embargo, ten en cuenta que no está permitido utilizar este proyecto con fines comerciales sin autorización.

¡Disfruta explorando y personalizando el proyecto para adaptarlo a tus necesidades!
