import { AiOutlineFileImage } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import React from "react";
import fon from "../Images/images.png";
import Container from "../components/Container";
import { data, getdata } from "../API/request";

const url = "http://localhost:3000";
console.log(data);

const Destination = () => {
  getdata("http://localhost:3000/city");
  return (
    <Container>
      <div className=" flex gap-4 items-center h-[80vh] my-8 shadow-2xl p-5">
        <div className=" w-[50%]">
          <h1 className=" text-[45px] font-[600] text-orange-500">
            Destinations
          </h1>
          <p className=" font-[500]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsam
            qui quos laudantium quas id beatae, non pariatur nemo, tempora
            deserunt ducimus. Distinctio sequi dolor non fuga tenetur commodi
            sint.
          </p>
          <button className=" flex gap-3 items-center px-[10px] py-[5px] rounded-[10px] border-orange-500 border-[2px] my-4 hover:border-orange-400 active:scale-95">
            View All Tour Packages <AiOutlineArrowRight />
          </button>
        </div>
        <div className=" w-[50%] flex items-center justify-center">
          <img className=" w-[300px] h-[300px]" src={fon} alt="" />
        </div>
      </div>
      <div className=" py-[30px]">
        <h1>All destinations</h1>
        <div className=" grid grid-cols-3 gap-4 text-white">
          {data[0]?.map((item) => {
            console.log(item);

            return (
              <div
                key={item.id}
                className=" flex gap-4 flex-col relative font-bold p-6 border-[2px] rounded-[10px] group overflow-hidden"
              >
                <img
                  className=" w-[400px] h-[200px] scale-[2] object-contain group-hover:scale-[1.2] py-[10px]"
                  src={item.image}
                  alt=""
                />
                <div className=" absolute bottom-0 bg-black right-0 left-0 opacity-45">
                  <h2>{item.name}</h2>
                  <h2>{item.place}</h2>
                  <h2>{item.price}$</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Destination;
