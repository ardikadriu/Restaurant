import Image from "next/image";
import backgroundImage from "@/public/fooddish.png";
import Leafleft from "@/public/leaf-1.png";
import Leafbottom from "@/public/leaf-2.png";
import Leaftopright from "@/public/leaf-3.png";
import Leafbottomright from "@/public/leaf-4.png";

const Welcomeimage = () => {
  return (
    <div>
      <div className="flex justify-center ">
        <div
          style={{
            backgroundImage: `url(${backgroundImage.src})`,
            width: "719px",
            height: "667px",

            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "relative",
          }}
        >
          <Image
            className="absolute top-[201px]"
            src={Leafleft}
            width={91}
            height={189}
            alt="left"
          />
          <Image
            className="absolute bottom-0 left-16"
            src={Leafbottom}
            width={209}
            height={133}
            alt="left"
          />
          <Image
            className="absolute right-[-60px] top-28"
            src={Leaftopright}
            width={194}
            height={129}
            alt="left"
          />
          <Image
            className="  absolute bottom-10  right-[250px]"
            src={Leafbottomright}
            width={96}
            height={178}
            alt="left"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcomeimage;
