// components/Navbar.jsx
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen((p) => !p);

  // scroll if on home; otherwise navigate to home with state
  const goToSection = (sectionId) => {
    // normalize: 'home' -> 'hero'
    const targetId = sectionId === "home" ? "hero" : sectionId;

    if (location.pathname === "/") {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // fallback to navigate with state
        navigate("/", { state: { scrollTo: sectionId } });
      }
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }

    setIsOpen(false);
  };

  const navLinkClasses =
    "text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out";
  const mobileLinkClasses =
    "block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out";

  return (
    <nav className="fixed w-full z-50 bg-[#121820] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => goToSection("home")}
              className="flex-shrink-0 flex items-center text-xl font-bold text-white"
            >
              Ashhad | Web-Dev
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block ">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => goToSection("about")} className={`${navLinkClasses} ${'cursor-pointer'}`}>
                About
              </button>

              <button onClick={() => goToSection("experience")} className={`${navLinkClasses} ${'cursor-pointer'}`}>
                Experience
              </button>

              <button onClick={() => goToSection("tech")} className={`${navLinkClasses} ${'cursor-pointer'}`}>
                Tech
              </button>

              <button onClick={() => goToSection("projects")} className={`${navLinkClasses} ${'cursor-pointer'}`}>
                Projects
              </button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => goToSection("contact")}
                className="px-10 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg transition-colors duration-300 cursor-pointer"
              >
                Contact
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#121820]" id="mobile-menu cursor-pointer">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => goToSection("about")} className={mobileLinkClasses}>
              About
            </button>
            <button onClick={() => goToSection("experience")} className={mobileLinkClasses}>
              Experience
            </button>
            <button onClick={() => goToSection("tech")} className={mobileLinkClasses}>
              Tech
            </button>
            <button onClick={() => goToSection("projects")} className={mobileLinkClasses}>
              Projects
            </button>
            <button onClick={() => goToSection("contact")} className={mobileLinkClasses}>
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
