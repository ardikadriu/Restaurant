import Image from "next/image";
import Grass from "@/public/grass.png";
import Flower from "@/public/tre.png";

const Title = () => {
  return (
    <div className="flex justify-center mt-[92px] items-center  ">
      <div className="">
        <h1 className="font-abc text-[60px] font-bolt ">Our Special Dishes</h1>
        <p className="max-w-[376px] text-[#5C6574] text-[16px] ml-[34px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt{" "}
        </p>
      </div>
      <div className="opacity-20 flex w-[846px] justify-between absolute z-0">
        <Image src={Flower} width={224.195} height={212.697} alt="grass" />
        <Image src={Grass} width={180.596} height={257.388} alt="grass" />
      </div>
    </div>
  );
};

export default Title;
