import Navbar from "../components/Navbar";
import { UserContext } from "../context/userContext";
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import "../components/Common.css"
import Footer from "../components/Footer";
import LogoSection from "../components/LogoSection";
import logo_website from "../components/logos/logo-website.png"
import origin_map from "../maps/img-maps/origin.png"
import e1_e2 from "../maps/img-maps/img-e1-e2.png"
import e1_e3 from "../maps/img-maps/img-e1-e3.png"
import e1_csm from "../maps/img-maps/img-e1-csm.png"
import e1_gastro from "../maps/img-maps/img-e1-gas.png"

import e2_e3 from "../maps/img-maps/img-e2-e3.png"
import e2_csm from "../maps/img-maps/img-e2-csm.png"
import e2_gastro from "../maps/img-maps/img-e2-gas.png"

import e3_csm from "../maps/img-maps/img-e3-csm.png"
import e3_gastro from "../maps/img-maps/img-e3-gas.png"

import csm_gastro from "../maps/img-maps/img-csm-gas.png"

export default function GuestPage() {

    let current;

    const [imageSrc, setImageSrc] = useState(origin_map);

    const changeImage = (path) => {
        setImageSrc(path);
    };

    const navigate = useNavigate()
    const routeCange = (path) => {
        navigate(path)
    }

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
                            <a class="home-nav1" href="#home" >Home</a>
                            <a class="home-nav2" id="about-btn" href="/about" onClick={() => document.body.style.overflow = "hidden"}>About</a>
                            <a class="home-nav4" href="#features">Features</a>
                            <a class="home-nav5" href="#contact">Contact</a>
                        </nav>
                        <div class="home-buttons">
                            <button class="home-login" onClick={() => {
                                document.body.style.overflow = "hidden"
                                routeCange("/login")

                            }}>Login
                            </button>

                            <button class="home-register" onClick={() => {
                                document.body.style.overflow = "hidden"
                                routeCange("/register")
                            }}>Register</button>

                        </div>
                    </div>

                </header>
            </div>

            <div class="home-hero">
                <div class="home-hero1">
                    <div class="welcoming-msg-container-container">
                        <div class="welcoming-msg-container">
                            <h1 class="welcoming-msg"> Welcome to Guest Page!</h1>
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


            <div class="map-section" id="campus">
                <div class="whole-container">
                    <div class="button-container">
                        <div class="mapbutton-container">
                            <div class="mapbutton-dropdown">
                                <button class="mapbutton-currentloc">
                                    Current Location
                                </button>
                                <div class="mapbutton-dropdown-content">
                                    <a class="mapbutton-dropdown-content-element" id="c-e1" onClick={() => current = "e1"}>E1</a>
                                    <a class="mapbutton-dropdown-content-element" id="c-e2" onClick={() => current = "e2"}>E2</a>
                                    <a class="mapbutton-dropdown-content-element" id="c-e3" onClick={() => current = "e3"}>E3</a>
                                    <a class="mapbutton-dropdown-content-element" id="c-csm" onClick={() => current = "csm"}>ÇSM</a>
                                    <a class="mapbutton-dropdown-content-element" id="c-gastro" onClick={() => current = "gastro"}>Gastronomy</a>
                                </div>
                            </div>

                        </div>
                        <div class="mapbutton-container">
                            <div class="mapbutton-dropdown">
                                <button class="mapbutton-destination">
                                    Destination
                                </button>
                                <div class="mapbutton-dropdown-content">
                                    <a class="mapbutton-dropdown-content-element" id="d-e1" onClick={() => {
                                        switch (current) {
                                            case "e2":
                                                changeImage(e1_e2)
                                                break;
                                            case "e3":
                                                changeImage(e1_e3)
                                                break;
                                            case "csm":
                                                changeImage(e1_csm)
                                                break;
                                            case "gastro":
                                                changeImage(e1_gastro)
                                                break;
                                        }
                                    }}>E1</a>
                                    <a class="mapbutton-dropdown-content-element" id="d-e2" onClick={() => {
                                        switch (current) {
                                            case "e1":
                                                changeImage(e1_e2)
                                                break;
                                            case "e3":
                                                changeImage(e2_e3)
                                                break;
                                            case "csm":
                                                changeImage(e2_csm)
                                                break;
                                            case "gastro":
                                                changeImage(e2_gastro)
                                                break;
                                        }
                                    }}>E2</a>
                                    <a class="mapbutton-dropdown-content-element" id="d-e3" onClick={() => {
                                        switch (current) {
                                            case "e1":
                                                changeImage(e1_e3)
                                                break;
                                            case "e2":
                                                changeImage(e2_e3)
                                                break;
                                            case "csm":
                                                changeImage(e3_csm)
                                                break;
                                            case "gastro":
                                                changeImage(e3_gastro)
                                                break;
                                        }
                                    }}>E3</a>
                                    <a class="mapbutton-dropdown-content-element" id="d-csm" onClick={() => {
                                        switch (current) {
                                            case "e1":
                                                changeImage(e1_csm)
                                                break;
                                            case "e2":
                                                changeImage(e2_csm)
                                                break;
                                            case "e3":
                                                changeImage(e3_csm)
                                                break;
                                            case "gastro":
                                                changeImage(csm_gastro)
                                                break;
                                        }
                                    }}>ÇSM</a>
                                    <a class="mapbutton-dropdown-content-element" id="d-gastro" onClick={() => {
                                        switch (current) {
                                            case "e1":
                                                changeImage(e1_gastro)
                                                break;
                                            case "e2":
                                                changeImage(e2_gastro)
                                                break;
                                            case "e3":
                                                changeImage(e3_gastro)
                                                break;
                                            case "csm":
                                                changeImage(csm_gastro)
                                                break;
                                        }
                                    }}>Gastronomy</a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="map-container">
                        <img
                            class="map"
                            src={imageSrc}
                            id="map"
                        />
                    </div>
                </div>
            </div>
            <LogoSection />
            <Footer /></>
    )
}