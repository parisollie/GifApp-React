import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

//Vid 82, le mandamos el proptype de categoria
export const GifGrid = ({ category }) => {

    //Vid 86
    //Vid 87, hook personalizado useFetchGifs(category);
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {/*Vid 83, para mostrar un loading ,si esta en true ,ponemos cargando */}
            {
                isLoading && (<h2>Cargando...</h2>)
            }


            <div className="card-grid">
                {

                    images.map((image) => (//Vid 86,traemos el id de las imagenes

                        <GifItem
                            key={image.id}
                            //Vid 87, con el operador spread , esparciamos todas las propiedades de image 
                            //como properties , titulo y el url 
                            {...image}
                        />
                    ))
                }

            </div>

        </>
    )
}
