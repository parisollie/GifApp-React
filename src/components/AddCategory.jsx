import { useState } from 'react';

//Vid 80 ,le mandamos el ,onNewCategory
export const AddCategory = ({ onNewCategory }) => {

    //Vid 78, creamos nuestro useState 
    const [inputValue, setInputValue] = useState('');

    //Le ponemos el target,para que podamos escribir en el input 
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    //Vid 78 
    const onSubmit = (event) => {
        //Vid 78, con esto prevenimos el refresh 
        event.preventDefault();
        //con trim eliminamos los elementos adelante y atras, si es menor a un caracter 
        if (inputValue.trim().length <= 1) return;

        //Vid 79,mandamos un callback ,todas ls categorias ,insertamos elinput value con las
        //categorias anteriores con el spread....
        // setCategories( categories => [ inputValue, ...categories ]);
        setInputValue('');
        //Vid 80 
        onNewCategory(inputValue.trim());
    }

    return (

        <form onSubmit={onSubmit}>
            {/* Ponemos el form, */}
            <input
                //Vid  78, creamos nuestro imput.
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                //Debe llevar onChange ,porque sino marca error
                onChange={onInputChange}
            />
        </form>
    )
}
