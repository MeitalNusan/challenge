import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { getDoc, updateDoc,doc } from "firebase/firestore"



export const Edit = () =>{
    const [deporte, setDeporte] = useState("")
    const [marca, setMarca] = useState("")
    const [prenda, setPrenda] = useState("")

    const navigate = useNavigate()
    const {id} = useParams()




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

    useEffect(()=>{
        getDeportebyId(id)
    },[])

    return (
        <h1>Mostrar datos Editados</h1>
    )
}