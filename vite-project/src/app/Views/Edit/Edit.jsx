import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { getDoc, updateDoc,doc } from "firebase/firestore"
import { db } from "../../firebase/firebase.js"



export const Edit = () =>{
    const [deporte, setDeporte] = useState("")
    const [marca, setMarca] = useState("")
    const [prenda, setPrenda] = useState("")

    const navigate = useNavigate()
    const {id} = useParams()


//buscar item por ID en la base de datos
    const getDeportebyId = async (id) =>{
        const deporteDoc = await getDoc(doc(db, "Deportes", id))

        if(deporteDoc.exists()){
            setDeporte(deporteDoc.data().deporte)
            setMarca(deporteDoc.data().marca)
            setPrenda(deporteDoc.data().prenda)
         }else{
            console.log("no existe")

        }
    }

// llamar a la función pero en un useEffect para que se renderice cuando quiero
    useEffect(()=>{
        getDeportebyId(id)
    },[])


//modificar lo que busque por ID
    const update = async (e) => {
        e.preventDefault()
        const deporteDoc = doc(db, "Deportes", id)
        
        const data = {
            deporte:deporte,
            marca:marca,
            prenda:prenda
        }
 
        await updateDoc(deporteDoc,data)
        navigate("/show")
    }

  
    return (
        <div className="container">
            <h1>Edit</h1>
            <div className="row">
                <div className="col-3">
                    <form onSubmit={update}>
                        <div className="mb-3">
                              <label className="form-label">Deporte:</label>
                              <input
                              onChange={(e) =>setDeporte(e.target.value)}
                              value={deporte}
                              className="form-control"
                              type="text"
                               />
                               <br />
                              <label className="form-label">Marca:</label>
                               <input
                              onChange={(e) =>setMarca(e.target.value)}
                              value={marca}
                              className="form-control"
                              type="text"
                               />
                              <label className="form-label">Prenda:</label>
                               <input
                              onChange={(e) =>setPrenda(e.target.value)}
                              value={prenda}
                              className="form-control"
                              type="text"
                               />
                        </div>
                        <button type="submit" className="btn btn-primary">Editar</button>
                       <Link className="btn btn-danger" to="/show">Cancelar</Link>
                    </form>
                </div>
            </div>
        </div>      
    )
}