import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const ProjectCound = () => {
  const [countOn, SetCoundOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => SetCoundOn(true)}
      onExit={() => SetCoundOn(false)}
    >
      <div className="flex flex-2 px-3 md:px-10 mt-12 justify-between mb-6">
        {countOn && (
          <div className="w-28 h-28 mr-2 md:w-48 md:h-48 bg-yellow-100 hover:bg-rose-200 text-orange-500 p-[5%] text-center rounded-full border-2 border-pink-200 duration-200 scale-100 hover:scale-90 hover:border-red-700 ">
            <CountUp
              className="text-4xl font-semibold text-black"
              start={0}
              end={20}
              duration={2.75}
              delay={0}
              // onEnd={() => console.log("Ended! 👏")}
              // onStart={() => console.log("Started! 💨")}
            ></CountUp>
            <h2 className=" md:text-2xl font-semibold -ml-3">projects</h2>
          </div>
        )}
        
        {countOn && (
          <div className="w-28 h-28 mr-2 md:w-48 md:h-48 bg-yellow-100 hover:bg-rose-200 text-orange-500 p-[5%] text-center rounded-full border-2 border-pink-300 duration-200 scale-100 hover:scale-90 hover:border-red-700  ">
            <CountUp
              className="text-4xl font-semibold text-black"
              start={0}
              end={15}
              duration={2.75}
              delay={0}
              // onEnd={() => console.log("Ended! 👏")}
              // onStart={() => console.log("Started! 💨")}
            ></CountUp>
            <h2 className=" md:text-2xl font-semibold -ml-3">customars</h2>
          </div>
        )}
        {countOn && (
          <div className="w-28 h-28 mr-2 md:w-48 md:h-48 bg-yellow-100 hover:bg-rose-200 text-orange-500 p-[5%] text-center rounded-full border-2 border-pink-300 duration-200 scale-100 hover:scale-90 hover:border-red-700  ">
            <CountUp
              className="text-4xl font-semibold text-black"
              start={0}
              end={18}
              duration={2.75}
              delay={0}
              // onEnd={() => console.log("Ended! 👏")}
              // onStart={() => console.log("Started! 💨")}
            ></CountUp>
            <h2 className="md:text-2xl font-semibold">success</h2>
          </div>
        )}
      </div>
    </ScrollTrigger>
  );
};

export default ProjectCound;
