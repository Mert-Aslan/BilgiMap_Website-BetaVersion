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
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}