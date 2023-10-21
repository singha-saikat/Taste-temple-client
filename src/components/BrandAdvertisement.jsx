/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";
import BrandProducts from "./BrandProducts";


const BrandAdvertisement = () => {
  const brandData = useLoaderData();
  console.log("new", brandData);
  
  return (
    <div>
      {brandData ? (
        brandData.length > 0 ? (
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
            {brandData.map((brand) => (
              <BrandProducts key={brand._id} brand={brand}></BrandProducts>
            ))}
          </div>
        ) : (
          <div className="card w-96 bg-primary text-primary-content mx-auto mt-12">
            <div className="card-body">
              <h2 className="">
                On this occasion, we regret to inform you that the product from
                <span className="text-red-300 text-xl"> PepsiCo </span> is
                presently out of stock. We apologize for any inconvenience this
                may cause. Please explore our other offerings or check back
                later for availability.
              </h2>
            </div>
          </div>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BrandAdvertisement;
