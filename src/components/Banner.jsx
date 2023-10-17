import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import image1 from "../assets/front-view-burger-stand.jpg";
import image2 from "../assets/icecoffee.jpg";
import image3 from "../assets/2150873874.jpg";
import image4 from "../assets/34270.jpg";
const AutoplaySlider = withAutoplay(AwesomeSlider);
const Banner = () => {
  return (
    <div className="h-[80vh] bg-hero ">
      {/* <img src={heroPattern} alt="" /> */}
      <div className="flex items-center justify-center pt-12 ">
        <div className="flex-1">
          <h1 className="text-5xl text-center">Food Made With Love</h1>
          <p>
            Your passport to culinary excellence! Our Food and Beverage app
            brings you the finest offerings from renowned brands like Coca-Cola,
            McDonald, Starbucks, PepsiCo, and others. Enjoy a world of flavors
            at your fingertips  order, savor, and indulge in the best food and
            beverages, all through our convenient and user-friendly app.
          </p>
        </div>
        <div className="flex-1 p-8 ">
          <AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={6000}
          >
            
              <div data-src={image1} />
              <div data-src={image2} />
              <div data-src={image3} />
              <div data-src={image4} />
            
          </AutoplaySlider>
        </div>
      </div>
    </div>
  );
};

export default Banner;
