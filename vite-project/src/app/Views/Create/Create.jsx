import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { collection, addDoc, doc } from "firebase/firestore"
import { db, imageDb } from "../../firebase/firebase.js"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"
 


export const Create = () =>{
    
    let urlImDesc;
    
    const navigate = useNavigate()


    const fileHandler = async (e) =>{
        const archivoI = e.target.files[0];
        const refArchivo = ref(imageDb,`documentos/${archivoI.name}`)
        await uploadBytes(refArchivo, archivoI)
        urlImDesc = await getDownloadURL(refArchivo)
        navigate("/show")
    
     }

     
     
    const guardarInfo = async (e) => {
        e.preventDefault()

        const deporte = e.target.deporte.value;   
        const marca = e.target.marca.value;   
        const prenda = e.target.prenda.value;   
    
     const newD = {
         deporte: deporte,
         marca: marca,
         prenda: prenda,
         img:urlImDesc  
      }
      
    try{
        await addDoc(collection(db, 'Deportes'), {
            ...newD
        })
    } catch(error) {
        console.log(error)
        

    }



    e.target.deporte.value = '';
    e.target.marca.value = '';
    e.target.prenda.value = '';
    e.target.file.value = '';

}



     return (
      <div className="container">
            <h1>Crear</h1>
                    <form onSubmit={guardarInfo}>
                              <label className="form-label">Deporte:</label>
                              <div>
                              <input
                              id="deporte"
                              className="form-control"
                              type="text"
                               placeholder="deporte"
                               />
                               </div>
                               
                               
                              <label className="form-label">Marca:</label>
                              <div>
                               <input
                               id="marca"
                               className="form-control"
                               type="text"
                               placeholder="marca"
                                />
                               </div>
                              
                              <label className="form-label">Prenda:</label>
                              <div>
                               <input
                                id="prenda"
                                className="form-control"
                                type="text"
                                placeholder="prenda"
                                />
                               </div>
                           
                              <label className="form-label">Subir imagen:</label>
                             
                              <input type="file" id='file' onChange={fileHandler} />
                           
                              <button className="btn btn-primary">Crear</button>
                              <Link className="btn btn-danger" to="/show">Cancelar</Link>
                    </form>
        </div>
           
    )

}


