import React from 'react'
import Layout from '../layout/Layout'
import { useNavigate } from 'react-router-dom';
import './AcercaDe.css'

const AcercaDe = () => {
  let navigate = useNavigate();

  function buscar(palabra) {
    navigate('/buscar/' + palabra);
  }
  return <>
    <Layout buscar={(palabra) => { buscar(palabra) }}>
      <div className='contenedorAcercaDe'>
        <h1> integrantes </h1>

        <h2>Mario Diaz</h2>
        <p>ironmario25@hotmail.com</p>
        <h2>Nahuel Gonzalo Farut</h2>
        <p>farutnen@gmail.com</p>
        <h2>Natalia Ayelen Alonso</h2>
        <p>ayee.alonsoo@gmail.com</p>
        <h2>Gustavo Galparoli</h2>
        <p>gustavogalparoli@gmail.com</p>
        <h2>Magdalena Diaz de Maura</h2>
        <p>macu_dm@hotmail.com</p>
      </div>

    </Layout>



  </>
}

export default AcercaDe