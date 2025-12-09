import { Search, Bell, Menu as MenuIcon } from "lucide-react";
import { useState } from "react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";

const Header = () => {

  return (
    <header className="h-16 bg-white shadow-sm border-b border-gray-200 flex items-center justify-between px-4 md:px-6">
      <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
        <MenuIcon size={20} />
      </button>

      <div className="hidden md:flex items-center w-80">
        <div className="relative w-full">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-300 rounded-xl pl-10 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">

        <button className="relative p-2 rounded-xl hover:bg-gray-100">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile dropdown */}
        <Menu as="div" className="relative ml-3">
          <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Open user menu</span>

            <img
              src="https://i.pravatar.cc/40"
              alt="user"
              className="size-9 rounded-full bg-gray-300 shadow outline"
            />
          </MenuButton>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-xl bg-white py-1 shadow-lg border border-gray-200 
               transition 
               data-closed:scale-95 data-closed:opacity-0 data-closed:transform 
               data-enter:duration-100 data-enter:ease-out 
               data-leave:duration-75 data-leave:ease-in"
          >
            <MenuItem>
              <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 
                   data-focus:bg-gray-100 data-focus:outline-hidden"
              >
                Profile
              </button>
            </MenuItem>

            <MenuItem>
              <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-700
                   data-focus:bg-gray-100 data-focus:outline-hidden"
              >
                Settings
              </button>
            </MenuItem>

            <MenuItem>
              <button
                className="block w-full text-left px-4 py-2 text-sm text-red-600
                   data-focus:bg-gray-100 data-focus:outline-hidden"
              >
                Logout
              </button>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
