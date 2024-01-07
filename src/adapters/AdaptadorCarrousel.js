import React from 'react'
import AdapterData from './AdapterData';

const AdaptadorCarrousel = (response) => {
  return response.map((item)=>{
   
   
      return AdapterData(item.result);
  });
}

export default AdaptadorCarrousel