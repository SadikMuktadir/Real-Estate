const Card = ({ data }) => {
  const { image, description, price, location } = data;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl h-[500px]">
        <figure>
          <img src={image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{description}</h2>
          <p>{price}</p>
          <p>{location}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
