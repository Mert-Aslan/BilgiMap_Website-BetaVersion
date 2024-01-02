import react from "react"
import "./Common.css"
import logo_like from "./logos/logo-like.png"

export default function LogoSection() {
  return (
    <div class="home-logoSection">
      <div class="top-line"></div>
      <div class="Home-logoSection-container">
        <div class="logoSection-container">
          <div class="logoSection-logo-container">
            <img
              class="logoSection-logo"
              src={logo_like}
            />
          </div>
          <div class="logoSection-label-container">
            <span class="logoSection-label">STUDENT SATISFACTION</span>
          </div>
        </div>
      </div>
      <div class="bottom-line"></div>
    </div>
  )
}