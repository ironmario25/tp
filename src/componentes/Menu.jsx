import React, { useRef } from 'react'
import './Menu.css'
import { useAuth } from '../hooks/useAuth';
import { Link, Navigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Buscar from '../routes/Buscar';
import Layout from '../layout/Layout';
import { useNavigate } from 'react-router-dom';

const Menu = ({ menuBUscar = (palabra) => { } }) => {
/*
  const { isLoggedIn, logout } = useAuth();

  const refInput = useRef(null);
  let navigate = useNavigate();

  const handleLogoutClick = (e) => {
    e.preventDefault();
    logout()
    console.log("menu sesion:" + isLoggedIn);
  };
  function buscar(e) {
    // e.preventDefault();
    console.log("buscar:" + refInput.current.value)

    menuBUscar(refInput.current.value);
  }


  return <>

      <nav className='menu'>
        <ul >
          <li><img src='/ironflix.png'></img></li>
          <li><a href="/peliculas">Peliculas</a></li>
          <li><a href="/series"  >Series</a></li>
          <li><a href="#" onClick={handleLogoutClick} >Cerrar Sesion</a></li>
          <li><a href="/acercaDe" >Acerca de</a></li>

        </ul>
        <div >
          <Button variant="primary" onClick={buscar} >Buscar</Button>
          <input ref={refInput} type="text" id="search" ></input>
        </div>

      </nav>
   


  </>*/
}

export default Menu