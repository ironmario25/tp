import axios from 'axios'
import React from 'react'
import AdapterData from '../adapters/AdapterData'

const connection = (url) => {
    const getData = async () => {
        try {
             const response = await axios(url)

            
           // console.log(response);
            return AdapterData(response);
           
        } catch (error) {
            console.log("conexion:"+error);
            return error;
        } 
    }
   return getData();
            
}

export default connection