//https://fakestoreapi.com/products
import { Link } from "react-router-dom"

export const ProductCard = ({producto}) => { 

    return (
      <div className="moviesCard">
        <Link to={`/product/${producto.id}`}><img className="movieImage" src={producto.image} />
        <h2>Nombre: {producto.name}</h2>
        <p>Genero: {producto.gender}</p>
        </Link>
      </div>
      
    )
  }
  
  