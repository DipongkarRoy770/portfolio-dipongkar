import { Helmet } from "react-helmet";
import{ useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    toast("Email delivery confirmation");

    emailjs.sendForm('service_qg57uol', 'template_7cnx9ao', form.current, 'p4w8ki9FUls3GHJEo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
      <Helmet>
        <title>dipongkar | Contact</title>
      </Helmet>
      <div className="mt-12">
        <h1 className="text-center text-3xl text-emerald-50 mt-2">
          <span className="bg-gradient-to-r from-indigo-500">Contact me</span>
        </h1>
        <div className=" md:flex mt-10">
          <div className="w-full md:w-1/2 px-3">
            <h1 className="text-5xl font-mono text-white  mt-2 font-bold">
              ABOUT ME
            </h1>
            <p className="py-6 text-emerald-50 text-1xl">
              Event definition is - somthing that happens occurre How evesnt
              sentence. Synonym when an unknown printer took a galley. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              corporis?
            </p>
            <h3 className="text-emerald-50 text-3xl">OFFICE IN RANGPUR</h3>

            <div className="mt-4 text-emerald-50 text-1xl">
              <h2> Email: dipongkarroy233@@gmail.com</h2>
              <h2> Address: Nillphamar,Rangpur</h2>
              <h2> Phone: +8801770-568738</h2>
            </div>
          </div>
          <div className=" w-full mt-12 md:w-1/2 px-3 lg:px-5">
            <form  ref={form} onSubmit={sendEmail}>
              <input
                className=" md:w-96 h-12 text-white bg-black text-xl border-emerald-200 rounded border-2"
                type="text"
                name="user_name"
                id=""
                placeholder=" name"
                required
              />
              <input
                className=" md:w-96 h-12 text-white bg-black text-xl mt-3 rounded  border-emerald-200 border-2"
                type="email"
                name="user_email"
                id=""
                placeholder=" your gmail"
                required
              />
              <textarea
                className=" text-white bg-black text-xl px-3 mt-3 rounded border-emerald-200 border-2"
                name="message"
                id=""
                cols="30"
                rows="5"
                placeholder="your comment write now....."
              ></textarea> <br />
              <input
                className="border-amber-200 border-2 px-6 py-3 rounded mt-6 text-emerald-50 text-xl hover:bg-black duration-200"
                type="submit"
                value="Send Now"
              />
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
