import Dishes from "../Secondcomponents/Dishes";
import Title from "../Secondcomponents/Title";
import Welcome from "../Secondcomponents/Welcome";

const Secondsection = () => {
  return (
    <div className="w-full bg-[#F3F4F4] flex flex-col items-center">
      <Title />
      <Dishes />
      <Welcome />
    </div>
  );
};

export default Secondsection;
