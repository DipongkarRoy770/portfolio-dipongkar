import { TypeAnimation } from "react-type-animation";

const Animation = () => {
  return (
    <TypeAnimation className="py-6 text-orange-200 font-semibold text-3xl"
      sequence={[

        "I am a Web Designer",
        1000,
        "I am a Front-End Developer",
        1000,
        "I am a MERN Stack Developer",
        1000,
      ]}
      speed={20}
      style={{ fontSize: "2em" }}
      repeat={Infinity}
    />
  );
};

export default Animation;
