import { useState } from "react";
import { Link } from "react-router-dom";
import { FaLeaf, FaBars, FaXmark } from "react-icons/fa6";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2 text-lg font-bold text-green-700 sm:text-xl"
        >
          <FaLeaf />
          <span>Tender Coconut</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            to="/"
            className="font-medium text-gray-700 transition hover:text-green-600"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="font-medium text-gray-700 transition hover:text-green-600"
          >
            Products
          </Link>

          <Link
            to="/order"
            className="font-medium text-gray-700 transition hover:text-green-600"
          >
            Order
          </Link>

          <Link
            to="/contact"
            className="font-medium text-gray-700 transition hover:text-green-600"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-2xl text-green-700 md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">

            <Link
              to="/"
              onClick={closeMenu}
              className="rounded-lg px-4 py-2 font-medium text-gray-700 hover:bg-green-50 hover:text-green-600"
            >
              Home
            </Link>

            <Link
              to="/products"
              onClick={closeMenu}
              className="rounded-lg px-4 py-2 font-medium text-gray-700 hover:bg-green-50 hover:text-green-600"
            >
              Products
            </Link>

            <Link
              to="/order"
              onClick={closeMenu}
              className="rounded-lg px-4 py-2 font-medium text-gray-700 hover:bg-green-50 hover:text-green-600"
            >
              Order
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="rounded-lg px-4 py-2 font-medium text-gray-700 hover:bg-green-50 hover:text-green-600"
            >
              Contact
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;