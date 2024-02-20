import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db, imageDb } from "../../firebase/firebase.js";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

export const Create = () => {
  const navigate = useNavigate();
  const [deporte, setDeporte] = useState("");
  const [marca, setMarca] = useState("");
  const [prenda, setPrenda] = useState("");
  const [urlImDesc, setUrlImDesc] = useState("");

  const guardarInfo = async (e) => {
    e.preventDefault();

    const newD = {
      deporte: deporte,
      marca: marca,
      prenda: prenda,
      img: urlImDesc
    };

     try {
      await addDoc(collection(db, "Deportes"), { ...newD });
      navigate("/show");
    } catch (error) {
      console.error(error);
      // Handle error, display a message, etc.
    }

    // Clear form fields after submission
    setDeporte("");
    setMarca("");
    setPrenda("");
    setUrlImDesc("");
  };

  const fileHandler = async (e) => {
    const archivoI = e.target.files[0];
    const refArchivo = ref(imageDb, `documentos/${archivoI.name}`);
    await uploadBytes(refArchivo, archivoI);
    const imageUrl = await getDownloadURL(refArchivo);
    setUrlImDesc(imageUrl);
    console.log(imageUrl)

  };

  return (
    <div className="container">
      <h1>Crear</h1>
      <form onSubmit={guardarInfo}>
        <label className="form-label">Deporte:</label>
        <div>
          <input
            id="deporte"
            className="form-control"
            type="text"
            placeholder="deporte"
            value={deporte}
            onChange={(e) => setDeporte(e.target.value)}
          />
        </div>

        <label className="form-label">Marca:</label>
        <div>
          <input
            id="marca"
            className="form-control"
            type="text"
            placeholder="marca"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          />
        </div>

        <label className="form-label">Prenda:</label>
        <div>
          <input
            id="prenda"
            className="form-control"
            type="text"
            placeholder="prenda"
            value={prenda}
            onChange={(e) => setPrenda(e.target.value)}
          />
        </div>

        <label className="form-label">Agregar Imagen: </label>
        <input
          type="file"
          id="file"
          placeholder="agregar imagen"
          className="form-control"
          onChange={fileHandler}
        />

        <button className="btn btn-primary">Crear</button>
        <Link className="btn btn-danger" to="/show">
          Cancelar
        </Link>
      </form>
    </div>
  );
};
