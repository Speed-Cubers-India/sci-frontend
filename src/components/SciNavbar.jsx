"use client";

import { fetchMe, logout } from "@/api/auth";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LOGO = "/sci-logo.png";
const LOGO_WITH_TEXT = "/sci-logo-with-text.png";

const NAVBAR_HEIGHT = "80px";
const LOGO_SIZE = "80px";

export const SciNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchMe().then(setUser);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      closeMenu();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="bg-gray-50 text-gray-900">
      <div
        className="container mx-auto flex justify-between items-center px-4 md:px-8 border-b"
        style={{ minHeight: NAVBAR_HEIGHT, height: NAVBAR_HEIGHT }}
      >
        <Link href={"/"} onClick={closeMenu} className="flex items-center h-full shrink-0">
          {/* for larger screens */}
          <div className="hidden md:flex items-center h-full">
            <div
              className="shrink-0"
              style={{ width: LOGO_SIZE, height: LOGO_SIZE }}
            >
              <Image
                className="w-full h-full object-contain"
                onClick={toggleMenu}
                src={LOGO}
                alt="SCI-Logo"
                width={80}
                height={80}
                priority
              />
            </div>
            <p className="font-semibold -ml-2 leading-none">
              <span className="text-red-900">S</span>
              <span className="text-sm">PEED</span>
              <span className="text-red-900">C</span>
              <span className="text-sm">UBERS</span>{" "}
              <span className="text-red-900">I</span>
              <span className="text-sm">NDIA</span>
            </p>
          </div>
          {/* for smaller screens */}
          <div
            className="md:hidden shrink-0 -ml-3"
            style={{ width: LOGO_SIZE, height: LOGO_SIZE }}
          >
            <Image
              onClick={toggleMenu}
              className="w-full h-full object-contain"
              src={LOGO_WITH_TEXT}
              alt="SCI-Logo"
              width={80}
              height={80}
              priority
            />
          </div>
        </Link>
        <nav className="flex h-full items-center space-x-4 shrink-0">
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="hidden md:flex items-center space-x-4">
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
            {user ? (
              <button
                type="button"
                onClick={handleLogout}
                className="hover:underline hover:underline-offset-2"
              >
                Logout
              </button>
            ) : null}
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
          {user ? (
            <button
              type="button"
              onClick={handleLogout}
              className="hover:underline hover:underline-offset-2"
            >
              Logout
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};
