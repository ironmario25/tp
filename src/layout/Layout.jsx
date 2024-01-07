import React from 'react'
import Menu from '../componentes/Menu'
import MiMenu from '../componentes/MiMenu';

const Layout = ({children,buscar=(palabra)=>{}}) => {
  function layoutBuscar(palabra){
    console.log("layout buscar "+palabra);
    buscar(palabra);
  }
  return (
    <div>
        <header>
            {/*<Menu menuBUscar={(palabra)=>{layoutBuscar(palabra)}}></Menu>*/}
            <MiMenu menuBUscar={(palabra)=>{layoutBuscar(palabra)}}></MiMenu>
        </header>
        {children}
    </div>
  )
}

export default Layout