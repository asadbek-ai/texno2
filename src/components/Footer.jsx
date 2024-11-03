import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { AiOutlineTwitter } from "react-icons/ai";
import { CgInsertAfter } from "react-icons/cg";
import { AiOutlineInsertRowLeft } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import React from "react";

const Footer = () => {
  return (
    <div className=" text-[white] bg-orange-500 ">
      <div className=" flex gap-3 text-[white] bg-orange-500 px-[80px] py-[40px]">
        <div className=" flex flex-col justify-between gap-2 w-[40%]">
          <h1 className=" text-[25px]">Travel Toor</h1>
          <div>
            <p className=" w-[70%]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
              molestiae praesentium doloremque totam enim fugiat tempore.
            </p>
            <div className=" flex gap-3">
              <AiFillFacebook />
              <AiFillInstagram />
              <AiOutlineTwitter />
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-between gap-2 w-[25%]">
          <h1 className=" text-[25px]">Services</h1>
          <div>
            <p>Home</p>
            <p>Destination</p>
            <p>Packages</p>
            <p>Contact</p>
          </div>
          <p className="  font-bold text-[15px] translate-y-8 translate-x-[-40px]">
            traveltoor©2024 all right reserve
          </p>
        </div>
        <div className="flex flex-col justify-between gap-2 w-[35%]">
          <h1 className=" text-[25px]">Contact</h1>
          <div className=" flex flex-col gap-2">
            <div className=" flex gap-3 items-center">
              <GoLocation />
              <p>Any Ware, Any Rod, Xyz (142 234)</p>
            </div>
            <div className=" flex gap-3 items-center">
              <BsTelephoneFill />
              <p>+9989178654678</p>
            </div>
            <div className=" flex gap-3 items-center">
              <AiOutlineMail />
              <p>ayx@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
