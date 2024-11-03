import React from "react";
import { Link, NavLink } from "react-router-dom";
import img from "../Images/OVAL 2.png";
import logo from "../Images/logo.png";
const Header = () => {
  return (
    <div className=" flex items-center justify-between gap-2 my-[20px] bg-white">
      <div className=" flex items-center">
        <h3 className="text-[30px] font-bold">
          <img className=" w-[200px]" src={logo} alt="" />
        </h3>
      </div>
      <ul className=" flex items-center gap-3 text-[20px] font-semibold">
        <NavLink to={"/"}>
          <li className=" hover:text-orange-400 active:scale-95 cursor-pointer">
            Home
          </li>
        </NavLink>
        <NavLink to={"destination"}>
          <li className=" hover:text-orange-400 active:scale-95 cursor-pointer">
            Destination
          </li>
        </NavLink>
        <NavLink to={"packages"}>
          <li className=" hover:text-orange-400 active:scale-95 cursor-pointer">
            Packages
          </li>
        </NavLink>
        <NavLink to={"contact"}>
          <li className=" hover:text-orange-400 active:scale-95 cursor-pointer">
            Contact
          </li>
        </NavLink>
      </ul>
      <Link to={"/book"}>
        <button className=" px-6 py-3 border-[3px] rounded-full bg-orange-500 border-none text-white font-semibold text-[20px] hover:bg-orange-400 active:scale-95">
          Book now
        </button>
      </Link>
    </div>
  );
};

export default Header;
