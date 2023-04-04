import "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.svg";

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggoler = () => {
    setOpen(!open);
  };
  // bg-[#1C2B35;]
  return (
    <>
      <nav className="navbar bg-[#1c2b35] relative z-50">
        <div className="container">
          <div className="main-nav p-4 flex justify-between items-center">
            {/* navbar brand */}
            <div className="nav-brand">
              <Link to={"/"}>
                <img src={Logo} alt="" />
              </Link>
            </div>
            {/* nav route */}
            <ul
              className={`navbar-nav pb-7 absolute z-[-1] grid grid-cols-1 gap-y-6 justify-items-center ${
                open ? "top-full" : "top-[-250%]"
              } bg-[#1c2b35] w-full right-0  text-white duration-300 md:flex md:w-1/3 justify-between md:static md:z-0 md:p-0`}
            >
              <li className=" cursor-pointer">
                <NavLink to={"/shop"}>Shop</NavLink>
              </li>
              <li className=" cursor-pointer">
                <NavLink to={"/order"}>Order</NavLink>
              </li>
              <li className=" cursor-pointer">
                <NavLink to={""}>Inventory</NavLink>
              </li>
              <li className=" cursor-pointer">
                <NavLink to={""}>Login</NavLink>
              </li>
            </ul>
            {/* navbar toggoler */}
            <button
              className="bg-[#1C2B35;] text-white md:hidden"
              onClick={() => toggoler()}
            >
              {open ? (
                <XMarkIcon className="w-6" />
              ) : (
                <Bars3Icon className="w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
