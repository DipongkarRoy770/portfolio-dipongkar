const HomePart = () => {
  return (
    <>
      <div className="hero md:h-[550px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <iframe
            className="w-1/2 w-full h-72 md:h-96"
            src="https://embed.lottiefiles.com/animation/97639"
          ></iframe>

          <div className="w-1/2 px-6 w-full md:pl-12">
            <h1 className="text-5xl font-semibold text-emerald-50">
              <span className="bg-gradient-to-r from-indigo-500">Hello!</span> I
              am
            </h1>
            <h1 className="text-5xl font-mono text-orange-400 mt-3">
              Dipongkar Roy
            </h1>
            <p className="py-6 text-emerald-50">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button
              type="button"
              className="bg-orange-500 bg-opacity-75 px-6 py-3 rounded text-emerald-50 text-xl hover:bg-red-400 duration-200"
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
