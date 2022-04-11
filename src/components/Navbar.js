import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between border-b p-5 text-sm">
        <div className="flex space-x-5">
          <p className="cursor-pointer hover:text-green-700">Discover</p>
          <p className="cursor-pointer hover:text-green-700">Start a Project</p>
        </div>
        <div>
          <img
            className="w-48 cursor-pointer"
            src="https://ksr-static.imgix.net/tq0sfld-kickstarter-logo-green.png?ixlib=rb-2.1.0&auto=compress%2Cformat&w=1000&fit=min&s=f00262bade8a51249b7d63c8f76ce47f"
            alt="kickstarter"
          />
        </div>
        <div className="flex space-x-5">
          <div className="flex space-x-2 cursor-pointer hover:text-green-700">
            <p>Search</p>
            <SearchIcon className="h-5 w-5" />
          </div>
          <p className="cursor-pointer hover:text-green-700">Login</p>
        </div>
      </div>
      <div className="flex justify-center space-x-10 border-b p-5">
        <p className="text-slate-500 hover:text-green-700 cursor-pointer hover:underline underline-offset-4 decoration-2 transition-transform">
          Arts
        </p>
        <p className="text-slate-500 hover:text-green-700 cursor-pointer hover:underline underline-offset-4 decoration-2 transition-transform">
          Comics & Illustration
        </p>
        <p className="text-slate-500 hover:text-green-700 cursor-pointer hover:underline underline-offset-4 decoration-2 transition-transform">
          Design & Tech
        </p>
        <p className="text-slate-500 hover:text-green-700 cursor-pointer hover:underline underline-offset-4 decoration-2 transition-transform">
          Film
        </p>
        <p className="text-slate-500 hover:text-green-700 cursor-pointer hover:underline underline-offset-4 decoration-2 transition-transform">
          Food & Craft
        </p>
        <p className="text-slate-500 hover:text-green-700 cursor-pointer hover:underline underline-offset-4 decoration-2 transition-transform">
          Games
        </p>
        <p className="text-slate-500 hover:text-green-700 cursor-pointer hover:underline underline-offset-4 decoration-2 transition-transform">
          Music
        </p>
        <p className="text-slate-500 hover:text-green-700 cursor-pointer hover:underline underline-offset-4 decoration-2 transition-transform">
          Publishing
        </p>
      </div>
    </>
  );
};
export default Navbar;
