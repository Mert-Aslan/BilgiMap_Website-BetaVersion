import Body from "../components/Body";
import Footer from "../components/Footer";
import LogoSection from "../components/LogoSection";
import Navbar from "../components/Navbar";
import BuildingInfo from "../components/popup-pages/BuildingInfo";
import FoodDrinks from "../components/popup-pages/FoodDrinks";

export default function Home_BuildingInfo(){

    return(
        <div>
            <Navbar />
            <FoodDrinks />
            <Body />
            <LogoSection />
            <Footer />
        </div>
    )
}