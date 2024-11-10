
//Vid 87 ,necesito estos 2 elementos el tittle y el url 
export const GifItem = ({ title, url, id }) => {

  //p = es un parrafo
  //title , es cuando no tiene un titulo por defecto
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}
