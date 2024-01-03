import "../Common.css"
import { useNavigate } from "react-router-dom";

export default function StudyPlaces() {
    const navigate = useNavigate()
    const closeLogin = () => {
        document.body.style.overflow = "auto"
        navigate("/");
    }

    return (
        <div class="blur-overlay-popups">
            <div class="studyplaces-container">
                <div class="close-studyplaces-container">
                    <button class="close-studyplaces" id="close-btn-login" onClick={closeLogin}>&times;</button>
                </div>
                <div class="studyplaces-title-container">
                    <h1 class="studyplaces-title">
                        Study Places
                    </h1>
                </div>
                <div class="studyplaces-content-container-container">
                    <div class="studyplaces-content-container">
                        <div class="studyplaces-subcontent">
                            <div class="studyplaces-label-container">
                                <h2 class="studyplaces-label">
                                    Library
                                </h2>
                                <div class="studyplaces-content-seperator-container">
                                    <div class="studyplaces-content-seperator"></div>
                                </div>
                            </div>
                            <div class="studyplaces-text-container">
                                <p class="studyplaces-text">
                                Our campus library is a spacious hub with a diverse book collection spanning various subjects. Beyond books, it's equipped with essential study tools like computers and offers multiple study areas. Students benefit from quiet zones for focused work and collaborative spaces for group projects, ensuring a conducive environment for academic success.
                                </p>
                            </div>
                        </div>
                        <div class="studyplaces-subcontent">
                            <div class="studyplaces-label-container">
                                <h2 class="studyplaces-label">
                                    StudyHall
                                </h2>
                                <div class="studyplaces-content-seperator-container">
                                    <div class="studyplaces-content-seperator"></div>
                                </div>
                            </div>
                            <div class="studyplaces-text-container">
                                <p class="studyplaces-text">
                                Our campus study hall spans multiple floors, each offering distinct study environments. The ground floor provides long tables for collaborative study, while the first floor features varied-capacity rooms for group work. The second floor offers silent individual study areas with divided tables, and the third floor combines small group rooms with communal tables, accommodating both quiet study and group interactions.
                                </p>
                            </div>
                        </div>
                        <div class="studyplaces-subcontent">
                            <div class="studyplaces-label-container">
                                <h2 class="studyplaces-label">
                                    E3-StudyPlace
                                </h2>
                                <div class="studyplaces-content-seperator-container">
                                    <div class="studyplaces-content-seperator"></div>
                                </div>
                            </div>
                            <div class="studyplaces-text-container">
                                <p class="studyplaces-text">
                                The E3 building on our campus serves as a hub for engineering students, featuring specialized classrooms and ample study spaces. Beyond academic areas, the building offers cozy couches, providing students with comfortable spots to rest and recharge between classes or study sessions, emphasizing both academic focus and relaxation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}