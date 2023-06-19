import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import ServiceCart from "./ServiceCart";

const Service = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("web.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="mt-12">
      <Helmet>
        <title>dipongkar |service</title>
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl text-white font-light">My Services</h1>
        <p className="text-emerald-50 mt-4">-~- Which services I provied -~-</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-7 md:px-2 mt-12">
        {service.map((cart) => (
          <ServiceCart key={cart.id} cart={cart}></ServiceCart>
        ))}
      </div>
    </div>
  );
};

export default Service;
