import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MyLogin from '../login/MyLogin';
import PublicRoute from '../componentes/PublicRoute';


export const rutas=()=> {
    const router = createBrowserRouter([{
            path: '/',
            element: (<PublicRoute><MyLogin/></PublicRoute>)
        },
      
      ]);
      return router;
}