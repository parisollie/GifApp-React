import { useState } from 'react';
//Vid 90, exportammos con barril de la carpeta de cpmponentes 
import { AddCategory, GifGrid } from './components';
//De esta manera con el de barril ya no importamos como aqui abajo
//import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //Vid 76 ,creamos nuestro useState y le ppnemos por defecto One Punch 
    const [categories, setCategories] = useState(['One Punch']);

    //Vid 77 
    //Vid 80, le ponemos el newCategory
    const onAddCategory = (newCategory) => {
        //Vid 81,validaciones ,si incluye el new categoria return , osea
        //no puedo insertar doble vez one punch 
        if (categories.includes(newCategory)) return;
        //Vid 77, hago una copuia de las categorias ...categorias y agregamos una nueva 
        setCategories([newCategory, ...categories]);
    }


    return (
        <>

            {/*Vid 74*/}
            <h1>GifExpertApp</h1>
            {/*Vid 80, on es un evento */}
            <AddCategory onNewCategory={(value) => onAddCategory(value)} />

            {
                categories.map((category) => (
                    <GifGrid
                        //Vid 76 
                        key={category}
                        category={category} />
                ))
            }

        </>
    )
}
