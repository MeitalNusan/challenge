//https://fakestoreapi.com/products
import { Link } from "react-router-dom"
import { useState } from 'react'

  
const img = "https://neoattack.com/wp-content/uploads/2017/06/carrito-compra-1024x1024.png"


function Nav  () { 
     
    return(
        <>
     
        
        <div className="nav">
               
                <div className="item1">
                  <button className="btn btn-light"><Link className="botones" to="/">Inicio</Link></button>
                   <button className="btn btn-light"><Link className="botones" to="/products">Products </Link></button>
                   <button className="btn btn-light"><Link className="botones" to="/create">Crear </Link></button>
                   <button className="btn btn-light"><Link className="botones" to="/edit">Editar </Link></button>
                   <button className="btn btn-light"><Link className="botones" to="/show">Show </Link></button>
                </div>  
 
                <div className="item2" >
                   <Link className="tituloHome" to="/"> <h1 > ALWAYS</h1></Link>
                </div>
        </div>
       
        </>
        

    )
    

}
export default Nav
  
  