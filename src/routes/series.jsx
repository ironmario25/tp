import React from 'react'
import Principal from './componentes/Principal';

const series = () => {
  const apiKey = import.meta.env.VITE_APP_APIKEY_TMDB;
    let urls = [
        // 10759=accion 9648=suspenso 35=comedia 10762=kids 10765=c.ficcion
        "https://api.themoviedb.org/3/discover/tv?with_genres=10759&api_key="+apiKey+"&language=es-ES&page=1",
        "https://api.themoviedb.org/3/discover/tv?with_genres=9648&api_key="+apiKey+"&language=es-ES&page=1",
        "https://api.themoviedb.org/3/discover/tv?with_genres=35&api_key="+apiKey+"&language=es-ES&page=1",
        "https://api.themoviedb.org/3/discover/tv?with_genres=10762&api_key="+apiKey+"&language=es-ES&page=1",
        "https://api.themoviedb.org/3/discover/tv?with_genres=10765&api_key="+apiKey+"&language=es-ES&page=1",
        
    ];

    return <>
        
        <Principal urls={urls} titulo="series">
           
        </Principal>
    </>
}

export default series