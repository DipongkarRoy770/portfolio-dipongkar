const ServiceCart = ({ cart }) => {
  const { img, title, description } = cart;

  return (
    <div className="card-compact w-80 md:w-96 h-96 bg-base-100 scale-95 duration-700 hover:scale-100 hover:bg-base-300">
      <figure>
        <img className="w-full h-56 scale-90 border-2 border-red-200 duration-700 hover:scale-100" src={img} alt="picture" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCart;
