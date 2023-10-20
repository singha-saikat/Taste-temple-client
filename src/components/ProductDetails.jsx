import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const productData = useLoaderData();
  console.log("new", productData);
  const [cartProducts, setCartProducts] = useState([]);

  const handleAddToCart = () => {
    // Use the find method to check if the product exists in the local state
    const existingProduct = cartProducts.find(product => product._id === productData._id);

    if (existingProduct) {
        // Display toast for existing product
        toast.warn('🔔 Product already added to cart!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        return;  // exit the function early
    }

    // If product doesn't exist in local state, add to database
    fetch('http://localhost:4000/cartData', {
        method: "POST",
        headers: {
            'content-Type': 'application/json'
        },
        body: JSON.stringify({productData})
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.insertedId) {
            // Update local state with new product
            setCartProducts( [...cartProducts, productData]);

            // Display success toast
            toast.success('🦄 Product added to MyCart successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    });
}

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
            <button onClick={handleAddToCart} className="btn btn-primary">Add to Cart</button>
          </div>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
