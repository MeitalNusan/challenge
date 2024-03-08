import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { getDoc, updateDoc,doc } from "firebase/firestore"
import { db } from "../../firebase/firebase.js"



export const EditHome2 = () =>{
    
    const [img, setImg] = useState("")
  
    const navigate = useNavigate()
    const {id} = useParams()


//buscar item por ID en la base de datos
    const getDeportebyId = async (id) =>{
        const deporteDoc = await getDoc(doc(db, "imgHome2", id))

        if(deporteDoc.exists()){
            setImg(e.target.files[0])
            // setImg(deporteDoc.data().img)
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
    e.preventDefault();

    // Basic validation
    // if (!deporte || !marca || !prenda) {
    //     // Display an error message or prevent form submission
    //     console.log("Please fill in all fields");
    //     return;
    // }

    const deporteDoc = doc(db, "imgHome2", id);

    try {
        let imgDataUrl = ""; // Initialize with an empty string
 
        // Check if img is a valid File object
        if (img  instanceof File) {
            // Convert File to data URL
            imgDataUrl = await convertFileToDataUrl(img);
          } else {
            // Handle the case where img is not a valid File object
            console.error("Invalid image file");
            // You might want to display an error message to the user or handle it differently
        }

        const data = {
            img3: imgDataUrl,
        };

        await updateDoc(deporteDoc, data);
        navigate("/");
    } catch (error) {
        // Handle errors, including the conversion error
        console.error("Error updating document:", error);
    }
};
// Helper function to convert File to data URL
const convertFileToDataUrl = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
            resolve(reader.result);
        };

        reader.onerror = (error) => {
            reject(error);
        };

        reader.readAsDataURL(file);
    });
};

    return (
        <div className="container">
            <h1>Edit</h1>
            <div className="row">
                <div className="col-3">
                    <form onSubmit={update}>
                        <div className="mb-3">
                              <label className="form-label">Imagen:</label>
                            <input
                                onChange={(e) => setImg(e.target.files[0])}
                                className="form-control"
                                type="file"
                            />
                            
                        </div>
                        <button type="submit" className="btn btn-primary">Editar</button>
                       <Link className="btn btn-danger" to="/">Cancelar</Link>
                    </form>
                </div>
            </div>
        </div>      
    )
}