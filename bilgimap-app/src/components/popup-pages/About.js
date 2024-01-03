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
        <div class="content-container">
          <p class="content-about">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  )
}