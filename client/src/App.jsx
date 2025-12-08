import { Route, Routes } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductDetailPage from "./pages/ProductDetailPage"
import {Toaster} from "react-hot-toast"
import CartPage from "./pages/CartPage"
import AdminLayout from "./layout/AdminLayout"
import Main from "./pages/admin/Main"
import ProductList from "./pages/admin/ProductList"
import CategoryList from "./pages/admin/CategoryList"
import UserList from "./pages/admin/UserList"
import OrderList from "./pages/admin/OrderList"

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
          <Route path="/cart" element={<CartPage />} />
       </Route>

       {/* admin layout */}
       <Route element={<AdminLayout />}>
         <Route path="/dashboard/main" element={<Main />} />
         <Route path="/dashboard/product/list" element={<ProductList />} />
         <Route path="/dashboard/category/list" element={<CategoryList />} />
         <Route path="/dashboard/user/list" element={<UserList />} />
         <Route path="/dashboard/order/list" element={<OrderList />} />
       </Route>

     </Routes>
    </>
  )
}
export default App