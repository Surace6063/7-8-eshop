import { ShoppingBag } from "lucide-react"
import MaxWidthContainer from "../MaxWidthContainer"

const Navbar = () => {
  return (
    <div className="border-b border-gray-300 py-4 bg-white">
       <MaxWidthContainer className="flex justify-between items-center">
         {/* brand logo and search bar */}
         <div className="flex gap-2 items-center">
           <div>logo</div>
           <div>search bar</div>
         </div>

         {/* right side */}
         <div className="flex gap-4 items-center">
          <button>sign in</button>
          <button>sign up</button>

          <ShoppingBag />
         </div>
       </MaxWidthContainer>
    </div>
  )
}
export default Navbar