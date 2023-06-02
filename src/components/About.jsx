import portfolio from "../assets/dipongkar Roy portfolio.jpg";

const About = () => {
  return (
    <>
      <div className="hero md:h-[980px] lg:h-[650px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-1/2 px-6 w-full md:pl-10">
            <h1 className="text-2xl text-emerald-50">
              <span className="bg-gradient-to-r from-indigo-500">
                INTRODUCTION
              </span>
            </h1>
            <h1 className="text-5xl font-mono text-white  mt-2 font-bold">
              ABOUT ME
            </h1>
            <p className="py-6 text-emerald-50 text-1xl">
              I am Dipongkar Roy Passionate about web development.I recently
              finished the Programming hero web developments course. Building
              state-of-the-art, easy-to-use, user-friendly websites and
              applications are truly a passion of mine. In addition to my
              knowledge base, I actively seek out new technologies and stay
              up-to-date on industry trends and advancements. This has allowed
              me to stay ahead of the curve and deliver exceptional work to all
              of my employers.
            </p>
            <h1 className="text-2xl text-emerald-50 mt-2">
              <span className="bg-gradient-to-r from-indigo-500">SKILLS</span>
            </h1>
            <hr className="border-2 border-y-pink-200 my-2" />
            <p className="text-emerald-50 text-1xl">
              HTML4/5, CSS, JavaScript, ES6, React.Js, Express.Js,Firebase,
              MongoDB Basic, Material UI, Bootstrap, Tailwind CSS,React Awesome.
            </p>
            <h1 className="text-2xl text-emerald-50 mt-4">
              <span className="bg-gradient-to-r from-indigo-500">TOOlS</span>
            </h1>
            <hr className="border-2 border-y-pink-200 my-2" />
            <p className="text-emerald-50 text-1xl">
              Git, GitHub, Firebase, VS Code, Android Studio, Chrome Dev-Tools
            </p>
            <h1 className="text-2xl text-emerald-50 mt-4">
              <span className="bg-gradient-to-r from-indigo-500">
                COURSES & TRAININGS
              </span>
            </h1>
            <hr className="border-2 border-y-pink-200 my-2" />
            <p className="text-emerald-50 text-1xl">
              Complete Web Development Course with Jhankar Mahbub.
            </p>
          </div>
          {/* todu image work */}
          <img className="w-1/2 w-full h-70 mt-28 md:h-96" src={portfolio}></img>
        </div>
      </div>
    </>
  );
};

export default About;
