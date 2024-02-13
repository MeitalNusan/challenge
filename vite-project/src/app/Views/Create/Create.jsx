import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebase/firebase.js"



export const Create = () =>{
    const [deporte, setDeporte] = useState("")
    const [marca, setMarca] = useState("")
    const [prenda, setPrenda] = useState("")

    const navigate = useNavigate()  
    
    //a que base de datos le creo esto
    const deportesCollection = collection(db, "Deportes")

    //funcion para crear heroe
    const createDeporte = async (e)=>{
        e.preventDefault();
        
        await addDoc(deportesCollection, {
            deporte: deporte,
            marca: marca,
            prenda: prenda

    })
    navigate("/show")
    }
    

    return (
      <div className="container">
            <h1>Crear</h1>
            <div className="row">
                <div className="col-3">
                    <form onSubmit={createDeporte}>
                        <div className="mb-3">
                              <label className="form-label">Deporte:</label>
                              <input
                              onChange={(e) =>setDeporte(e.target.value)}
                              className="form-control"
                              type="text"
                              placeholder="deporte"
                               />
                               <br />
                              <label className="form-label">Marca:</label>
                               <input
                              onChange={(e) =>setMarca(e.target.value)}
                              className="form-control"
                              type="text"
                              placeholder="marca"
                               />
                              <label className="form-label">Prenda:</label>
                               <input
                              onChange={(e) =>setPrenda(e.target.value)}
                              className="form-control"
                              type="text"
                              placeholder="prenda"
                               />
                        </div>
                        <button type="submit" className="btn btn-primary">Crear</button>
                       <Link className="btn btn-danger" to="/show">Cancelar</Link>
                    </form>
                </div>
            </div>
        </div>      
    )
}