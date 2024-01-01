import React from "react";
import { useNavigate } from "react-router-dom";

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
        <div class="content-container">
          <p class="content"></p>
        </div>
      </div>
    </div>
  )
}