export const getGifs = async (category) => {

    //Vid 83, peticion de la api
    const url = `https://api.giphy.com/v1/gifs/search?api_key=NCLyG0Uad0Pra8et6qZxsbEju7OPk8Zi&q=${category}&limit=10`;
    const resp = await fetch(url);
    //desestructuramos la data 
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        //Retornamos un objeto con las caracteristicas que quiero.
        //esos datos los sacamos de inspection 
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}