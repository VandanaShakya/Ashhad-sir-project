// components/Navbar.jsx
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen((p) => !p);

  // scroll if on home; otherwise navigate to home with state
  const goToSection = (sectionId) => {
    const targetId = sectionId === "home" ? "hero" : sectionId;

    if (location.pathname === "/") {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
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
      <div className="max-w-7xl mx-auto px-4">
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
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => goToSection("home")} className={navLinkClasses}>
                Home
              </button>
              <button onClick={() => goToSection("about")} className={navLinkClasses}>
                About
              </button>
              <button onClick={() => goToSection("skills")} className={navLinkClasses}>
                Skills
              </button>
              <button onClick={() => goToSection("projects")} className={navLinkClasses}>
                Projects
              </button>
              <button onClick={() => goToSection("contact")} className={navLinkClasses}>
                Contact Us
              </button>
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
        <div className="md:hidden bg-[#121820]" id="mobile-menu">
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
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
