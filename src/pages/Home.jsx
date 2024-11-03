import React from "react";
import Container from "../components/Container";
import sovetskiy from "../Images/FonKar.jpg";

const Home = () => {
  return (
    <div>
      <Container>
        <div className=" absolute top-0 bottom-0 right-0 left-0 z-[-1] bg-white opacity-20"></div>
        <img
          className=" absolute scale-[1.2] top-[-50%] right-[5%] z-[-2] w-[80%]"
          src={sovetskiy}
          alt=""
        />
        <div className="flex h-[100vh] flex-col gap-6 py-8">
          <h1 className=" text-[45px] font-bold w-[40%]">
            Let’s Create Memorable Journey
          </h1>
          <p className=" text-[20px] font-[400] w-[40%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            numquam nobis culpa quod sed eaque veniam laborum debitis
            accusantium distinctio.
          </p>
          <div className=" flex gap-5">
            <div className=" flex  gap-1 flex-col w-[10%]">
              <p className=" font-bold text-[20px]">Location </p>

              <select className=" font-medium flex items-center ">
                <option value="Nukus">Nukus</option>
                <option value="Khongirat">Khongirat</option>
                <option value="Moynak">Moynak</option>
                <option value="Tortkul">Tortkul</option>
              </select>
            </div>
            <div className=" flex  gap-1 flex-col w-[10%]">
              <p className=" font-bold text-[20px]">Date </p>

              <input
                className=" bg-transparent text-black placeholder:text-black"
                type="date"
              />
            </div>
            <div className=" flex  gap-1 flex-col w-[10%]">
              <p className=" font-bold text-[20px]">Price </p>
              <input
                placeholder="Price"
                className="  bg-transparent text-black placeholder:text-black"
                type="number"
                name=""
                id=""
              />
            </div>
          </div>
          <div>Famous Dictation</div>
          <div>Our Popular Dictations</div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
