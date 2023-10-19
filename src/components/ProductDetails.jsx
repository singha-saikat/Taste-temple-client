import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const productData = useLoaderData();
  console.log("new", productData);
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl max-w-7xl mx-auto mt-2">
        <figure>
          <img
            src={productData.image}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{productData.description}</h2>
          
          <div className="card-actions justify-center mt-4">
            <button  className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
