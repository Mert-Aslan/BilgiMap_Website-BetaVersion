import "../Common.css"
import { useNavigate } from "react-router-dom";

export default function BuildingInfo() {
    const navigate = useNavigate()
    const closeLogin = () => {
        document.body.style.overflow = "auto"
        navigate("/");
    }
    return (
        <div class="blur-overlay-popups">
            <div class="buildinginfo-container">
                <div class="close-buildinginfo-container">
                    <button class="close-buildinginfo" id="close-btn-login" onClick={closeLogin}>&times;</button>
                </div>
                <div class="buildinginfo-title-container">
                    <h1 class="buildinginfo-title">
                        Buildings
                    </h1>
                </div>
                <div class="buildinginfo-content-container-container">
                    <div class="buildinginfo-content-container">
                        <div class="buildinginfo-content">
                            <div class="buildinginfo-subcontent">
                                <div class="buildinginfo-label-container">
                                    <h2 class="buildinginfo-label">
                                        E1
                                    </h2>
                                </div>
                                <div class="buildinginfo-label-seperator-container">
                                        <div class="buildinginfo-label-seperator-ebuildings"></div>
                                    </div>
                                <div class="buildinginfo-context-container">
                                    <p class="buildinginfo-context">
                                    Within the E1 building, artistry thrives as it hosts the Faculty of Visual Communication Design alongside the Department of Music, blending design narratives with musical melodies on campus.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="buildinginfo-content">
                            <div class="buildinginfo-subcontent">
                                <div class="buildinginfo-label-container">
                                    <h2 class="buildinginfo-label">
                                        E2
                                    </h2>
                                </div>
                                <div class="buildinginfo-label-seperator-container">
                                        <div class="buildinginfo-label-seperator-ebuildings"></div>
                                    </div>
                                <div class="buildinginfo-context-container">
                                    <p class="buildinginfo-context">
                                    The E2 building stands prominently as a cornerstone for the Faculty of Social Sciences and Humanities, seamlessly merging academic excellence with a rich tapestry of cultural and intellectual engagement.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="buildinginfo-content">
                            <div class="buildinginfo-subcontent">
                                    <div class="buildinginfo-label-container">
                                        <h2 class="buildinginfo-label">
                                            E3
                                        </h2>
                                    </div>
                                    
                                    <div class="buildinginfo-label-seperator-container">
                                        <div class="buildinginfo-label-seperator-ebuildings"></div>
                                    </div>
                                <div class="buildinginfo-context-container">
                                    <p class="buildinginfo-context">
                                    The E3 building is a focal point for engineering and natural sciences, promoting innovation and academic excellence through advanced facilities and interdisciplinary collaboration.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="buildinginfo-content">
                            <div class="buildinginfo-subcontent">
                                <div class="buildinginfo-label-container">
                                    <h2 class="buildinginfo-label">
                                        E4
                                    </h2>
                                </div>
                                <div class="buildinginfo-label-seperator-container">
                                        <div class="buildinginfo-label-seperator-ebuildings"></div>
                                    </div>
                                <div class="buildinginfo-context-container">
                                    <p class="buildinginfo-context">
                                    At the heart of our campus, the E4 building stands as a nexus for media and communication, blending state-of-the-art resources with a focus on nurturing the next generation of media professionals and communicators.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="buildinginfo-content">
                            <div class="buildinginfo-subcontent">
                                <div class="buildinginfo-label-container">
                                    <h2 class="buildinginfo-label">
                                        Gastronomy
                                    </h2>
                                </div>
                                <div class="buildinginfo-label-seperator-container">
                                        <div class="buildinginfo-label-seperator-gastronomy"></div>
                                    </div>
                                <div class="buildinginfo-context-container">
                                    <p class="buildinginfo-context">
                                    The Gastronomy building at our university boasts a state-of-the-art kitchen, serving as a premier hub for culinary education. Designed for gastronomy students, it emphasizes skill development and innovation, reflecting our dedication to excellence in the culinary arts.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="buildinginfo-content">
                            <div class="buildinginfo-subcontent">
                                <div class="buildinginfo-label-container">
                                    <h2 class="buildinginfo-label">
                                        ÇSM
                                    </h2>
                                </div>
                                <div class="buildinginfo-label-seperator-container">
                                        <div class="buildinginfo-label-seperator-csm"></div>
                                    </div>
                                <div class="buildinginfo-context-container">
                                    <p class="buildinginfo-context">
                                    The ÇSM building on campus combines academics and culture, featuring a study hall, classrooms, and the Energy Museum. Additionally, a cozy café offers students a space for relaxation and socializing, making it a versatile hub for learning and leisure.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="buildinginfo-content">
                            <div class="buildinginfo-subcontent">
                                <div class="buildinginfo-label-container">
                                    <h2 class="buildinginfo-label">
                                    Faculty of Law
                                    </h2>
                                </div>
                                <div class="buildinginfo-label-seperator-container">
                                        <div class="buildinginfo-label-seperator-law"></div>
                                    </div>
                                <div class="buildinginfo-context-container">
                                    <p class="buildinginfo-context">
                                    The Law building on our campus provides modern facilities for legal education, emphasizing practical learning and academic growth in a dynamic environment.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="buildinginfo-content">
                            <div class="buildinginfo-subcontent">
                                <div class="buildinginfo-label-container">
                                    <h2 class="buildinginfo-label">
                                    Faculty of Architecture
                                    </h2>
                                </div>
                                <div class="buildinginfo-label-seperator-container">
                                        <div class="buildinginfo-label-seperator-arch"></div>
                                    </div>
                                <div class="buildinginfo-context-container">
                                    <p class="buildinginfo-context">
                                    The Architecture building merges history with modern design, offering students a space for collaboration. Its mix of old and new facilitates group work, emphasizing innovative architectural learning.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}