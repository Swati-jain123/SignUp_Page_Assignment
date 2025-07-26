import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons (optional)

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-blue-600 text-xl">MyWebsite</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-800 hover:text-blue-500 text-xl">
              Home
            </a>
            <a href="#about" className="text-gray-800 hover:text-blue-500 text-xl">
              About
            </a>
            <a href="#contact" className="text-gray-800 hover:text-blue-500 text-xl">
              Contact
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          <a href="#home" className="block text-gray-700 hover:text-blue-600">
            Home
          </a>
          <a href="#about" className="block text-gray-700 hover:text-blue-600">
            About
          </a>
          <a href="#contact" className="block text-gray-700 hover:text-blue-600">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
