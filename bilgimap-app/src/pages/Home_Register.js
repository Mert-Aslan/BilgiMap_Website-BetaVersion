import Body from "../components/Body";
import Footer from "../components/Footer";
import LogoSection from "../components/LogoSection";
import Navbar from "../components/Navbar";
import Register from "../components/popup-pages/Register";

export default function Home_Register(){

    return(
        <div>
            <Navbar />
            <Register />
            <Body />
            <LogoSection />
            <Footer />
        </div>
    )
}