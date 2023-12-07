import Image from "next/image";
import tree from "@/public/tre.png";
import Flower from "@/public/Flower.png";
import Circle from "@/public/Circletitle.png";

const Foodcircle = () => {
  return (
    <div className=" mt-[82px] flex justify-center ">
      <div className="flex justify-between w-[1154px] h-full">
        <div>
          <Image src={Circle} width={104} height={104} alt="circle" />
        </div>

        <div className="flex opacity-20 absolute right-0 ">
          <Image
            className="mr-[44px] flex-shrink-0"
            src={Flower}
            width={448}
            height={191}
            alt="alr"
          />

          <Image
            className="mr-[61px]"
            src={tree}
            width={315}
            height={299}
            alt="fix"
          />
        </div>
      </div>
    </div>
  );
};

export default Foodcircle;
