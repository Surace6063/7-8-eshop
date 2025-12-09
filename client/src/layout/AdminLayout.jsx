import { Outlet } from "react-router-dom"
import Sidebar from "../components/admin/SideBar"
import Header from "../components/admin/Header"

const AdminLayout = () => {
  return (
    <div className="flex h-screen">
         <Sidebar />

         {/* main content */}
         <div className="flex-1 flex flex-col">
            {/* header */}
           <Header />

            {/* content */}
            <main className="flex-1 overflow-auto p-4 md:p-8 bg-gray-50/50">
                <Outlet />
            </main>
         </div>
    </div>
  )
}
export default AdminLayout