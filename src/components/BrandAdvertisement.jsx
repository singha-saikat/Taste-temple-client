/* eslint-disable react/prop-types */
import { useLoaderData, useParams } from "react-router-dom";
import BrandProducts from "./BrandProducts";
import { useEffect, useState } from "react";

const BrandAdvertisement = () => {
  const brandData = useLoaderData();
  const [data, setData] = useState([]);
  const params = useParams();
  console.log("new", brandData);
  useEffect(() => {
    if (params.brandName) {
      fetch(
        `http://localhost:4000/${params.brandName}/brandImage?brand=${params.brandName}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
        })
        .catch((error) => {
          console.error('An error occurred while fetching data', error);
        });
    }
  }, [params.brandName]);
  console.log(data);
  
  

  return (
    <div>
      <div>
        <div className="carousel w-full h-[60vh]  mt-4">
          <div id="item1" className="carousel-item w-full ">
            <img
              src={data[0]?.images[0]}
              className="w-full"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src={data[0]?.images[1]}
              className="w-full"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
             src={data[0]?.images[2]}
              className="w-full"
            />
          </div>
          
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          
        </div>
      </div>
      {/* <p>{data.length}</p>
      <p>{data[0].brand_name}</p> */}
      

      
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
