import Image from "next/image";
import Firstdish from "@/public/dish1.png";
import Seconddish from "@/public/dish2.png";
import Thirddish from "@/public/dish3.png";
import Fourthdish from "@/public/dish4.png";
import Onione from "@/public/PieceOnion.png";
import Fullonion from "@/public/FullOnion.png";
import garlic from "@/public/Garlic.png";

const Dishes = () => {
  return (
    <div className="flex flex-col">
      <div className="flex mt-[200px]  ">
        <div className="mr-[30px] w-[265px] relative top-[-59] border-2 border-white  rounded-ss-[50px] rounded-br-[50px] flex hover:bg-white  flex-col items-center justify-center ">
          <Image
            className="absolute top-[-105px]"
            src={Firstdish}
            width={207}
            height={207}
            alt="Lummpia"
          />
          <h1 className="mt-[103.5px] text-[#101A24] text-[20px] mb-[21px]  font-bold text-center">
            Lumpia with Suace
          </h1>
          <h2 className="max-w-[225px] text-center leading-[26px] text-[15px] ">
            Lorem ipsum dolor sit ,<br /> consectetur adipiscing elit, sed do
            eiusmod tempor{" "}
          </h2>
          <Image
            className="absolute right-[-60px] bottom-[-50px] z-0 "
            src={Onione}
            width={99}
            height={102}
            alt="onion"
          />
        </div>

        <div
          className="mr-[30px] w-[265px] relative top-[-59] border-2 border-white hover:bg-white  rounded-ss-[25px] rounded-br-[25px] flex flex-col 
        pb-[51px] items-center justify-center"
        >
          <Image
            className="absolute top-[-105px]"
            src={Seconddish}
            width={207}
            height={207}
            alt="Lummpia"
          />

          <h1 className="mt-[103.5px] text-[#101A24] text-[20px] mb-[21px]  font-bold text-center">
            Fish and Veggie
          </h1>
          <h2 className="max-w-[225px] text-center leading-[26px] text-[15px] ">
            Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod
            tempor{" "}
          </h2>
        </div>
        <div className="mr-[30px] w-[265px] relative top-[-59] border-2 border-white hover:bg-white   rounded-ss-[25px] rounded-br-[25px] flex flex-col items-center justify-center">
          <Image
            className="absolute top-[-105px]"
            src={Thirddish}
            width={207}
            height={207}
            alt="Lummpia"
          />
          <h1 className="mt-[103.5px] text-[#101A24] text-[20px] mb-[21px]  font-bold text-center">
            Tofu Chili
          </h1>
          <h2 className="max-w-[225px] text-center leading-[26px] text-[15px] ">
            Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod
            tempor{" "}
          </h2>
        </div>
        <div className="w-[265px]    relative top-[-59] border-2 border-white hover:bg-white   rounded-ss-[25px] rounded-br-[25px] flex flex-col items-center justify-center">
          <Image
            className="absolute top-[-105px]"
            src={Fourthdish}
            width={207}
            height={207}
            alt="Lummpia"
          />
          <h1 className="mt-[103.5px] text-[#101A24] text-[20px] mb-[21px]  font-bold text-center">
            Egg and Cocumber
          </h1>
          <h2 className="max-w-[225px] text-center leading-[26px] text-[15px] ">
            Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod
            tempor{" "}
          </h2>
          <div className="flex absolute bottom-[-80px] right-[-50px]">
            <Image
              className="mr-[28px] rotate-[16deg]"
              src={garlic}
              width={90}
              height={81}
              alt="garlic"
            />
            <Image src={Fullonion} width={118} height={124} alt="fullOnion" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dishes;
