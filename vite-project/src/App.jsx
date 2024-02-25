import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./app/Views/Home/home"
import { Products } from "./app/Views/Products/products"
import { DetailProduct } from "./app/Views/DetailProduct/DetailProduct"
import { Layout } from "./app/Components/Layout/Layout"
import { Show } from "./app/Views/Show/Show"
import { Create } from "./app/Views/Create/Create"
import { Edit } from "./app/Views//Edit/Edit"
 
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
                    <Route path="/show" element={<Show />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/edit/:id" element={<Edit />} />
                   </Route>
            </Routes>
      </BrowserRouter>
    </div>
    
    </>
    
  )
}


