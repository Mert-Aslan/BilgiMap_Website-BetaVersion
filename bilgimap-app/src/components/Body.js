import react from "react"
import "./Common.css"
import logo_website from "./logos/logo-website.png"
import img_generalmap from "./img/img-generalmap.png"
import energy_museum from "./logos/logo-energymuseum.png"
import building_info from "./logos/logo-buildinginfo.png"
import study_places from "./logos/logo-studyplaces.png"
import food_drinks from "./logos/logo-fooddrinks.png"
import { useNavigate } from "react-router-dom"

export default function Body() {
    const navigate = useNavigate();



    return (
        <>
            <div class="home-hero">
                <div class="home-hero1">
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
                        <div class="home-btn-group">
                            <a class="home-hero-button1 button" href="/login">Get Started</a>
                            <a class="home-hero-button2 button" href="/guest">
                                Continue as a guest &#8594;
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="home-details">
                <div class="home-details1">
                    <div class="home-container02">
                        <h2 class="home-details-heading heading2">
                            <span class="home-text02">General Map</span>
                            <br />
                            <br />
                        </h2>
                        <span class="home-details-sub-heading">
                            Our university campus map website provides a user-friendly interface
                            to help you easily locate classrooms, libraries, dining halls, and
                            more. With detailed indoor and outdoor maps, you&apos;ll never get
                            lost again.
                        </span>
                    </div>
                    <img
                        alt="image"
                        src={img_generalmap}
                        class="home-details-image"
                    />
                </div>
            </div>
            <div class="home-features" id="features">
                <div class="home-features-container">
                    <div class="home-features1">
                        <div class="home-container03">
                            <span class="home-text05 sectionTitle">
                                <span>FEATURES</span>
                                <br />
                            </span>
                            <h2 class="home-features-heading heading2">Locations On Campus </h2>
                            <span class="home-features-sub-heading">
                                Experience the convenience and efficiency of our university campus
                                map website.
                            </span>
                        </div>
                        <div class="home-container04">
                            <button class="btn-featurecard" onClick={() => {
                                document.body.style.overflow = "hidden"
                                navigate("/energy-museum")
                            }}>
                                <div class="feature-card-feature-card">
                                    <img src={energy_museum} class="logo-small" />
                                    <div class="feature-card-container">
                                        <h3 class="feature-card-text-heading3">
                                            <span>Energy Museum</span>
                                        </h3>
                                    </div>
                                </div>
                            </button>

                            <button class="btn-featurecard" onClick={() => {
                                document.body.style.overflow = "hidden"
                                navigate("/building-info")

                            }}>
                                <div class="feature-card-feature-card">
                                    <img src={building_info} class="logo-small" />
                                    <div class="feature-card-container">
                                        <h3 class="feature-card-text-heading3">
                                            <span>Building Information</span>
                                        </h3>
                                    </div>
                                </div>
                            </button>
                            <button class="btn-featurecard" onClick={() => {
                                document.body.style.overflow = "hidden"
                                navigate("/study-places")
                            }}>
                                <div class="feature-card-feature-card">
                                    <img src={study_places} class="logo-small" />
                                    <div class="feature-card-container">
                                        <h3 class="feature-card-text-heading3">
                                            <span>Study Places</span>
                                        </h3>
                                    </div>
                                </div>
                            </button>
                            <button class="btn-featurecard" onClick={() => {
                                document.body.style.overflow = "hidden"
                                navigate("/food-drinks")

                            }}>
                                <div class="feature-card-feature-card">
                                    <img src={food_drinks} class="logo-small" />
                                    <div class="feature-card-container">
                                        <h3 class="feature-card-text-heading3">
                                            <span>Food & Drinks</span>
                                        </h3>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="home-gallery">
                <div class="home-gallery1">
                    <h1 class="home-gallery-heading-heading2">Explore Our Campus</h1>
                    <span class="home-gallery-sub-heading">
                        Take a virtual tour of our university campus
                    </span>
                    <div class="home-container10">
                        <div class="gallery-card3-gallery-card">
                            <img
                                alt="image"
                                src="https://move2turkey.com/wp-content/uploads/2020/12/All-you-need-to-know-about-the-Turkish-Private-Bilgi-University-in-Istanbul2.jpg"
                                class="gallery-card3-image"
                            />
                        </div>
                        <div
                            class="gallery-card3-gallery-card"
                        >
                            <img
                                alt="image"
                                src="https://www.logsign.com/uploads/case_studies_detail_image_bilgiuniv_1x_c9591bb76c.jpg"
                                class="gallery-card3-image"
                            />
                        </div>
                        <div
                            class="gallery-card3-gallery-card"
                        >
                            <img
                                alt="image"
                                src="https://i.pinimg.com/474x/25/cf/43/25cf43eba80fd4e790e5698246206c4e--university-architecture-industrial-architecture.jpg"
                                class="gallery-card3-image"
                            />
                        </div>
                        <div
                            class="gallery-card3-gallery-card"
                        >
                            <img
                                alt="image"
                                src="https://i.pinimg.com/originals/54/cd/2f/54cd2fb6a586d2c14f5e9194b6b521a0.jpg"
                                class="gallery-card3-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}