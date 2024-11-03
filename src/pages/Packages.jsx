import { AiOutlineArrowRight } from "react-icons/ai";
import fon from "../Images/Sovetskiy.jpg";
import Container from "../components/Container";
import { data } from "../API/request";

const Packages = () => {
  return (
    <Container>
      <div className=" relative flex gap-4 items-center h-[80vh] my-8 shadow-2xl p-[40px] overflow-hidden ">
        <div className=" w-[50%]">
          <h1 className=" text-[45px] font-[600] text-orange-500">
            Tour Packages
          </h1>
          <p className=" font-[500] w-[70%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsam
            qui quos laudantium quas id beatae, non pariatur nemo, tempora
            deserunt ducimus. Distinctio sequi dolor non fuga tenetur commodi
            sint.
          </p>
          <button className=" flex gap-3 items-center px-[10px] py-[5px] rounded-[10px] border-orange-500 border-[2px] my-4 hover:border-orange-400 active:scale-95">
            Book now <AiOutlineArrowRight />
          </button>
        </div>
        <div className=" w-[50%] flex items-center justify-center overflow-hidden  rounded-md">
          <img
            className=" max-h-full object-contain scale-[1.2]"
            src={fon}
            alt=""
          />
        </div>
      </div>
      <div>
        <h1 className=" text-center text-[40px] font-bold my-[30px]">
          All Tour Packages
        </h1>
        <div className=" grid gap-2 p-2">
          {data[1]?.map((item) => {
            return (
              <div key={item.id} className=" border-t-[2px] p-5 flex gap-2">
                <img
                  className=" w-[30%] max-h-full rounded-[10px]"
                  src={item.image}
                  alt=""
                />
                <div className=" w-[70%] ">
                  <h2 className=" text-[35px] font-semibold">{item.name}</h2>
                  <h3 className=" font-[500] text-[20px] my-5">{item.about}</h3>
                  <div className=" text-end text-[18px] font-[500]">
                    Per person:{" "}
                    <span className=" text-orange-500">{item.price}$</span>
                  </div>
                  <div className=" flex items-end justify-end">
                    <button className=" flex gap-3 items-end px-[10px] py-[5px] rounded-[10px] border-orange-500 border-[2px] my-4 hover:border-orange-400 active:scale-95">
                      <a target="_blank" href={item.url}>
                        Vikipediya
                      </a>{" "}
                      <AiOutlineArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Packages;
