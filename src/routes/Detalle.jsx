import React from 'react'
import { useLocation } from 'react-router-dom';
import Layout from '../layout/Layout';
//import BasicCard from '../components/BasicCard';
import { useNavigate } from 'react-router-dom';
import './Detalle.css'
import MyCard from '../card/MyCard';

const Detalle = () => {

  const { state } = useLocation();
  let navigate = useNavigate();
  
  function buscar(palabra) {
    navigate('/buscar/' + palabra);
  }
  return <>
  {/*console.log(state)*/}
    <Layout buscar={(palabra) => { buscar(palabra) }}>
      <div className='contenedorDetalle'>
      <h1>{state.userData.title !== undefined ? state.userData.title : state.userData.name}</h1>
      {/*<BasicCard key={state.userData.id} direccion={"http://image.tmdb.org/t/p/w342/" + state.userData.poster} titulo={state.userData.title !== undefined ? state.userData.title : state.userData.name} alt={`Slide ` + state.userData.id}></BasicCard>*/}
      <div className='cardCentrar'>
     {/* <MyCard  key={state.userData.id} direccion={"http://image.tmdb.org/t/p/w342/" + state.userData.poster} titulo={state.userData.title !== undefined ? state.userData.title : state.userData.name} alt={`Slide ` + state.userData.id}></MyCard> */} 
      <img src={"http://image.tmdb.org/t/p/w342/" + state.userData.poster} alt={`Slide ` + state.userData.id}></img>
      </div>
      
      <h2>sinopsis</h2>
      <p>{state.userData.description !== "" ? state.userData.description : "no disponible"}</p>
      </div>
      
    </Layout>
  </>
}

export default Detalle