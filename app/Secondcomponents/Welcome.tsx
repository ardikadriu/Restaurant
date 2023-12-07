import Welcomeimage from "./Welcomeimage";
import Image from "next/image";
import tre from "@/public/tre.png";
import Flowers from "@/public/flowes.png";

const Welcome = () => {
  return (
    <div className="mt-[156px] flex   items-center ">
      <div className="relative">
        <Image
          className="opacity-20 absolute right-[-69px] top-[-100px]"
          src={Flowers}
          width={275}
          height={148}
          alt="grass"
        />
        <Welcomeimage />
      </div>
      <div className=" ml-[40px] ">
        <div className="relative">
          <Image
            className="opacity-20 absolute top-[-120px]"
            src={tre}
            width={224}
            height={212}
            alt="grass"
          />
          <div className="ml-[45px]">
            <h1 className="text-[60px] font-abc text-[#101A24] leading-[65px] font-bold max-w-[520px] ">
              Wecome to Our Restaurant
            </h1>
            <p className="text-[#5C6574] mt-[30px] leading-[29px] max-w-[376px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex mt-[37px]">
              <button className="bg-[#101A24] w-[120px] h-[54px] rounded-ss-[15px] rounded-br-[15px] mr-[25px] text-white">
                Menu
              </button>
              <button className="w-[167px] h-[54px] flex-shrink-0 bg-[#EA6D27] rounded-ss-[15px] rounded-br-[15px] font-abc  ">
                <h1 className="text-white">Book a table </h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
