/* eslint-disable react/prop-types */
const BrandCard = ({ brand }) => {
  return (
    
      <div className="card h-96 shadow-xl bg-slate-400">
        <div className="card-body">
          <h2 className="text-center text-4xl font-semibold">{brand.name}</h2>
          
        </div>
        <figure>
          <img className="w-full"
            src={brand.brandImage}
            alt="Shoes"
          />
        </figure>
      </div>
    
  );
};

export default BrandCard;
