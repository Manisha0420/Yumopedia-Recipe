import React from "react";
import { NavLink, Outlet } from "react-router";

const Navbar = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="min-w-[240px] bg-[#DEDCCD] p-6 flex flex-col items-center gap-10">
        <div className="w-full flex justify-center mb-10">
          <img
            className="h-20 w-auto object-cover rounded-2xl"
            src="/logo.jpg"
            alt="Logo"
          />
        </div>

        <nav className="flex flex-col gap-8 text-xl font-bold w-full text-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-gray-700 hover:text-red-400"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/recipes"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-gray-700 hover:text-red-400"
            }
          >
            Recipes
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-gray-700 hover:text-red-400"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/favorite"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-gray-700 hover:text-red-400"
            }
          >
            Favorite
          </NavLink>
        </nav>
      </div>

      {/* Main content area */}
      <main className="flex-1 p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;
