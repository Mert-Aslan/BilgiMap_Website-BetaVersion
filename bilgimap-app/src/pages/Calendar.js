import ReactBigCalendar from "../calendar/ReactBigCalendar";
import Footer from "../components/Footer";
import LogoSection from "../components/LogoSection";
import img_defaultuser from "../components/img/img-defaultuser.png"
import logo_dropdown from "../components/logos/logo-dropdown.png"
import logo_bilgiuni from "../components/logos/logo-bilgiuni.png"
import { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function Calendar() {
    const { user } = useContext(UserContext)
    return (
        <>
            <div class="home-header">
                <div id="home"></div>
                <header data-thq="thq-navbar" class="home-navbar-interactive-loggedin">
                    <div data-thq="thq-navbar-nav" class="home-desktop-menu">
                        <a class="logo-container" href="#home">
                            <span class="home-logo-bilgi">
                                <span>BILGI</span>
                                <br />
                            </span>
                            <span class="home-logo-map">
                                <span>MAP</span>
                                <br />
                            </span>
                        </a>
                        <nav class="home-links">
                            <a class="home-nav-calendar" href="/calendar">Calendar</a>
                            <a class="home-nav-campusmap" href="#campus">Campus Map</a>
                            <a class="home-nav5" href="#contact">Contact</a>
                        </nav>
                        <div class="home-buttons-loggedin">
                            <div class="dropdown-profile">
                                <div class="dropdown-button-container">
                                    <button class="dropdown-button">
                                        <div class="profile-img-container">
                                            <img
                                                class="profile-img"
                                                src={img_defaultuser} />
                                        </div>
                                        <div class="dropdown-label-container">
                                            <div class="dropdown-label">
                                                <div class="dropdown-text">
                                                    <span>
                                                        Me
                                                    </span>
                                                </div>
                                                <div class="logo-dropdown-container">
                                                    <img
                                                        class="logo-dropdown"
                                                        src={logo_dropdown} />
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div class="dropdown-content">
                                    <div class="studentinfo-container">
                                        <div class="dropdown-fullName-container">
                                            <a class="dropdown-fullName">
                                                {!!user && (<p>{user.name} {user.lastname}</p>)}
                                            </a>
                                        </div>
                                        <div class="dropdown-universityname-container">
                                            <img
                                                class="universityname-logo"
                                                src={logo_bilgiuni} />
                                            <a class="dropdown-universityname">
                                                Istanbul Bilgi University
                                            </a>
                                        </div>
                                    </div>
                                    <div class="btn-logout-container">
                                        <a class="btn-logout" href="/">
                                            Log out
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            <ReactBigCalendar />
            <LogoSection />
            <Footer />
        </>
    )
}