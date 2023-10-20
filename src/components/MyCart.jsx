import { useLoaderData } from "react-router-dom";
import DisplayCart from "./DisplayCart";

const MyCart = () => {
  const cartData = useLoaderData();
  console.log(cartData);
  return (
    <div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
      {
        cartData.map(cart => <DisplayCart key={cart._id} cart={cart}></DisplayCart>)
      }
    </div>
  );
};

export default MyCart;
