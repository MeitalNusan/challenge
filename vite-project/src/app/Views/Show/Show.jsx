import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {collection,getDocs, deleteDoc,doc} from "firebase/firestore"
import { db } from "../../firebase/firebase.js"
import { imageDb } from "../../firebase/firebase.js"
import { ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"
import { FirebaseImageUpload } from "../../Components/imagenes/images.jsx"

import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
const mySwal = withReactContent(Swal)

export const Show = () =>{
const [deportes, setDeportes] =useState([])



const deportesCollection = collection(db, "Deportes")

const getDeportes = async () =>{
    const data = await getDocs(deportesCollection)
 setDeportes(
    data.docs.map((doc)=>({...doc.data(),id:doc.id}))
)}


const deleteDeportes = async (id) =>{
    const deportesDoc = doc(db, "Deportes", id)
    await deleteDoc(deportesDoc)    
    getDeportes()
}

const confirmarDelete = (id) =>{
    Swal.fire({
        title: "Estas seguro?",
        text: "No se podrá revertir",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            deleteDeportes(id)
          Swal.fire({
            title: "Eliminado!",
            text: "Tu documento ha sido eliminado",
            icon: "success"
          });
        }
      });
      

}


useEffect(()=>{
    getDeportes()
},[deportes])


//............Imagenes.................//



    return (
       <div className="container">
        <div className="row">
            <div className="col-4">
                  <div /*className="d-grid gap-2"*/>  
                    <Link to="/create" className="btn btn-primary">Crear</Link>
                </div>

                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th>Deporte</th>
                            <th>Marca</th>
                            <th>Prenda</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>

                    <tbody>

            {deportes.map((deporte)=>(
                <tr>
                    <td>{deporte.deporte}</td>
                    <td>{deporte.marca}</td>
                    <td>{deporte.prenda}</td>
                    <td>
                        <Link to={`/edit/${deporte.id}`} className="btn btn-light"><i class="fa-solid fa-pen-to-square"></i></Link>
                        <button className="btn btn-danger" onClick={()=> confirmarDelete(deporte.id)}><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
            ))}   
                    </tbody>
                </table>
            </div>
            <FirebaseImageUpload/>
        </div>
       </div>
    )
} 