import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { Link, useNavigate } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/login");
  };
  return (
    <nav className="bg-blue-50 relative z-50">
      <div className="flex justify-between items-center w-11/12 max-w-[1000px] mx-auto py-4">
        <img src="/w-logo.png" className="w-20" alt="Logo" />

        {/* Desktop Menu */}
        <ul className="lg:flex items-center gap-5 text-sm hidden ">
          {[
            "Home",
            "Features",
            "About Us",
            "How ReferralHub Works",
            "Pricing",
          ].map((item, idx) => (
            <li key={idx}>
              <Link
                to="/"
                className="hover:text-blue-700 text-black transition duration-200"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <button
          onClick={() => handleNavigate()}
          className="bg-[#305AFF] text-white cursor-pointer px-4 py-2 rounded-md hidden lg:flex items-center text-sm gap-2 hover:bg-blue-600 transition duration-200"
        >
          Get Started <FaArrowRightLong />
        </button>

        {/* Mobile Icon */}
        <div className="lg:hidden">
          {open ? (
            <RxCross1
              onClick={() => setOpen(false)}
              className="text-3xl text-blue-700 cursor-pointer transition"
            />
          ) : (
            <HiBars3
              onClick={() => setOpen(true)}
              className="text-3xl text-blue-700 cursor-pointer transition"
            />
          )}
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-30 lg:hidden transition-opacity"
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-blue-50 shadow-lg p-6 z-40 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6 text-black text-sm font-medium mt-14">
          {[
            "Home",
            "Features",
            "About Us",
            "How ReferralHub Works",
            "Pricing",
          ].map((item, idx) => (
            <li key={idx}>
              <Link to="/" onClick={() => setOpen(false)}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={() => handleNavigate()}
          className="cursor-pointer mt-6 bg-[#305AFF] text-white px-4 py-2 rounded-md flex items-center justify-center text-sm gap-2 w-full hover:bg-blue-600 transition duration-200"
        >
          Get Started <FaArrowRightLong />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
