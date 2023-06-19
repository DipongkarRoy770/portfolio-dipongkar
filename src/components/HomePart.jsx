const HomePart = () => {
  return (
    <>
      <div className="hero md:h-[700px] lg:h-[580px]">
        <div className="hero-content w-full flex-col md:flex-row-reverse">
          <iframe
            className="w-full px-2 md:w-1/2 h-72 md:h-96"
            src="https://embed.lottiefiles.com/animation/97639"
          ></iframe>

          <div className="w-full md:w-1/2 md:px-5">
            <h1 className="text-5xl font-semibold text-emerald-50">
              <span className="bg-gradient-to-r from-indigo-500">Hello!</span> I
              am
            </h1>
            <h1 className="text-5xl font-mono text-orange-400 mt-3">
              Dipongkar Roy
            </h1>
            <h2 className="py-6 text-emerald-50 text-3xl">
              I am <span className="text-orange-200">Fronted Developer</span> 
            </h2>
            
            <button
              type="button"
              className="border-amber-200 border-2 hover:border-rose-500 px-6 py-3 rounded text-emerald-50 text-xl hover:bg-orange-400 duration-400"
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
