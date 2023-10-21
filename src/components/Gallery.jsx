import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from "react";


const Gallery = () => {
    useEffect(() => {
        // Initialize AOS when the component mounts
        AOS.init({ once: false });
      }, []);
  return (
    <div>
      <div className="mt-8">
        <h1 className="text-inherit text-5xl text-center font-roboto mb-4">
          Our Food<span className="text-5xl text-yellow-600">Gallery</span>
        </h1>
        
      </div>
      <div className=" text-white">
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 "
        >
          <img className="w-full " src="https://i.postimg.cc/sXgLcjMw/grilled-beef-hot-dog-with-ketchup-snack-generative-ai.jpg" alt="" />
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 "
        >
          <img className="w-full" src="https://i.postimg.cc/SxnN5J77/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-red-onion-wooden-table-1.jpg" alt="" />
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 "
        >
          <img className="w-full " src="https://i.postimg.cc/tCWHVW5c/coffee-beans-with-props-making-coffee.jpg" alt="" />
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 "
        >
          <img className="w-full" src="https://i.postimg.cc/Jh21QmBY/15170.jpg" alt="" />
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 "
        >
          <img className="w-full" src="https://i.postimg.cc/Dy9Lxk1Z/14043-1.jpg" alt="" />
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 "
        >
          <img className="w-full" src="https://i.postimg.cc/HnHZFcqS/download.jpg" alt="" />
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 "
        >
          <img className="w-full" src="https://i.postimg.cc/HWfF9nv7/coffee-cup-beans-26448276.webp" alt="" />
        </div>
        <div
          data-aos="flip-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="  bg-gray-800  border border-gray-300 row-start-2 row-span-2"
        >
          <img className="w-full" src="https://i.postimg.cc/QdfYBdRP/2150698843.jpg" alt="" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Gallery;
