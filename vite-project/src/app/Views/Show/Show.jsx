import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {collection,getDocs, deleteDoc,doc} from "firebase/firestore"
import { db } from "../../firebase/firebase.js"
import { imageDb } from "../../firebase/firebase.js"
import { ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"
 
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
      <div>
        <section className="carousel">
         <div class="container-lg">
                <div id="carouselExampleAutoplaying" class="row" data-bs-ride="carousel">
                    <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="3000">
                        <img src="" height="320px" class="d-block w-100" alt="..."/> 
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        {/* <img src="/img/new-balance.jpg"  height="320px" class="d-block w-100" alt="..."> */}
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        {/* <img src="/img/102660775_560893167960727_5534435715222990990_n.jpg"  height="320px" class="d-block w-100" alt="..."> */}
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        {/* <img src="/img/Olympikus_logo.jpg"  height="320px" class="d-block w-100" alt="..."> */}
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        {/* <img src="/img/logo-athix_ecabcad5-2aa5-45f1-8621-c5befcf1fd8f.jpg"  height="320px" class="d-block w-100" alt="..."> */}
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" ></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon"  ></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon"  ></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                </div>
        
        </div>
        
      
        </div>
        </section>
      
        <div className="contenedorGrid">         
        <div className="gridProducts"> 
          {deportes.map((deporte) => (
            <div key={deporte.id}>
              <img className="imgProducts" height={150} width={200} src={deporte.img} alt={`Image for ${deporte.deporte}`} />
              <div className="elementos">
              <p>{deporte.deporte}</p>
              <p>{deporte.marca}</p>
              <p>{deporte.prenda}</p>          
              </div>
              <p>
                <Link to={`/edit/${deporte.id}`} className="btn btn-light">
                  <i className="fa-solid fa-pen-to-square"></i>
                </Link>
                <button className="btn btn-danger" onClick={() => confirmarDelete(deporte.id)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
              </p>
            </div>
          ))}   
        </div>
      </div>
      </div>
    )
} 