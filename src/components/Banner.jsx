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
    <div className="h-[80vh] bg-hero  ">
      <div className="flex flex-col md:flex-row items-center justify-center pt-12 ">
        <div className="flex-1 px-2">
          <h1 className="text-3xl md:text-5xl text-center mb-2 text-blue-500 ">
            Food Made With Love
          </h1>
          <p className="text-center">
            Your passport to culinary excellence! Our Food and Beverage app
            brings you the finest offerings from renowned brands like McDonald,
            Starbucks, PepsiCo, and others.
          </p>
        </div>
        <div className="flex-1 p-0 md:p-28 ">
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
