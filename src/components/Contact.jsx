const Contact = () => {
  return (
    <div className="mt-12">
      <h1 className="text-center text-3xl text-emerald-50 mt-2">
        <span className="bg-gradient-to-r from-indigo-500">About me</span>
      </h1>
      <div className=" md:flex mt-10">
        <div className="w-full md:w-1/2 px-12">
          <h1 className="text-5xl font-mono text-white  mt-2 font-bold">
            ABOUT ME
          </h1>
          <p className="py-6 text-emerald-50 text-1xl">
            Event definition is - somthing that happens occurre How evesnt
            sentence. Synonym when an unknown printer took a galley. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Tempora, corporis?
          </p>
          <h3 className="text-emerald-50 text-3xl">OFFICE IN RANGPUR</h3>

          <div className="mt-4 text-emerald-50 text-1xl">
            <h2> Email: dipongkarroy233@@gmail.com</h2>
            <h2> Address: Nillphamar,Rangpur</h2>
            <h2> Phone: +8801770-568738</h2>
          </div>
        </div>
        <div className=" w-full mt-12 md:w-1/2 px-12">
          <form>
            <input
              className="w-full h-12 text-white bg-black text-xl border-emerald-200 rounded border-2"
              type="text"
              name=""
              id=""
              placeholder=" name"
              required
            />
            <input
              className="w-full h-12 text-white bg-black text-xl mt-3 rounded  border-emerald-200 border-2"
              type="email"
              name=""
              id=""
              placeholder=" your gmail"
              required
            />
            <textarea
              className=" text-white bg-black text-xl px-3 mt-3 rounded border-emerald-200 border-2"
              name=""
              id=""
              cols="50"
              rows="5"
              placeholder="your comment write now....."
            ></textarea>
            <input
              className="border-amber-200 border-2 px-6 py-3 rounded mt-6 text-emerald-50 text-xl hover:bg-red-400 duration-200"
              type="submit"
              value="Send Now"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
