import { UserContext } from "../context/userContext";
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import "../components/Common.css"
import img_defaultuser from "../components/img/img-defaultuser.png"
import logo_dropdown from "../components/logos/logo-dropdown.png"
import logo_bilgiuni from "../components/logos/logo-bilgiuni.png"
import Footer from "../components/Footer";
import LogoSection from "../components/LogoSection";
import logo_website from "../components/logos/logo-website.png"
import origin_map from "../maps/img-maps/origin.png"


export default function Dashboard() {
    const { user } = useContext(UserContext)
    const navigate = useNavigate()
    const routeCange = (path) => {
        navigate(path)
    }

    return (
        <><div class="home-header">
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
                        <a class="home-nav-calendar">Calendar</a>
                        <a class="home-nav-campusmap">Campus Map</a>
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
                                    <a class="btn-logout">
                                        Log out
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>


            <div class="home-hero">
                <div class="home-hero1">
                    <div class="welcoming-msg-container-container">
                        <div class="welcoming-msg-container">
                            {!!user && (<h1 class="welcoming-msg"> Welcome {user.name}!</h1>)}
                        </div>
                    </div>
                    <img
                        alt="pastedImage"
                        src={logo_website}
                        class="home-pasted-image"
                    />
                    <div class="home-container01">
                        <h1 class="home-hero-heading heading1">Explore Our Campus</h1>
                        <span class="home-hero-sub-heading">
                            Navigate BILGI university with ease
                        </span>
                    </div>
                </div>
            </div>


            <div class="map-section">
                <div class="whole-container">
                    <div class="button-container">
                        <div class="mapbutton-container">
                            <div class="mapbutton-dropdown">
                                <button class="mapbutton-currentloc">
                                    Current Location
                                </button>
                                <div class="mapbutton-dropdown-content">
                                    <a class="mapbutton-dropdown-content-element">E1</a>
                                    <a class="mapbutton-dropdown-content-element">E2</a>
                                    <a class="mapbutton-dropdown-content-element">E3</a>
                                    <a class="mapbutton-dropdown-content-element">ÇSM</a>
                                    <a class="mapbutton-dropdown-content-element">Gastronomy</a>
                                </div>
                            </div>

                        </div>
                        <div class="mapbutton-container">
                            <div class="mapbutton-dropdown">
                                <button class="mapbutton-destination">
                                    Destination
                                </button>
                                <div class="mapbutton-dropdown-content">
                                    <a class="mapbutton-dropdown-content-element">E1</a>
                                    <a class="mapbutton-dropdown-content-element">E2</a>
                                    <a class="mapbutton-dropdown-content-element">E3</a>
                                    <a class="mapbutton-dropdown-content-element">ÇSM</a>
                                    <a class="mapbutton-dropdown-content-element">Gastronomy</a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="map-container">
                        <img
                            class="map"
                            src={origin_map}
                        />
                    </div>
                </div>
            </div>
            <LogoSection />
            <Footer /></>
    )

}