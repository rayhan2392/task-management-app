import React from "react";
import { Link } from "react-router";
import { ModeToggle } from "../ui/mood-toggle";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-300 text-white p-4 shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide">TaskManager</div>
      {/* Nav Links */}
      <div className="flex gap-6 text-lg">
        <Link
          to="/tasks"
          className="hover:text-gray-300 transition-colors duration-200">
          Tasks
        </Link>
        <Link
          to="/users"
          className="hover:text-gray-300 transition-colors duration-200">
          Users
        </Link>
        <div>
          <ModeToggle></ModeToggle>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
