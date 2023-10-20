/* eslint-disable react/prop-types */
const DisplayCart = ({ cart }) => {
  return (
    <div>
      <div className="card card-compact h-96 bg-base-100 shadow-xl">
        <figure>
          <img src={cart.productData.image} alt="cartData" />
        </figure>
        <div className="card-body">
          <h2 className=" bg-gray-200 p-2 text-center text-3xl text-slate-900">{cart.productData.brand}</h2>
          <h2 className="card-title">{cart.productData.name}</h2>
         
        </div>
      </div>
    </div>
  );
};

export default DisplayCart;
