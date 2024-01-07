import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import connection from '../service/connection';
import Layout from '../layout/Layout';
import { Button, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Mosaico.css'
import MyCard from '../card/MyCard';

const Mosaico = () => {
  const query = useParams();
  const [data, setData] = useState([]);
  const [pagina, setPagina] = useState(1);

  let navigate = useNavigate();
  const apiKey = import.meta.env.VITE_APP_APIKEY_TMDB;

  async function buscarDatos(url) {
    try {
      const response = await connection(url)
      setData(response);
    } catch (error) {
      console.log("error:" + error);
    }
  }
  function hizoClick(e) {
    const objeto = data[e.target.id];
    navigate("/detalle", { state: { userData: objeto } });
  }
  function cargarImagenes(vector) {

    return vector !== undefined && vector.length > 0 ? (
      vector.map((item, index) => (
        <CardActionArea key={index} name={index} id={index} onClick={hizoClick}>
          <MyCard key={index} id={index} onClick={hizoClick} direccion={"http://image.tmdb.org/t/p/w342" + item.poster} titulo={item.title !== undefined ? item.title : item.name} alt={index}></MyCard>
        </CardActionArea>
      ))
    ) : (
      <p>No hay datos para mostrar</p>
    )
  }
  useEffect(() => {
    const url = "https://api.themoviedb.org/3/discover/" + query.tipo + "?with_genres=" + query.genero + "&api_key=" + apiKey + "&language=es-ES&page=" + pagina + "&language=es-ES";
    // console.log(url)
    buscarDatos(url);

  }, []);
  if (data.length === 0) {
    return <div className='centrar'>
    <h1>Cargando...</h1>
  </div>
  }
  function buscar(palabra) {
    //console.log("buscar.." + palabra);
    navigate('/buscar/' + palabra);
  }
  async function atras(e) {
    e.preventDefault();
    //   console.log("atras");
    if (pagina > 1) {

      try {
        const url = "https://api.themoviedb.org/3/discover/" + query.tipo + "?with_genres=" + query.genero + "&api_key=" + apiKey + "&language=es-ES&page=" + (pagina - 1) + "&language=es-ES";
        await buscarDatos(url);
        setPagina(() => pagina - 1)
      } catch (error) {
        console.log(error);
      }

    }

  }
  async function siguiente(e) {
    e.preventDefault();
    console.log("siguiente");


    try {
      const url = "https://api.themoviedb.org/3/discover/" + query.tipo + "?with_genres=" + query.genero + "&api_key=" + apiKey + "&language=es-ES&page=" + (pagina + 1) + "&language=es-ES";
      await buscarDatos(url);
      setPagina(() => pagina + 1)
    } catch (error) {
      console.log(error)
    }

  }

  if (data.length === 0) {
    return <div className='centrar'>
      <h1>Cargando...</h1>
    </div>
  }
  return (
    <>
      <div className=''>
        <Layout buscar={(palabra) => { buscar(palabra) }}>
          <div> ver todo - MOSAICO  </div>
          <div className='mosaico'>
            {cargarImagenes(data)}
          </div>

        </Layout>
      </div>
      <div className="botones">
        <h3>pagina {pagina}</h3>
        <Button onClick={atras}>atras</Button>
        <Button onClick={siguiente}>siguiente</Button>
      </div>


    </>

  )
}

export default Mosaico