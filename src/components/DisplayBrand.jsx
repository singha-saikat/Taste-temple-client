// import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";

const DisplayBrand = () => {
  const[loadedData,setLoadedData] =useState([]);
  useEffect (() =>{
  const load = async() => {
    
    const data = await fetch ("http://localhost:4000/brands")
    
    const storeData = await data.json();
    setLoadedData(storeData)
    
    }
    load();
    
  })

  
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl text-center text-bold mt-4 mb-4">
        Our <span className="text-indigo-500 text-5xl">Partners</span>
      </h1>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {
            loadedData.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
        }
     </div>
    </div>
  );
};

export default DisplayBrand;
