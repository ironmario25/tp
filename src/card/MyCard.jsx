import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './MyCard.css'

export default function MyCard(props) {
  {/*sx={{ height: '300px', width:'320px'}}*/ } {/*sx={{ height: '450px' }}*/ }
  return (
    <Card sx={{ maxWidth: 280, maxHeight: 410 }}>
      <CardActionArea>
        <div className='centrar'>
          <CardMedia
            component="img"
            image={props.direccion}
            alt={props.alt}
            sx={{ height: '340px', width: '240px' }}
            id={props.id}
          />
        </div>

        <CardContent>

          <Typography variant="h6" component="div" >
            <div className='titulo'>
              {props.titulo}
            </div>
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>

  );
}