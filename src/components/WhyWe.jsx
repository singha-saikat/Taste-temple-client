import image from "../assets/momo.jpg";
import image1 from "../assets/delivery.jpg";
import image2 from "../assets/fresh _ood.jpg";
import image3 from "../assets/quality.jpg";
import image4 from "../assets/24:7.jpg";

function WhyWe() {
  return (
    <div className=" max-w-7xl mx-auto bg-white  flex flex-col md:flex-row items-center justify-center gap-4 mt-4 ">
      <div className="flex-1  border-2">
        <img src={image} alt="Delicious Dumplings" className="w-full" />
      </div>
      <div className="flex-1">
        <div className="text-center ">
          <h2 className="text-xl font-semibold mb-2 text-green-500">Why Choose Us</h2>
          <h3 className="text-2xl font-bold mb-4">
            What Makes Our Food Delicious!
          </h3>
          <p className="text-gray-600 mb-4">
            We take pride in offering you a dining experience like no other. Our
            commitment to excellence is what makes us stand out.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 ">
          <div className="flex items-center justify-center rounded-lg p-4 bg-gray-100">
            <img src={image1} alt="Fast Delivery" className="w-8 h-8 mr-4" />
            <p>Fast Delivery</p>
          </div>
          <div className="flex items-center justify-center rounded-lg p-4 bg-gray-100">
            <img src={image2} alt="Fresh Food" className="w-8 h-8 mr-4" />
            <p>Fresh Food</p>
          </div>
          <div className="flex items-center justify-center rounded-lg  p-4 bg-gray-100">
            <img src={image3} alt="Quality Food" className="w-8 h-8 mr-4" />
            <p>Quality Food</p>
          </div>
          <div className="flex items-center justify-center rounded-lg p-4 bg-gray-100">
            <img src={image4} alt="24/7 Support" className="w-8 h-8 mr-4" />
            <p>24/7 Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyWe;
