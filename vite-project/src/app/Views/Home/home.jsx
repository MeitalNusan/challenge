import { Link } from 'react-router-dom'
import { useState } from 'react'
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
 


function Home() { 

   return (
    <div>
       <section>
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src={zapaOlympikus} alt="First slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={pelotaFutbol} alt="Second slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={zapaOlym} alt="Third slide"/>
              </div>
              
              <div class="carousel-item">
                <img class="d-block w-100" src={zapaNB} alt="Third slide"/>
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
          </div>
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
          <img className='imgzapa' src={zapaDiadora}  />
        </section>
        
        <div className='conteiner2'>
          <img className='zapanb' src={zapaNB} alt="" />
          <img  className='zapanb'src={camperaAdidas} alt="" />
        </div>

      
        <div className="conteiner">
          <div className="numero1">
          <Link  to="/" ><img className='img' src={zapaNB} alt="" /></Link>
          </div>
          <div className="numero1">
          <Link  to="/" ><img className='img' src={zapaOlym} alt="" /></Link>
          </div>
          <div className="numero1">
          <Link  to="/" ><img className='img' src={zapaDiadora2} alt="" /></Link>
          </div>
          
        </div>
        
        
    </div>
  )
}

export default Home
