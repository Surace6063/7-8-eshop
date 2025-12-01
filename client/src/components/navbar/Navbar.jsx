import { ShoppingBag } from "lucide-react"
import MaxWidthContainer from "../MaxWidthContainer"
import Button from "../ui/Button"
import SearchBar from "../SearchBar"
import { Link } from "react-router-dom"
import AuthDialog from "../auth-dialog/AuthDialog"
import MobileNavigation from "./MobileNavigation"
import { useAuthStore } from "../../zustand/useAuthStore"

const Navbar = () => {
  const {user} = useAuthStore()
  
  return (
    <div className="border-b border-gray-300 py-4 bg-white">
       <MaxWidthContainer className="flex justify-between items-center">
         {/* brand logo and search bar */}
         <div className="flex gap-6 items-center">
          <MobileNavigation />
           <Link to="/" className="flex gap-0.5 items-center">
            <img src="logo.png" alt="logo" className="size-8" />
            <span className="text-xl font-bold text-slate-800">E-Shop</span>
           </Link>
           <SearchBar />
         </div>

         {/* right side */}
         <div className="flex gap-4 items-center">
           {
            user ? <span>user profile</span> : <AuthDialog />
           }
          <ShoppingBag />
         </div>
       </MaxWidthContainer>
    </div>
  )
}
export default Navbar