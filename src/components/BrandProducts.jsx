import { Link, useLoaderData } from "react-router-dom";

/* eslint-disable react/prop-types */
const BrandProducts = ({ brand }) => {
  const imagedata = useLoaderData();
  console.log(imagedata);
  
  return (
    <div>
      <div className="card w-full h-[500px] bg-base-100 shadow-xl">
        
        <figure>
          <img src={brand.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {brand.name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p> Type : {brand.type}</p>
          <p>Price : {brand.price}</p>
          <p>Ratting : {brand.rating}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">
              <Link to={`/productDetails/${brand._id}`}>
                <button>Details</button>
              </Link>
            </div>
            <div className="badge badge-outline">
              <Link to={`/updateDetails/${brand._id}`}>
                <button>Update</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandProducts;
