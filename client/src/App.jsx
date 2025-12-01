import { Route, Routes } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductDetailPage from "./pages/ProductDetailPage"
import {Toaster} from "react-hot-toast"

const App = () => {
  return (
    <>
    <Toaster />
     <Routes>
       {/* main layout */}
       <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug/:id" element={<ProductDetailPage />} />
       </Route>

     </Routes>
    </>
  )
}
export default App