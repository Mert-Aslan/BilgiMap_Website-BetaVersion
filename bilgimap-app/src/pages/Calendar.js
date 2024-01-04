import ReactBigCalendar from "../calendar/ReactBigCalendar";
import LogoSection from "../components/LogoSection";
import Navbar from "../components/Navbar";

export default function Calendar(){
    return(
        <>
            <Navbar />
            <ReactBigCalendar />
            <LogoSection />
            <Footer />
        </>
    )
}