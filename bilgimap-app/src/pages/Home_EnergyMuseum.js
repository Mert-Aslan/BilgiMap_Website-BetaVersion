import Body from "../components/Body";
import Footer from "../components/Footer";
import LogoSection from "../components/LogoSection";
import Navbar from "../components/Navbar";
import BuildingInfo from "../components/popup-pages/BuildingInfo";
import EnergyMuseum from "../components/popup-pages/EnergyMuseum";

export default function Home_EnergyMuseum(){

    return(
        <div>
            <Navbar />
            <EnergyMuseum />
            <Body />
            <LogoSection />
            <Footer />
        </div>
    )
}