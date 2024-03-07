import "../Home/cssHome.css"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { collection, addDoc, doc } from "firebase/firestore";
import { db, imageDb } from "../../firebase/firebase.js";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

 

export const CreateHome  = () =>{

    const navigate = useNavigate();
    const [urlImDesc, setUrlImDesc] = useState("");
    const [urlImDesc2, setUrlImDesc2] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
  
    const guardarInfo = async (e) => {
      e.preventDefault();
    
    //   if (!deporte || !marca || !prenda) {
    //     console.log("Please fill in all fields");
    //     return;
    //   }
    
      
        const newD = {
          img:urlImDesc,
          img2:urlImDesc2,
        };
    
        try {
          await addDoc(collection(db, "imgHome"), { ...newD });
          navigate("/");
        } catch (error) {
          console.error(error);
          // Handle error, display a message, etc.
        }
    
        setIsLoading(false);
        // Clear form fields after submission
        setUrlImDesc("");
    
        setIsLoading(false);
        // Clear form fields after submission
        setUrlImDesc2("");
        
       }  
      
    
    const fileHandler = async (e) => {
      try {
        const archivoI = e.target.files[0];
    
        // Check if a file is selected
        if (!archivoI) {
          console.error("No file selected");
          return;
        }
    
        // Check if the selected file is an image
        if (!archivoI.type.startsWith("image/")) {
          console.error("Invalid file type. Please select an image file.");
          return;
        }
    
        const refArchivo = ref(imageDb, `documentos/${archivoI.name}`);
        await uploadBytes(refArchivo, archivoI);
        const imageUrl = await getDownloadURL(refArchivo);
        setUrlImDesc(imageUrl);
      } catch (error) {
        console.error("Error uploading image:", error);
        // Handle the error, display a message, etc.
      }
    }
    const fileHandler2 = async (e) => {
      try {
        const archivoII = e.target.files[0];
    
        // Check if a file is selected
        if (!archivoII) {
          console.error("No file selected");
          return;
        }
    
        // Check if the selected file is an image
        if (!archivoII.type.startsWith("image/")) {
          console.error("Invalid file type. Please select an image file.");
          return;
        }
    
        const refArchivoII = ref(imageDb, `documentos/${archivoII.name}`);
        await uploadBytes(refArchivoII, archivoII);
        const imageUrl2 = await getDownloadURL(refArchivoII);
        setUrlImDesc2(imageUrl2);
      } catch (error) {
        console.error("Error uploading image:", error);
        // Handle the error, display a message, etc.
      }
    
    };
    

  
   

    return(
        <div className="createHome">
            <form onSubmit={guardarInfo}>
            <label className="form-label">Agregar Imagen: </label>
            <input
            type="file"
            id="file1"
            placeholder="agregar imagen"
            className="form-control"
            onChange={fileHandler}
            />
            <label className="form-label">Agregar Imagen2: </label>
            <input
            type="file"
            id="file2"
            placeholder="agregar imagen"
            className="form-control"
            onChange={fileHandler2}
            />

        <button className="btn btn-primary" disabled={isLoading}>
          {isLoading ? "Creating..." : "Crear"}
        </button>      

        <Link className="btn btn-danger" to="/">
          Cancelar
        </Link>
      </form>
    </div>
    )

}