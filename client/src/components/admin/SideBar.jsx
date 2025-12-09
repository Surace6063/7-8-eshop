import { useState } from "react";
import {
  Menu,
  Home,
  Package,
  ShoppingCart,
  Users,
  ChevronLeft,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../libs/utils";

const navItems = [
  { label: "Dashboard", icon: <Home size={20} />, path: "/dashboard/main" },
  {
    label: "Products",
    icon: <Package size={20} />,
    path: "/dashboard/product/list",
  },
  {
    label: "Categories",
    icon: <Package size={20} />,
    path: "/dashboard/category/list",
  },
  { label: "Orders", icon: <ShoppingCart size={20} />, path: "/dashboard/order/list" },
  { label: "Customers", icon: <Users size={20} />, path: "/dashboard/user/list" },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Overlay for Mobile */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/40 md:hidden z-30"
        ></div>
      )}

      <div
        className={cn(
          "fixed md:static inset-y-0 left-0 z-40 bg-white border-r border-gray-300 shadow-sm transition-all duration-300 flex flex-col",
          collapsed ? "w-20" : "w-64",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        {/* Logo and Collapse Button */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-300">
          {!collapsed && (
            <h1 className="text-xl font-bold whitespace-nowrap">AdminPanel</h1>
          )}

          <button
            onClick={() => setCollapsed((prev) => !prev)}
            className="p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <ChevronLeft
              size={20}
              className={cn(
                "transition-transform",
                collapsed ? "rotate-180" : "rotate-0"
              )}
            />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-3 space-y-2 flex-1 mt-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 p-3 rounded-xl transition-all cursor-pointer",
                isActive(item.path)
                  ? "bg-gray-700 text-white shadow"
                  : "hover:bg-gray-100"
              )}
            >
              {item.icon}
              {!collapsed && <span className="font-medium">{item.label}</span>}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileOpen((p) => !p)}
          className="md:hidden absolute top-4 right-12 p-2 bg-white border rounded-md shadow"
        >
          <Menu size={22} />
        </button>
      </div>
    </>
  );
};

export default Sidebar;
