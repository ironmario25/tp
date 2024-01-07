import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import connection from '../service/connection';
//import SimpleContainer from '../components/SimpleContainer';
import { CardActionArea, Grid, Menu } from '@mui/material';
//import BasicCard from '../componentes/BasicCard';
import Layout from '../layout/Layout';
import './Buscar.css'
import { useNavigate } from 'react-router-dom';
import MyCard from '../card/MyCard';

const Buscar = () => {
    const query = useParams();

    const [data, setData] = useState([]);
    const apiKey = import.meta.env.VITE_APP_APIKEY_TMDB;
    const url = "https://api.themoviedb.org/3/search/multi?include_adult=false&language=es-ES&page=1&query=" + query.palabra + "&api_key=" + apiKey;
    let navigate = useNavigate();
    console.log(url)

    async function buscarDatos(url) {
        try {
            const response = await connection(url)
            console.log(response)
            setData(response);
        } catch (error) {
            console.log("error:" + error);
        }
    }

    useEffect(() => {
        buscarDatos(url);
    }, []);
    function buscar(palabra) {
        console.log("buscar.." + palabra);
        const url = "https://api.themoviedb.org/3/search/multi?include_adult=false&language=es-ES&page=1&query=" + palabra + "&api_key=" + apiKey;
        buscarDatos(url);
    }
    function hizoClick(e) {
        const objeto = data[e.target.id];
        navigate("/detalle", { state: { userData: objeto } });
    }

    function cargarImagenes(vector) {

        return vector !== undefined && vector.length > 0 ? (
            vector.map((item, index) => (
                <>
                    <CardActionArea key={index.id} name={index} id={index} onClick={hizoClick}>
                       
                        <MyCard key={index} id={index} onClick={hizoClick} direccion={"http://image.tmdb.org/t/p/w342" + item.poster} titulo={item.title !== undefined ? item.title : item.name} alt={index}></MyCard>
                    </CardActionArea>
                </>

            ))
        ) : (
            <p>No hay datos para mostrar</p>
        )
    }

    if (data.length === 0) {
        return <>
            <div className="centrar">
                <h1>cargando...</h1>
            </div>
        </>
    }
    return (
        <>

            <Layout buscar={(palabra) => { buscar(palabra) }}>
                <div className="centrar">
                    <h1>Buscar</h1>
                </div>
                <div className='mosaico'>
                    {cargarImagenes(data)}
                </div>
            </Layout>

        </>

    )
}

export default Buscar