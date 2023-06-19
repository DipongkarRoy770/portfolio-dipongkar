const ServiceCart = ({ cart }) => {
  const { img, title, description } = cart;

  return (
    <div className="card-compact w-80 md:w-96 h-96 bg-base-100 shadow-xl hover:bg-rose-100 duration-200">
      <figure>
        <img className="w-full h-56" src={img} alt="picture" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCart;
