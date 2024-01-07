import React from 'react'
import './Mylogin.css'
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material'
import Logo from '../imagenes/Logo'
//import Peliculas from '../routes/Peliculas'
import { useAuth } from '../hooks/useAuth'

const MyLogin = () => {
  
  const {  login } = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("click");
        login();
      };
      return <>
      {console.log("entro a myLogin")}
        <div className='contenedor'>

        
        <div className='contenedorLogin'>
     
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Logo></Logo>
            
            <Typography component="h1" variant="h5">
                Iniciar Sesion
              </Typography>
              <Box component="form"  onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  
                  name="email"
                  autoComplete="email"
                  InputProps={{
                    style: {
                      color: '#FFFFFF', // Color blanco para el texto
                      
                    },
                  }}
                  
                  
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  InputProps={{
                    style: {
                      color: '#FFFFFF', // Color blanco para el texto
                     
                    },
                  }}
                  
                  
                />
    
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  id='boton'
                >
                  Iniciar Sesion
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" id="link1" variant="body2">
                      Olvido la Contraseña?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" id="link2" variant="body2">
                      {"No tiene una cuenta? Registrarse"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
              </Box>
              
        </div>
        </div>
      </>
}

export default MyLogin