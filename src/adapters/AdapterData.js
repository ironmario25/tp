import React from 'react'

const AdapterData= (response) => {

    return response.data.results.map((item)=>({
        id:item.id,
        title:item.title||item.name,
        poster:item.poster_path,
        backdrop:item.backdrop_path,
        description:item.overview,
        video:item.video,
    })

   );
   // return response.data.items;
}

export default AdapterData;