import { ShoppingBag } from "lucide-react"
import MaxWidthContainer from "../MaxWidthContainer"
import Button from "../ui/Button"
import SearchBar from "../SearchBar"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="border-b border-gray-300 py-4 bg-white">
       <MaxWidthContainer className="flex justify-between items-center">
         {/* brand logo and search bar */}
         <div className="flex gap-6 items-center">
           <Link to="/" className="flex gap-0.5 items-center">
            <img src="logo.png" alt="logo" className="size-8" />
            <span className="text-xl font-bold text-slate-800">E-Shop</span>
           </Link>
           <SearchBar />
         </div>

         {/* right side */}
         <div className="flex gap-4 items-center">
          <Button variant="ghost">
            sign in
          </Button>

          <Button>
            sign up
          </Button>

          <ShoppingBag />
         </div>
       </MaxWidthContainer>
    </div>
  )
}
export default Navbar