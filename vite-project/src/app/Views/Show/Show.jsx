import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {collection,getDocs, deleteDoc,doc} from "firebase/firestore"
import { db } from "../../firebase/firebase.js"

import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
const mySwal = withReactContent(Swal)

export const Show = () =>{
const [deportes, serDeportes] =useState([])

const deportesCollection = collection(db, "Deportes")

const getDeportes = async () =>{
    const data = await getDocs(deportesCollection)
    console.log(data.docs)
}

    return (
        <h1>Mostrar datos</h1>
    )
} 