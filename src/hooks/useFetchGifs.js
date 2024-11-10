import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

// Un Hook, no es mas que una funcion
//Vid 87, creamos un hook personalzado
export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    //Vid 87,cuando se carga por primera vez esta en true
    const [isLoading, setIsLoading] = useState(true);

    //Vid 86, esa funcion si puede ser asincrona 
    const getImages = async () => {
        //getGifts manda la peticcion HTTP
        const newImages = await getGifs(category);
        setImages(newImages);
        //Vid 87 , y despues lo ponemos en false
        setIsLoading(false);
    }

    //Vid 84,useEffect ,hook de react que dispara efectos secundarios, osea que
    //cuando quiero que algo cambie, se dispare.
    useEffect(() => {
        //El codigo que queremos ejecutar ,para que sea una vez.
        getImages();
    }, []);



    return {
        //Vid 87
        images,
        isLoading
    }

}
