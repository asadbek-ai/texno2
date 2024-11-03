import React from "react";
import Container from "../components/Container";
import sovetskiy from "../Images/FonKar.jpg";

const Home = () => {
  return (
    <div>
      <Container>
        <div className=" absolute top-0 bottom-0 right-0 left-0 z-[-1] bg-white opacity-20"></div>
        <img
          className=" absolute lg:scale-[1.5] md:scale-[1] top-[-50px]  right-[5%] z-[-2] max-w-[80%]"
          src={sovetskiy}
          alt=""
        />
        <div className="flex h-[100vh] flex-col gap-6 py-8">
          <h1 className=" lg:text-[45px] font-bold md:text-[35px] sm:text-[30px] sm:w-[60%] lg:w-[40%] text-orange-600 ">
            Let’s Create Memorable Journey
          </h1>
          <p className=" lg:text-[20px] font-[400] md:text-[15px] sm:text-[12px] w-[40%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            numquam nobis culpa quod sed eaque veniam laborum debitis
            accusantium distinctio.
          </p>
          <div className=" flex gap-5">
            <div className=" flex  gap-1 flex-col w-[10%]">
              <p className=" font-bold text-[20px]">Location </p>

              <select className=" font-medium flex items-center bg-transparent lg:text-[20px] md:text-[15px] sm:text-[10px] ">
                <option
                  className=" text-[8px] font-normal md:text-[10px] lg:text-[12px]"
                  value="Nukus"
                >
                  Nukus
                </option>
                <option
                  className=" text-[8px] font-normal md:text-[10px] lg:text-[12px]"
                  value="Khongirat"
                >
                  Khongirat
                </option>
                <option
                  className=" text-[8px] font-normal md:text-[10px] lg:text-[12px]"
                  value="Moynak"
                >
                  Moynak
                </option>
                <option
                  className=" text-[8px] font-normal md:text-[10px] lg:text-[12px]"
                  value="Tortkul"
                >
                  Tortkul
                </option>
              </select>
            </div>
            <div className=" flex  gap-1 flex-col w-[10%]">
              <p className=" font-bold text-[20px]">Date </p>

              <input
                className=" bg-transparent text-black placeholder:text-black  lg:text-[20px] md:text-[15px] sm:text-[10px]"
                type="date"
              />
            </div>
            <div className=" flex  gap-1 flex-col w-[10%]">
              <p className=" font-bold text-[20px]">Price </p>
              <input
                placeholder="Price"
                className="  bg-transparent text-black placeholder:text-gray outline-double rounded-sm"
                type="number"
                name=""
                id=""
              />
            </div>
          </div>
          <div>Famous Dictation</div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
