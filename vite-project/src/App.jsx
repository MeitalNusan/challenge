import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./app/Views/Home/home"
import { Products } from "./app/Views/Products/products"
import { DetailProduct } from "./app/Views/DetailProduct/DetailProduct"
import { Layout } from "./app/Components/Layout/Layout"
import { Adidas } from "./app/Views/Marcas/Adidas/Adidas"
import { Athix } from "./app/Views/Marcas/Athix/Athix"
import { CreateAdidas } from "./app/Views/Create/AdidasCreate/CreateAdidas"
import { EditAdidas } from "./app/Views/Create/AdidasCreate/EditAdidas"
import { CreateAthix } from "./app/Views/Create/AthixCreate/CreateAthix"
import { EditAthix } from "./app/Views/Create/AthixCreate/EditAthix"
import { EditHome } from "./app/Views/Home/editHome"
import { EditHome2 } from "./app/Views/Home/editHome2"
import { EditHome3 } from "./app/Views/Home/editHome3"
import { EditHome4 } from "./app/Views/Home/editHome4"
import { CreateHome } from "./app/Views/Home/createHome"
import { CreateHome2 } from "./app/Views/Home/createHome2"
import { CreateHome3 } from "./app/Views/Home/createHome3"
import { CreateHome4 } from "./app/Views/Home/createHome4"
 
 
// import 'bootstrap/dist/css/bootstrap.min.css'
export const App = () => {

  return (
    <>
  
    <div className="app">
      <BrowserRouter>
             <Routes>   
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/product/:id" element={<DetailProduct />} />
                    <Route path="/Adidas" element={<Adidas />} />
                    <Route path="/Athix" element={<Athix />} />
                    <Route path="/createAdidas" element={<CreateAdidas />} />
                    <Route path="/editAdidas/:id" element={<EditAdidas />} />
                    <Route path="/createAthix" element={<CreateAthix />} />
                    <Route path="/editAthix/:id" element={<EditAthix />} />
                    <Route path="/editHome/:id" element={<EditHome />} />
                    <Route path="/editHome2/:id" element={<EditHome2 />} />
                    <Route path="/editHome3/:id" element={<EditHome3 />} />
                    <Route path="/editHome4/:id" element={<EditHome4 />} />
                    <Route path="/createHome" element={<CreateHome />} />
                    <Route path="/createHome2" element={<CreateHome2 />} />
                    <Route path="/createHome3" element={<CreateHome3 />} />
                    <Route path="/createHome4" element={<CreateHome4 />} />
                   </Route>
            </Routes>
      </BrowserRouter>
    </div>
    
    </>
    
  )
}


