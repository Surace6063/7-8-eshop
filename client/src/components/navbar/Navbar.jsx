import { ShoppingBag } from "lucide-react";
import MaxWidthContainer from "../MaxWidthContainer";
import Button from "../ui/Button";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
import AuthDialog from "../auth-dialog/AuthDialog";
import MobileNavigation from "./MobileNavigation";
import { useAuthStore } from "../../zustand/useAuthStore";
import ProfileMenu from "../ProfileMenu";
import { useCartStore } from "../../zustand/useCartStore";
import {useCarts} from "../../api/cartServices"
import { useEffect } from "react";

const Navbar = () => {
  const { isAuthenticated } = useAuthStore();

  const { totalQuantity, setUserCart } = useCartStore()

  const {data:cart} = useCarts()

  useEffect(()=>{
   if(cart) setUserCart(cart)
  },[cart])


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
        <div className="flex gap-6 items-center">
          {isAuthenticated ? <ProfileMenu /> : <AuthDialog />}
          <Link to="/cart" className="relative inline-block">
            <ShoppingBag className="text-gray-500 w-6 h-6" />

            {totalQuantity > 0 && (
              <span
                className="
      absolute -top-2 -right-2
      w-5 h-5 
      bg-primary text-white text-xs
      flex items-center justify-center
      rounded-full
      font-medium
    "
              >
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>
      </MaxWidthContainer>
    </div>
  );
};
export default Navbar;
