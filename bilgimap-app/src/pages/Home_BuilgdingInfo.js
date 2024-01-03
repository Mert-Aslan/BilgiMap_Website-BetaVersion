import Body from "../components/Body";
import Footer from "../components/Footer";
import LogoSection from "../components/LogoSection";
import Navbar from "../components/Navbar";
import BuildingInfo from "../components/popup-pages/BuildingInfo";

export default function Home_BuildingInfo(){

    return(
        <div>
            <Navbar />
            <BuildingInfo />
            <Body />
            <LogoSection />
            <Footer />
        </div>
    )
}