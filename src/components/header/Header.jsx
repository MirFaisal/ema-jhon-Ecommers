import "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../../context/UserContext";
import Logo from "../../assets/Logo.svg";
import avatar from "../../assets/user-account.png";

const Header = () => {
  const { user, userLogout } = useContext(authContext);
  const [open, setOpen] = useState(false);
  const toggoler = () => {
    setOpen(!open);
  };

  // handel logout
  const handelLogout = () => {
    userLogout()
      .then(() => {
        console.log("logout");
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <nav className="bg-[#1c2b35] fixed z-[999] w-screen">
        <div className="container relative">
          <div className="main-nav p-4 flex justify-between items-center">
            {/* navbar brand */}
            <div className="nav-brand ">
              <Link to={"/home"}>
                <img src={Logo} alt="" />
              </Link>
            </div>
            {/* nav route */}
            <ul
              className={`navbar-nav pb-7 absolute z-[-1] grid grid-cols-1 gap-y-6 justify-items-center items-center ${
                open ? "top-full" : "top-[-250px]"
              } bg-[#1c2b35] w-full right-0 text-white duration-300 md:flex md:w-1/3 justify-between md:static md:z-0 md:p-0`}
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
              {!user?.displayName ? (
                <>
                  <li className=" cursor-pointer">
                    <NavLink to={"/login"}>Login</NavLink>
                  </li>
                  <li className="cursor-pointer">
                    <NavLink to={"/register"}>Register</NavLink>
                  </li>
                </>
              ) : null}
              {/*  */}
              {user?.displayName ? (
                <div className="dropdown dropdown-end text-black">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        referrerPolicy="no-referrer"
                        src={`${user.photoURL ? user.photoURL : avatar}`}
                        width="24"
                        height="24"
                        alt="profile"
                      ></img>
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <p className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </p>
                    </li>
                    <li>
                      <p>Settings</p>
                    </li>
                    <li>
                      <p onClick={() => handelLogout()}>Logout</p>
                    </li>
                  </ul>
                </div>
              ) : null}
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
