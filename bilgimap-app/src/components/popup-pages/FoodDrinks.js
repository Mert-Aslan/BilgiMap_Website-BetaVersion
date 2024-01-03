import "../Common.css"
import { useNavigate } from "react-router-dom";
import Login from "./Login"
import logo_espressolab from "../logos/logo-espressolab.png"
import logo_cafenero from "../logos/logo-caffenero.png"
import logo_lokantasosyal from "../logos/logo-lokantasosyal.png"
import logo_starbucks from "../logos/logo-starbucks.png"
import logo_gc from "../logos/logo-gc.jpg"
import logo_blab from "../logos/logo-blab.png"
import logo_sariyerborekcisi from "../logos/logo-sariyerborekcisi.png"
import logo_gustostop from "../logos/logo-gustostop.png"
import logo_santorijinal from "../logos/logo-santorijinal.png"
import logo_kampushane from "../logos/logo-kampushane.png"

export default function FoodDrinks() {
    const navigate = useNavigate()
    const closeLogin = () => {
        document.body.style.overflow = "auto"
        navigate("/");
    }

    return (
        <div class="blur-overlay-popups">
            <div class="FoodDrinks-container">
                <div class="close-FoodDrinks-container">
                    <button class="close-FoodDrinks" id="close-btn-login" onClick={closeLogin}>&times;</button>
                </div>
                <div class="FoodDrinks-title-container">
                    <h1 class="FoodDrinks-title">
                        Food & Drinks
                    </h1>
                </div>
                <div class="FoodDrinks-content-container-container">
                    <div class="FoodDrinks-content-container">
                        <div class="FoodDrinks-content">
                            <div class="FoodDrinks-subcontent">
                                <div class="FoodDrinks-label-container">
                                    <button class="FoodDrinks-label">
                                        Espressolab Santralistanbul
                                    </button>
                                </div>
                                <div class="FoodDrinks-Logo-container">
                                    <img
                                        class="FoodDrinks-Logo"
                                        src={logo_espressolab}
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="FoodDrinks-content">
                            <div class="FoodDrinks-subcontent">
                                <div class="FoodDrinks-label-container">
                                    <button class="FoodDrinks-label">
                                        Lokanta Sosyal
                                    </button>
                                </div>
                                <div class="FoodDrinks-Logo-container">
                                    <img
                                        class="FoodDrinks-Logo"
                                        src={logo_lokantasosyal}
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="FoodDrinks-content">
                            <div class="FoodDrinks-subcontent">
                                <div class="FoodDrinks-label-container">
                                    <button class="FoodDrinks-label">
                                        Sant Orijinal
                                    </button>
                                </div>
                                <div class="FoodDrinks-Logo-container">
                                    <img
                                        class="FoodDrinks-Logo"
                                        src={logo_santorijinal}
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="FoodDrinks-content">
                            <div class="FoodDrinks-subcontent">
                                <div class="FoodDrinks-label-container">
                                    <button class="FoodDrinks-label">
                                        Gastro Corner Müze Cafe
                                    </button>
                                </div>
                                <div class="FoodDrinks-Logo-container">
                                    <img
                                        class="FoodDrinks-Logo-gc"
                                        src={logo_gc}
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="FoodDrinks-content">
                            <div class="FoodDrinks-subcontent">
                                <div class="FoodDrinks-label-container">
                                    <button class="FoodDrinks-label">
                                        Blab Café
                                    </button>
                                </div>
                                <div class="FoodDrinks-Logo-container">
                                    <img
                                        src={logo_blab}
                                        class="FoodDrinks-Logo"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="FoodDrinks-content">
                            <div class="FoodDrinks-subcontent">
                                <div class="FoodDrinks-label-container">
                                    <button class="FoodDrinks-label">
                                        Caffe NERO
                                    </button>
                                </div>
                                <div class="FoodDrinks-Logo-container">
                                    <img
                                        class="FoodDrinks-Logo"
                                        src={logo_cafenero}
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="FoodDrinks-content">
                            <div class="FoodDrinks-subcontent">
                                <div class="FoodDrinks-label-container">
                                    <button class="FoodDrinks-label">
                                        Starbucks
                                    </button>
                                </div>
                                <div class="FoodDrinks-Logo-container">
                                    <img
                                        class="FoodDrinks-Logo-starbucks"
                                        src={logo_starbucks}
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="FoodDrinks-content">
                            <div class="FoodDrinks-subcontent">
                                <div class="FoodDrinks-label-container">
                                    <button class="FoodDrinks-label">
                                        Sarıyer Börekçisi
                                    </button>
                                </div>
                                <div class="FoodDrinks-Logo-container">
                                    <img
                                        class="FoodDrinks-Logo"
                                        src={logo_sariyerborekcisi}
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="FoodDrinks-content">
                            <div class="FoodDrinks-subcontent">
                                <div class="FoodDrinks-label-container">
                                    <button class="FoodDrinks-label">
                                        Gusto Stop
                                    </button>
                                </div>
                                <div class="FoodDrinks-Logo-container">
                                    <img
                                        class="FoodDrinks-Logo"
                                        src={logo_gustostop}
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="FoodDrinks-content">
                            <div class="FoodDrinks-subcontent">
                                <div class="FoodDrinks-label-container">
                                    <button class="FoodDrinks-label">
                                        KampüsHane
                                    </button>
                                </div>
                                <div class="FoodDrinks-Logo-container">
                                    <img
                                        class="FoodDrinks-Logo"
                                        src={logo_kampushane}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}