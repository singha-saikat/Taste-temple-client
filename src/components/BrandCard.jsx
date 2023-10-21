import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BrandCard = ({ brand }) => {
  return (
    
      <div className="card h-96 shadow-xl bg-blue-300">
        <div className="card-body">
          <Link to={`/brand/${brand.name}`}><h2 className="text-center text-4xl ">{brand.name}</h2></Link>
          
        </div>
        <figure>
          <img className="w-full"
            src={brand.brandImage}
            alt="Brand"
          />
        </figure>
      </div>
    
  );
};

export default BrandCard;
