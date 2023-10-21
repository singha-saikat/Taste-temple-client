import Banner from "./Banner";
import WhyWe from "./WhyWe";
import DisplayBrand from "./DisplayBrand";
import Footer from "./Footer";
import Gallery from "./Gallery";


const Home = () => {
    return (
        <div>
            <Banner/>
            <DisplayBrand></DisplayBrand>
            <WhyWe></WhyWe>
            <Gallery></Gallery>
            <Footer></Footer>
        </div>
    );
};

export default Home;