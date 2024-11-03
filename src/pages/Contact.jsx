import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import React from "react";
import Container from "../components/Container";

const Contact = () => {
  return (
    <Container>
      <div className=" h-[80vh]">
        <h1 className=" text-[45px] font-[600] text-orange-500 py-6 border-b-[2px]">
          Contact
        </h1>
        <div className=" flex gap-[20px] p-5">
          <div className=" w-[50%] flex flex-col gap-[20px] justify-center">
            <div className=" flex gap-2 items-center">
              <div className=" text-[20px] p-2 bg-orange-500 rounded-full text-white">
                <GoLocation />
              </div>
              <span className=" text-[20px] font-[500]">
                Any Ware, Any Rod, Xyz (142 234)
              </span>
            </div>
            <div className=" flex gap-2 items-center ">
              <div className=" text-[20px] p-2 bg-orange-500 rounded-full text-white">
                <BsFillTelephoneFill className=" text-[20px]" />
              </div>
              <span className=" text-[20px] font-[500]">+99897898448</span>
            </div>
            <div className=" flex gap-2 items-center">
              <div className=" text-[20px] p-2 bg-orange-500 rounded-full text-white">
                <AiOutlineMail className=" text-[20px]" />
              </div>
              <span className=" text-[20px] font-[500]">sada@gmail.com</span>
            </div>
          </div>
          <div className="  p-3 rounded-[10px] border-[2px] shadow-lg w-[50%]">
            <div className=" w-full">
              <h3 className=" text-[20px] font-[500] text-orange-500">
                Get in touch with us
              </h3>
              <div className=" flex gap-3">
                <div className=" w-[50%]">
                  <h4 className=" text-[17px] font-[400]">You name:</h4>
                  <input
                    placeholder="Enter your name"
                    className="  border-[1px] border-black rounded-md p-1 w-full"
                    type="text"
                  />
                </div>
                <div className=" w-[50%]">
                  <h4 className=" text-[17px] font-[400]">Email:</h4>
                  <input
                    placeholder="Enter your email"
                    className="w-full border-[1px] border-black rounded-md p-1"
                    type="email"
                  />
                </div>
              </div>
              <div className=" mt-2">
                <h4 className=" text-[17px] font-[400]">Message:</h4>

                <textarea
                  rows={"4"}
                  cols={"50"}
                  placeholder="Message"
                  className=" p-1 w-full border-[1px] border-black rounded-md"
                ></textarea>
              </div>
              <div className=" flex justify-end">
                <button className=" flex gap-3 items-center px-[10px] py-[5px] rounded-[10px] border-orange-500 border-[2px] my-4 hover:border-orange-400 active:scale-95">
                  Sent Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
