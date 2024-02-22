import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { imageDb } from "../../firebase/firebase.js"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"
import { listAll } from "firebase/storage"


export const FirebaseImageUpload = () => {
//     const [imag, setImg] = useState("")
//     const [imgUrl, setImgUrl ] = useState([])

//     const handleClick = () =>{
//         if(imag !==null){
//      const imageRef = ref(imageDb, `files/${v4()}`)
//    uploadBytes(imageRef, imag).then(value=>{
//     console.log(value)
//    })
//     }

//  }
//     useEffect(()=>{
//         listAll(ref(imageDb, "files")).then(imgs =>{
//             console.log(imgs)
//             imgs.items.forEach(val =>{
//                 getDownloadURL(val).then(url=>{
//                     setImgUrl(data=>[...data, url])

//                 })
//             })
//         })
//     },[])

// console.log(imgUrl, "imgUrl")

    return(
        <div>
            {/* <input type="file" onChange={(e) =>setImg(e.target.files[0])} />
             <button onClick={handleClick}>Upload</button>

             {
                imgUrl.map(dataVal=><div>
                    <br />
                    <img src={dataVal} height="200px" width="200px"/>
                     
                </div>)
             } */}
             <h1>hola</h1>
        </div>
    )
}
