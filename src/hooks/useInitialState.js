import { useState, useEffect } from 'react';
//CREAR FUNCION QUE ME VA A MANEJAR ESTADO Y CICLO DE VIDA QUE  PODRE UTILIZAR EN CUALQUIER COMPONENTE
// AGREGAMOS USE STATES:MANEJAR ESTATOS Y USE EFECT:TRANSMISIONES O PETICIONES, ESCUCHAR CAMBIOS NECESARIOS

//SETVIDEO SE ENCARGA DE ACTUALIZAR LA INF A MI VARIABLE VIDEOS

const useInitialState = (API) =>{
    const [ videos , setVideos ] = useState({mylist:[], trends:[], originals:[]});
    // USEEFFECT ME VA TRAER A MI FAKE API, PARA DESPUES PASARSELA A MI FUNCION SETVIDEO    
    useEffect(()=>{
        fetch(API)
        .then(response => response.json())
        .then(data => setVideos(data));
    }, []);
    return videos;
};
export default useInitialState;
            // "cover": "http://dummyimage.com/800x600.png/5472FF/ffffff",
