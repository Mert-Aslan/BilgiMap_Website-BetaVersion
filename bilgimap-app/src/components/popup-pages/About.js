import React from "react";
import { useNavigate } from "react-router-dom";
import "../Common.css"

export default function About() {
  const navigate = useNavigate()
  const routeCange = (path) => {
    navigate(path)
  }

  const closeAbout = () => {
    routeCange("/")
    document.body.style.overflow = "auto"
  }
  return (
    <div class="blur-overlay-about" id="blur-overlay-about">
      <div class="about-container" id="about-container" >
        <button class="close-about" id="close-btn-about" onClick={closeAbout}>&times;</button>
        <div class="about-title">
          <h1 class="h1-bilgiabout">About BILGI</h1>
          <h1 class="h1-mapabout">MAP</h1>
        </div>
        <div class="content-container-about">
          <p class="content-about">
          Our website serves as a comprehensive digital guide for our university community. Central to its functionality is an interactive university map that offers detailed navigation of campus buildings, study areas, and restaurants. Beyond its navigational capabilities, the map enhances campus connectivity by integrating personalized elements. Registered users can customize their experience by setting reminders, leaving notes, and accessing tailored information relevant to their academic and extracurricular interests. This dynamic platform not only simplifies campus exploration but also fosters engagement through a user-centric approach, ensuring that every member of our community can maximize their university experience.
          </p>
        </div>
      </div>
    </div>
  )
}