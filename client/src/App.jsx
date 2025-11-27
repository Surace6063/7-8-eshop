import { Route, Routes } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"
import Products from "./pages/Products"

const App = () => {
  return (
    <>
     <Routes>
       {/* main layout */}
       <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
       </Route>

     </Routes>
    </>
  )
}
export default App