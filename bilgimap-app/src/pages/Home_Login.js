import Body from "../components/Body";
import Footer from "../components/Footer";
import LogoSection from "../components/LogoSection";
import Navbar from "../components/Navbar";
import Login from "../components/popup-pages/Login";

export default function Home_Login(){

    return(
        <div>
            <Navbar />
            <Login />
            <Body />
            <LogoSection />
            <Footer />
        </div>
    )
}