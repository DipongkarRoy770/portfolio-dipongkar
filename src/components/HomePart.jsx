import Animation from "./Animation";

const HomePart = () => {
  const resume = () => {
    window.location.href =
      "https://docs.google.com/document/d/1vrJuAedsnq8RcO2NW5BWMiVhccEkOgJZEp3xgSh8JI0";
  };
  return (
    <>
      <div className="hero md:h-[700px] lg:h-[580px] mt-32 md:mt-16">
        <div className="hero-content w-full flex-col md:flex-row-reverse">
          <iframe
            className="w-full px-2 md:w-1/2 h-72 md:h-96 scale-95 duration-200 hover:scale-110"
            src="https://embed.lottiefiles.com/animation/97639"
          ></iframe>

          <div className="w-full md:w-1/2 md:px-5">
            <h1 className="text-5xl font-bold text-emerald-50">
              <span className="bg-gradient-to-r from-indigo-500">Hello!</span> I
              am
            </h1>
            <h1 className="text-5xl mb-5 font-semibold text-orange-400 mt-3">
              Dipongkar Roy
            </h1>
            {/* <h2 className="py-6 text-emerald-50 text-3xl">
              I am <span className="text-orange-200">Fronted Developer</span>
            </h2> */}
            <Animation></Animation> <br />
            <button
              type="button"
              onClick={resume}
              className="border-amber-200 border-2 mt-6 hover:border-rose-500 px-6 py-3 rounded text-emerald-50 text-xl"
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePart;
