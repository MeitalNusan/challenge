import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./app/Views/Home/home"
import { Products } from "./app/Views/Products/products"
import { DetailProduct } from "./app/Views/DetailProduct/DetailProduct"
import { Layout } from "./app/Components/Layout/Layout"
import { Adidas } from "./app/Views/Adidas/Adidas"
import { Create } from "./app/Views/Create/Create"
import { Edit } from "./app/Views//Edit/Edit"
import { CreateHome } from "./app/Views/Home/createHome"
import { EditHome } from "./app/Views/Home/editHome"
import { EditHome2 } from "./app/Views/Home/editHome2"
import { EditHome3 } from "./app/Views/Home/editHome3"
import { CreateHome2 } from "./app/Views/Home/createHome2"
import { CreateHome3 } from "./app/Views/Home/createHome3"
 
 
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
                    <Route path="/create" element={<Create />} />
                    <Route path="/edit/:id" element={<Edit />} />
                    <Route path="/editHome/:id" element={<EditHome />} />
                    <Route path="/editHome2/:id" element={<EditHome2 />} />
                    <Route path="/editHome3/:id" element={<EditHome3 />} />
                    <Route path="/createHome" element={<CreateHome />} />
                    <Route path="/createHome2" element={<CreateHome2 />} />
                    <Route path="/createHome3" element={<CreateHome3 />} />
                   </Route>
            </Routes>
      </BrowserRouter>
    </div>
    
    </>
    
  )
}


