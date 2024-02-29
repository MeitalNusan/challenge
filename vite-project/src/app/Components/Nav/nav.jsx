//https://fakestoreapi.com/products
import { Link } from "react-router-dom"
import { useState } from 'react'

  
const img = "https://neoattack.com/wp-content/uploads/2017/06/carrito-compra-1024x1024.png"


function Nav  () { 
     
    return(
        <>
     
        
        <div className="nav1">
               
                <div className="item1">
                    <button className="btn btn"><Link className="botones" to="/">Inicio</Link></button>
                    <button className="btn btn"><Link className="botones" to="/products">Products </Link></button>
                    <button className="btn btn"><Link className="botones" to="/create">Crear </Link></button>
                     <button className="btn btn">
                    
                <li className="botones" type="none"><a>Categorías</a>
                    <ul type="none">
                        <li><a><button className="btn btn-light">Olympikus</button></a></li>
                        <li><a><button className="btn btn-light"><Link className="btn btn" to="/show">Adidas</Link></button></a></li>
                        <li><a><button className="btn btn-light">Diadora</button></a></li>
                        <li><a><button className="btn btn-light">Umbro</button></a></li>
                        <li><a><button className="btn btn-light">Athix</button></a></li>
                        <li><a><button className="btn btn-light">Fila</button></a></li>
                         
                    </ul>
                </li>
                 
                </button>


                </div>
 
                <div className="item2" >
                   <Link className="tituloHome" to="/"> <h1 > ALWAYS</h1></Link>
                </div>
        </div>
       
        </>
        

    )
    

}
export default Nav
  
  