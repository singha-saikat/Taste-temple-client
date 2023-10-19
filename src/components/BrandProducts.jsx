/* eslint-disable react/prop-types */
const BrandProducts = ({ brand }) => {
  return (
    <div>
      <div className="card w-full h-[500px] bg-base-100 shadow-xl">
        <figure>
          <img
            src={brand.image}
            alt="Shoes"
          />
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
            <div className="badge badge-outline"><button>Details</button></div>
            <div className="badge badge-outline"><button>Update</button></div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandProducts;
