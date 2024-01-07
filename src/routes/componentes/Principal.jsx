import React, { useState } from 'react'
import { useEffect, useRef } from 'react'

import { useAuth } from '../../hooks/useAuth';
//import BasicCard from '../../componentes/BasicCard'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

import connection from '../../service/connection';
import MyCarousel from '../../componentes/MyCarousel';
import Layout from '../../layout/Layout';
import MyCard from '../../card/MyCard'
import './Principal.css'




const Principal = (props) => {
  const [dato, setDato] = useState([]);
  let navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  function cerrarSesion() {
    logout()
  }

  async function conexion(props) {
    Promise.all(props.urls.map(url =>
      connection(url)
    )).then(data => {
      console.log(data);
      setDato([...dato, ...data]);

    });


  }
  useEffect(() => {
    conexion(props);
  }, []);
  async function pedirServicio() {
    console.log("evento:fin carrousel");

  }
  function click(e) {
    const vector = dato[e.target.id];
    const objeto = vector[e.detail[0].clickedIndex]
    navigate("/detalle", { state: { userData: objeto } });
  }
  function buscar(palabra) {
    console.log("home buscar " + palabra);

    navigate('/buscar/' + palabra);
  }
  function cargarImagenes(vector) {

    return vector !== undefined && vector.length > 0 ? (
      vector.map((imagen, index) => (
        <swiper-slide key={index}>

          {/*<BasicCard direccion={"http://image.tmdb.org/t/p/w342" + imagen.poster} titulo={imagen.title!==undefined?imagen.title:imagen.name} alt={`Slide ${index + 1}`}></BasicCard>*/}
          <MyCard direccion={"http://image.tmdb.org/t/p/w342" + imagen.poster} titulo={imagen.title !== undefined ? imagen.title : imagen.name} alt={`Slide ${index + 1}`}></MyCard>
        </swiper-slide>
      ))
    ) : (
      <p>No hay datos para mostrar</p>
    )
  }

  if (dato.length === 0) {
    return <>
      <div className="centrar">
        <h1>cargando...</h1>
      </div>
    </>
  } else {
    return <>
     
      <div className='espaciar'>
        <Layout buscar={(palabra) => { buscar(palabra) }}>
          <div className='centrar'>
            <h1>{props.titulo}</h1>
          </div>

          <div className='contenedorPrincipal'>
            <div className='izquierda'>
              <h2>accion</h2>
            </div>
            <div className='derecha'>
              <Link to={(props.titulo === "peliculas") ? "/mosaico/genero/28/tipo/movie" : "/mosaico/genero/10759/tipo/tv"}>{"ver todo"}</Link>
            </div>
          </div>


          <MyCarousel id={0} finCarrousel={pedirServicio} click={(e) => { click(e) }}>
            {cargarImagenes(dato[0])}
          </MyCarousel>
          <div className='contenedorPrincipal'>
            <div className='izquierda'>
              <h2>suspenso</h2>
            </div>

            <div className='derecha'>
              <Link to={(props.titulo === "peliculas") ? "/mosaico/genero/53/tipo/movie" : "/mosaico/genero/9648/tipo/tv"}>{"ver todo"}</Link>
            </div>

          </div>
          <MyCarousel id={1} finCarrousel={pedirServicio} click={(index) => { click(index) }}>
            {cargarImagenes(dato[1])}
          </MyCarousel>
          <div className='contenedorPrincipal'>

            <div className='izquierda'>
              <h2>comedia</h2>
            </div>
            <div className='derecha'>
              <Link to={(props.titulo === "peliculas") ? "/mosaico/genero/35/tipo/movie" : "/mosaico/genero/35/tipo/tv"}>{"ver todo"}</Link>
            </div>
          </div>
          <MyCarousel id={2} finCarrousel={pedirServicio} click={(index) => { click(index) }}>
            {cargarImagenes(dato[2])}
          </MyCarousel>
          <div className='contenedorPrincipal'>

            <div className='izquierda'>
              <h2>aventuras - infantil</h2>
            </div>
            <div className='derecha'>
              <Link to={(props.titulo === "peliculas") ? "/mosaico/genero/12/tipo/movie" : "/mosaico/genero/10762/tipo/tv"}>{"ver todo"}</Link>
            </div>
          </div>
          <MyCarousel id={3} finCarrousel={pedirServicio} click={(index) => { click(index) }}>
            {cargarImagenes(dato[3])}
          </MyCarousel>
          <div className='contenedorPrincipal'>
            <div className='izquierda'>
              <h2>ciencia ficcion</h2>
            </div>
            <div className='derecha'>
              <Link to={(props.titulo === "peliculas") ? "/mosaico/genero/878/tipo/movie" : "/mosaico/genero/10765/tipo/tv"}>{"ver todo"}</Link>
            </div>
          </div>
          <MyCarousel id={4} finCarrousel={pedirServicio} click={(index) => { click(index) }}>
            {cargarImagenes(dato[4])}
          </MyCarousel>
        </Layout>

      </div>

    </>
  }

}

export default Principal