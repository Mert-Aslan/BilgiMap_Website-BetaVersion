import react from "react"
import "./Common.css"
import logo_like from "./logos/logo-like.png"
import logo_UI from "./logos/logo-friendlyinterface.png"
import logo_responsive from "./logos/logo-responsive.png"
import logo_navigate from "./logos/logo-navigate.png"

export default function LogoSection() {
  return (
    <div class="home-logoSection">
      <div class="top-line"></div>
      <div class="home-logoSection-container">
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
        <div class="right-line"></div>
        <div class="logoSection-container">
          <div class="logoSection-logo-container">
            <img
              class="logoSection-logo"
              src={logo_UI}
            />
          </div>
          <div class="logoSection-label-container">
            <span class="logoSection-label">FRIENDLY USER INTERFACE</span>
          </div>
        </div>
        <div class="right-line"></div>
        <div class="logoSection-container">
          <div class="logoSection-logo-container">
            <img
              class="logoSection-logo"
              src={logo_responsive}
            />
          </div>
          <div class="logoSection-label-container">
            <span class="logoSection-label">RESPONSIVE</span>
          </div>
        </div>
        <div class="right-line"></div>
        <div class="logoSection-container">
          <div class="logoSection-logo-container">
            <img
              class="logoSection-logo"
              src={logo_navigate}
            />
          </div>
          <div class="logoSection-label-container">
            <span class="logoSection-label">EASY TO NAVIGATE</span>
          </div>
        </div>
      </div>
      <div class="bottom-line"></div>
    </div>
  )
}