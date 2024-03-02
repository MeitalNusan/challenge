import { Link } from 'react-router-dom'
import { useState } from 'react'
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
 


function Home() { 

   return (
    <div>
       <section className="">
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
      
        <div className='container'>
          <div className="numero1">
            
          </div>
          <div className="numero1">

          </div>
          <div className="numero1">
            
          </div>        
        </div>
    </div>
  )
}

export default Home
