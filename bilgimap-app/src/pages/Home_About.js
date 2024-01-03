import Body from "../components/Body";
import Footer from "../components/Footer";
import LogoSection from "../components/LogoSection";
import Navbar from "../components/Navbar";
import About from "../components/popup-pages/About";

export default function Home_About(){

    return(
        <div>
            <Navbar />
            <About />
            <Body />
            <LogoSection />
            <Footer />
        </div>
    )
}