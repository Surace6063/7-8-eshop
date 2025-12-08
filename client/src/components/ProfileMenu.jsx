import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "../libs/apiRequest";
import { useAuthStore } from "../zustand/useAuthStore";
import toast from "react-hot-toast";
import { useCartStore } from "../zustand/useCartStore";

const ProfileMenu = () => {
// accessing logout from auth-store
const {clearUser,setUser} = useAuthStore()
const {clearUserCart} = useCartStore()

  // fetching user profile
  const { data} = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const response = await apiRequest.get("auth/me/");
      setUser(response.data)
      return response.data;
    },
  });

  return (
    <div>
      <Menu>
        <MenuButton>
          <img src={data?.profile?.profile_image} alt="profile" className="size-8"  />
          <span className="text-xs text-gray-600 font-medium">{data?.username}</span>
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl border border-white/5 bg-white p-1 text-sm/6 text-gray-800 text-center transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0 shadow"
        >
          <MenuItem>
            <Link className="group flex w-full justify-center font-medium hover:bg-slate-100 p-2 items-center gap-2 rounded-lg">
              Profile
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/dashboard/main" className="group flex w-full justify-center font-medium hover:bg-slate-100 p-2 items-center gap-2 rounded-lg">
              Dashboard
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className="group flex w-full justify-center font-medium hover:bg-slate-100 p-2 items-center gap-2 rounded-lg">
              orders
            </Link>
          </MenuItem>
          <MenuItem>
            <button onClick={()=>{
                clearUser()
                clearUserCart()
                toast.success("User logout sucessfully.")
            }} className="group flex w-full justify-center font-medium hover:bg-slate-100 p-2 items-center gap-2 rounded-lg">
              logout
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
};
export default ProfileMenu;
