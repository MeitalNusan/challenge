// import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { collection, addDoc } from "firebase/firestore"
import { db, imageDb } from "../../firebase/firebase"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"
 



export const Create = () =>{
    // const [deporte, setDeporte] = useState("")
    // const [marca, setMarca] = useState("")
    // const [prenda, setPrenda] = useState("")
    // const [img, setImg] = useState("")
    // const [imgUrl, setImgUrl ] = useState([])

    
    const navigate = useNavigate()  

    let urlImage;

    const guardarInfo = async(e)=>{
        e.preventDefault();

     const deporte = e.target.deporte.value;   
     const marca = e.target.marca.value;   
     const prenda = e.target.prenda.value;   
    
     const newDeporte = {
         deporte: deporte,
         marca: marca,
         prenda: prenda,
         image:urlImage
      }

   
    try{
        await addDoc(collection(db, "Deportes"), {
            ...newDeporte
        })
    } catch (error) {
        console.log(error)

    }
    e.target.deporte.value = '';
    e.target.marca.value = '';
    e.target.prenda.value = '';
    e.target.file.value= '';

}


    

const fileHandler = async (e) =>{
    const archivoI = e.target.files[0];
    const refArchivo = ref(imageDb,`files/${v4()}`)
    await uploadBytes(refArchivo, archivoI)
    urlImage = await getDownloadURL(refArchivo)
    navigate("/show")
}


// useEffect(()=>{
//        guardarInfo()
//     },[])

    return (
      <div className="container">
            <h1>Crear</h1>
                    <form onSubmit={guardarInfo}>
                              <label className="form-label">Deporte:</label>
                              <input
                            
                              className="form-control"
                              type="text"
                              placeholder="deporte"
                               />
                               <br />
                              <label className="form-label">Marca:</label>
                               <input
                             
                              className="form-control"
                              type="text"
                              placeholder="marca"
                               />
                                <br />
                              <label className="form-label">Prenda:</label>
                               <input
                           
                              className="form-control"
                              type="text"
                              placeholder="prenda"
                               />
                               <br />
                              <label className="form-label">Subir imagen:</label>
                              <input type="file" onChange={fileHandler} />
                           
                              <button type="submit" className="btn btn-primary">Crear</button>
                              <Link className="btn btn-danger" to="/show">Cancelar</Link>
                    </form>
        </div>
           
    )

}



