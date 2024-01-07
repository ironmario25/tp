import React from 'react'
import Principal from './componentes/Principal';


const Peliculas = () => {
  const apiKey = import.meta.env.VITE_APP_APIKEY_TMDB;
  let urls = [
    // 28=accion 53=suspenso 35=comedia 12=aventura 878=c.ficcion
    "https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key="+apiKey+"&language=es-ES&page=1",
    "https://api.themoviedb.org/3/discover/movie?with_genres=53&api_key="+apiKey+"&language=es-ES&page=1",
    "https://api.themoviedb.org/3/discover/movie?with_genres=35&api_key="+apiKey+"&language=es-ES&page=1",
    "https://api.themoviedb.org/3/discover/movie?with_genres=12&api_key="+apiKey+"&language=es-ES&page=1",
    "https://api.themoviedb.org/3/discover/movie?with_genres=878&api_key="+apiKey+"&language=es-ES&page=1",
  ];


  return <>
    
    <Principal urls={urls} titulo="peliculas">
    </Principal>
  </>


}

export default Peliculas