import "../Home/cssHome.css"
import logoAdidas from "../../img/logoAdidas.jpg"
import camperaAdidas from "../../img/CamperaAdidas.jpg"
import pelotaFutbol from "../../img/messiPelota.jpg"
import logoDiadora from "../../img/logoDiadora.jpg"
import logoOlymp from "../../img/olympikuslogo.jpg"
import zapaOlympikus from "../../img/lineacorrer.png"
import zapaOlym from "../../img/zapaOlym.png"
import zapaDiadora from "../../img/zapaDiadora1.jpg"
import zapaDiadora2 from "../../img/diadora2.jpg"
import logoAthix from "../../img/logoAthix.jpg"
import logoNB from "../../img/logoNB.jpg"
import zapaNB from "../../img/zapaNB.jpg"
import tarjetatuya from "../../img/tarjetatuya.jpg"
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getDocs } from "firebase/firestore"
import { collection, addDoc, doc, getDoc, deleteDoc } from "firebase/firestore";
import { db, imageDb } from "../../firebase/firebase.js";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
 
 


function Home() { 

  
const mySwal = withReactContent(Swal)


const [deportes, setDeportes] =useState([])
const [deportes2, setDeportes2] =useState([])
const [deportes3, setDeportes3] =useState([])
const [deportes4, setDeportes4] =useState([])


const homeCollection = collection(db, "imgHome")
const homeCollection2 = collection(db, "imgHome2")
const homeCollection3 = collection(db, "imgHome3")
const homeCollection4 = collection(db, "imgHome4")

const getDeportes = async () =>{
    const data = await getDocs(homeCollection)
 setDeportes(
    data.docs.map((doc)=>({...doc.data(),id:doc.id}))
)}
const getDeportes2 = async () =>{
    const data = await getDocs(homeCollection2)
 setDeportes2(
    data.docs.map((doc)=>({...doc.data(),id:doc.id}))
)}
const getDeportes3 = async () =>{
    const data = await getDocs(homeCollection3)
 setDeportes3(
    data.docs.map((doc)=>({...doc.data(),id:doc.id}))
)}
const getDeportes4 = async () =>{
    const data = await getDocs(homeCollection4)
 setDeportes4(
    data.docs.map((doc)=>({...doc.data(),id:doc.id}))
)}


const deleteDeportes = async (id) =>{
    const deportesDoc = doc(db, "imgHome", id)
    await deleteDoc(deportesDoc)    
    getDeportes()
}
const deleteDeportes2 = async (id) =>{
    const deportesDoc = doc(db, "imgHome2", id)
    await deleteDoc(deportesDoc)    
    getDeportes2()
}
const deleteDeportes3 = async (id) =>{
    const deportesDoc = doc(db, "imgHome3", id)
    await deleteDoc(deportesDoc)    
    getDeportes3()
}
const deleteDeportes4 = async (id) =>{
    const deportesDoc = doc(db, "imgHome4", id)
    await deleteDoc(deportesDoc)    
    getDeportes4()
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
            icon: "success",
          });
        }
      });
    } 
const confirmarDelete2 = (id) =>{
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
            deleteDeportes2(id)
          Swal.fire({
            title: "Eliminado!",
            text: "Tu documento ha sido eliminado",
            icon: "success",
          });
        }
      });
    } 
const confirmarDelete3 = (id) =>{
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
            deleteDeportes3(id)
          Swal.fire({
            title: "Eliminado!",
            text: "Tu documento ha sido eliminado",
            icon: "success",
          });
        }
      });
    } 
const confirmarDelete4 = (id) =>{
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
            deleteDeportes4(id)
          Swal.fire({
            title: "Eliminado!",
            text: "Tu documento ha sido eliminado",
            icon: "success",
          });
        }
      });
    } 


useEffect(()=>{
    getDeportes()
    getDeportes2()
    getDeportes3()
    getDeportes4()
},[deportes, deportes2, deportes3, deportes4])



   return (
    <div>
          <section>
          {deportes4.map((deporte2) => (
            <div>
                  <div key={deporte2.id}>
                  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img class="d-block w-100" src={deporte2.img} alt="First slide" />               
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src={deporte2.img2} alt="Second slide"/>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src={deporte2.img3} alt="Third slide"/>
                  </div>
                  
                  <div class="carousel-item">
                    <img class="d-block w-100" src={deporte2.img4} alt="Third slide"/>
                  </div>
                  
                                
              </div>
              
              </div>
              
              </div>
              
                 <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
                <div className="edit">
                <Link to={`/editHome2/${deporte2.id}`} className="btn btn-light">
                  <i className="fa-solid fa-pen-to-square"></i>
                </Link>
                <button className="btn btn-danger" onClick={() => confirmarDelete4(deporte2.id)}>
                  <i className="fa-solid fa-trash"></i>
                </button>  
                </div>
                </div>
                
               ))}  
              
                </section>
                
          
            <div className="conteiner3">
          <div className="numero2">
          <Link  to="/" ><img className='img2' src={logoAdidas} alt="" /></Link>
          </div>
          <div className="numero2">
          <Link  to="/" ><img className='img2' src={logoAthix} alt="" /></Link>
          </div>
          <div className="numero2">
          <Link  to="/" ><img className='img2' src={logoDiadora} alt="" /></Link>
          </div>
          <div className="numero2">
          <Link  to="/" ><img className='img2' src={logoNB} alt="" /></Link>
          </div>
          
        </div>
        
        <section className='zapa'>
        <button  className="btn btn-danger boton"> DESCUBRI MAS →</button>
        {deportes2.map((deporte2) => (
            <div key={deporte2.id}>
              <div>
               <img className="imgzapa" src={deporte2.img3} />               
              
                <Link to={`/editHome2/${deporte2.id}`} className="btn btn-light">
                  <i className="fa-solid fa-pen-to-square"></i>
                </Link>
                <button className="btn btn-danger" onClick={() => confirmarDelete2(deporte2.id)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
                </div>
              </div>
          ))}           

        </section>
        

        
        <div className='conteiner2'>
        {deportes.map((deporte) => (
            <div key={deporte.id}>
                <div>
                <img className="numero" src={deporte.img} alt={`Image for ${deporte.deporte}`} />
                
                <img className="numero" src={deporte.img2} alt={`Image for ${deporte.deporte}`} />
                
                
                  <Link to={`/editHome/${deporte.id}`} className="btn btn-light">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Link>
                  <button className="btn btn-danger" onClick={() => confirmarDelete(deporte.id)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  </div>
              </div>
            ))}           
          </div>

      
          

<div>
        {deportes3.map((deporte3) => (
            <div className="conteinerGroup" key={deporte3.id}>
                <div className="numeros">
                   <img className="img" src={deporte3.img}   />
                </div>
                <div className="numeros">
                   <img className="img" src={deporte3.img2}  />
                </div>
                <div className="numeros">
                    <img className="img"  src={deporte3.img3}   />
                </div>
                <div className="numeros">
                    <img className="img"  src={deporte3.img4}   />
                </div>
                <div>
                  <Link to={`/editHome3/${deporte3.id}`} className="btn btn-light">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Link>
                  <button className="btn btn-danger" onClick={() => confirmarDelete3(deporte3.id)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  </div>
                  </div>
             ))}           
          </div>
           
    
    </div>
  )

}

export default Home
