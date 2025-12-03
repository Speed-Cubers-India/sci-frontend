import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const logo_with_text = "https://sci-assets.s3.eu-north-1.amazonaws.com/sci-logo-with-text.png";
const logo = "https://sci-assets.s3.eu-north-1.amazonaws.com/sci-logo.png";

export const SciNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-gray-50 text-gray-900">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8 border-b">
        <Link href={"/"} onClick={closeMenu}>
          {/* for larger screens */}
          <div className="flex items-center">
            <img className="w-[80px] hidden md:block" onClick={toggleMenu} src={logo} alt="SCI-Logo" />
            <p className="hidden md:block font-semibold -ml-2">
            <span className="text-red-900">S</span><span className="text-sm">PEED</span><span className="text-red-900">C</span><span className="text-sm">UBERS</span> <span className="text-red-900">I</span><span className="text-sm">NDIA</span>
            </p>
          </div>
          {/* for smaller screens */}
          <img
            onClick={toggleMenu}
            className="w-[80px] block md:hidden -ml-3"
            src={logo_with_text}
            alt="SCI-Logo"
          />
        </Link>
        <nav className="flex space-x-4">
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="hidden md:flex space-x-4">
            <Link
              href="/rankings"
              className="hover:underline hover:underline-offset-2"
            >
              Rankings
            </Link>
            <Link
              href="/about"
              className="hover:underline hover:underline-offset-2"
            >
              About
            </Link>
            <Link
              href="/team"
              className="hover:underline hover:underline-offset-2"
            >
              Team
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-[999px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto flex flex-col items-start space-y-2 p-4 px-4 border-b">
        <Link
            href="/rankings"
            onClick={closeMenu}
            className="hover:underline hover:underline-offset-2"
          >
            Rankings
          </Link>
          <Link
            href="/about"
            onClick={closeMenu}
            className="hover:underline hover:underline-offset-2"
          >
            About
          </Link>
          <Link
            href="/team"
            onClick={closeMenu}
            className="hover:underline hover:underline-offset-2"
          >
            Team
          </Link>
        </div>
      </div>
    </div>
  );
};
