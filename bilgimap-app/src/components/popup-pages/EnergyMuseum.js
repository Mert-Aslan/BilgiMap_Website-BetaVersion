import "../Common.css"
import { useNavigate } from "react-router-dom";
export default function EnergyMuseum() {
    const navigate = useNavigate()
    const closeLogin = () => {
        document.body.style.overflow = "auto"
        navigate("/");
    }
    return (
        <div class="blur-overlay-popups">
            <div class="energymuseum-container">
                <button class="close-energymuseum" onClick={closeLogin}>&times;</button>
                <div class="energymuseum-title-container">
                    <h1 class="energymuseum-title">
                        Energy Museum
                    </h1>
                </div>
                <div class="content-container-energymuseum">
                    <p class="content-energymuseum">
                    The Energy Museum, situated within the santralistanbul complex, stands on the historic grounds of the Silahtaraga Electric Power Plant, a significant Ottoman-era facility. Transformed by Istanbul Bilgi University, the museum showcases turbines and control panels from the plant's operational days, offering insights into early 20th-century technology. Recognized with awards like the “DASA Award,” it provides interactive experiences, including an Energy Game Area for hands-on exploration, blending science and heritage within Turkey's first industrial archaeological museum.
                    </p>
                </div>
            </div>
        </div>
    )
}