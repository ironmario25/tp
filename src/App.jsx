import React from 'react'
import './App.css'
import MyLogin from './login/MyLogin'
import Peliculas from './routes/Peliculas'


//import App from './App.jsx'
//import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//import Peliculas from './routes/Peliculas.jsx'
import Series from './routes/series.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import RootProvider from './providers/RootProvider.jsx'
import PrivateRoute from './componentes/PrivateRoute.jsx'
import PublicRoute from './componentes/PublicRoute.jsx'
import Mosaico from './routes/Mosaico.jsx'
import Detalle from './routes/Detalle.jsx'
import Buscar from './routes/Buscar.jsx'
import AcercaDe from './routes/AcercaDe.jsx'
/*import Mosaico from './routes/Mosaico.jsx'
import Detalle from './routes/Detalle.jsx'
//import Login from './routes/Login.jsx'
import AcercaDe from './routes/AcercaDe.jsx'*/


// pasarlo a un archivo aparte
const router = createBrowserRouter([
  {
      path: '/',
      element: (<PublicRoute><MyLogin/></PublicRoute>)
  },
 {
    path: '/series',
    element: (<PrivateRoute><Series/></PrivateRoute>)
},
 {
  path: '/peliculas',
  element: (<PrivateRoute><Peliculas/></PrivateRoute>)
},
{
  path: '/mosaico/genero/:genero/tipo/:tipo',
  element: (<PrivateRoute><Mosaico/></PrivateRoute>)
},
{
  path: '/detalle',
  element: (<PrivateRoute><Detalle/></PrivateRoute>)
},
{
  path: '/buscar/:palabra',
  element: (<PrivateRoute><Buscar/></PrivateRoute>)
            
},
{
  path: '/acercaDe',
  element: (<PrivateRoute><AcercaDe/></PrivateRoute>)
            
},
{
  path: '*',
  element: <h1> la pagina no existe</h1>
            
},
]);

function App() {
 

  return (
    <>
     {/*<MyLogin></MyLogin>*/}
      {/*<Peliculas/>*/}
      <RootProvider>
     <RouterProvider router={router}></RouterProvider>
     </RootProvider>
    </>
  )
}

export default App
