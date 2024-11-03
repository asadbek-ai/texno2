import { AiOutlineMenu } from "react-icons/ai";
import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import img from "../Images/OVAL 2.png";
import logo from "../Images/logo.png";
const Header = () => {
  const ul = useRef();
  const menu = useRef();
  const toggleMenu = () => {
    click = !click;
    ul.current.classList.toggle("hidden");
    // menu.current.classList.toggle("hidden");
  };
  let click = false;
  return (
    <div className=" flex items-center justify-between gap-2 my-[20px] bg-white border-b-[3px] shadow-sm py-3">
      <div className=" flex items-center">
        <div className="text-[30px] font-bold w-[70%]">
          <img className=" w-[200px]" src={logo} alt="" />
        </div>
      </div>
      <ul
        ref={ul}
        className="hidden items-center gap-3 text-[15px] md:text-[17px] lg:text-[20px] font-semibold  md:flex "
      >
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
      <div className=" flex gap-2 items-center justify-center">
        <div
          ref={menu}
          onClick={() => toggleMenu()}
          className="md:hidden text-[20px]"
        >
          <AiOutlineMenu />
        </div>
        <Link to={"/book"}>
          <button className=" lg:px-6 lg:py-3 md:px-5 md:py-2 px-4 py-2 border-[3px] rounded-full bg-orange-500 border-none text-white font-semibold lg:text-[20px] md:text-[15px] sm:text-[12px] hover:bg-orange-400 active:scale-95">
            Book now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
