import React, { useRef } from "react";
import Container from "../components/Container";
import { AiOutlineArrowRight } from "react-icons/ai";
import { setUserData } from "../API/request";
const url = "http://localhost:3000/users";
const Book = () => {
  const inputName = useRef();
  const inputEmail = useRef();
  const inputNumber = useRef();
  const selectValue = useRef();
  async function sumbitData(e) {
    e.preventDefault();
    const data = {
      name: inputName.current.value,
      email: inputEmail.current.value,
      PhoneNumber: inputNumber.current.value,
      tourName: selectValue.current.value,
    };
    console.log(data);
    setUserData(url, data);
  }
  return (
    <Container>
      <form onSubmit={() => sumbitData(e)} className=" h-[80vh]">
        <h1 className=" text-[45px] font-[600] text-orange-500 py-6 border-b-[2px]">
          Book your favorite trip
        </h1>
        <div className=" flex flex-col gap-[10px]">
          <div className=" flex gap-3">
            <div className=" w-[50%]">
              <h4 className=" text-[17px] font-[400]">You name:</h4>
              <input
                ref={inputName}
                placeholder="Enter your name"
                className="  border-[1px] border-black rounded-md p-1 w-full"
                type="text"
              />
            </div>
            <div className=" w-[50%]">
              <h4 className=" text-[17px] font-[400]">Email:</h4>
              <input
                ref={inputEmail}
                placeholder="Enter your email"
                className="w-full border-[1px] border-black rounded-md p-1"
                type="email"
              />
            </div>
          </div>
          <div className=" w-full">
            <h4 className=" text-[17px] font-[400]">Phone number:</h4>
            <input
              ref={inputNumber}
              placeholder="Enter your name"
              className="  border-[1px] border-black rounded-md p-1 w-full"
              type="number"
            />
          </div>
          <div>
            <h4 className=" text-[17px] font-[400]">Destination:</h4>
            <select
              ref={selectValue}
              className="  border-[1px] border-black rounded-md p-1 w-full"
            >
              <option value="Nukus">Nukus</option>
              <option value="Beruniy">Beruniy</option>
              <option value="Turtkul">Turtkul</option>
              <option value="Khongirat">Khongirat</option>
            </select>
          </div>
        </div>
        <button
          onSubmit={() => sumbitData(e)}
          type="submit"
          className=" flex gap-3 items-center px-[10px] py-[5px] rounded-[10px] border-orange-500 border-[2px] my-4 hover:border-orange-400 active:scale-95 "
        >
          <span>Send</span> <AiOutlineArrowRight />
        </button>
      </form>
    </Container>
  );
};

export default Book;
