import Body from "../components/Body";
import Footer from "../components/Footer";
import LogoSection from "../components/LogoSection";
import Navbar from "../components/Navbar";
import BuildingInfo from "../components/popup-pages/BuildingInfo";
import StudyPlaces from "../components/popup-pages/StudyPlaces";

export default function Home_BuildingInfo(){

    return(
        <div>
            <Navbar />
            <StudyPlaces />
            <Body />
            <LogoSection />
            <Footer />
        </div>
    )
}