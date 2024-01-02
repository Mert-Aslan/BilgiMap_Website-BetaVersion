import react from "react"
import "./Common.css"
import logo_like from "./logos/logo-like.png"

export default function LogoSection(){
  return(
    <div class="home-logoSection">
      <div class="logoSection-container">
        <img
          class ="logoSection-logo"
          src={logo_like}
        />
        <span>STUDENT SATISFACTION</span>
      </div>
      <div class="logoSection-container">
        <img
          class ="logoSection-logo"
          src={logo_like}
        />
        <span>STUDENT SATISFACTION</span>
      </div>
      <div class="logoSection-container">
        <img
          class ="logoSection-logo"
          src={logo_like}
        />
        <span>STUDENT SATISFACTION</span>
      </div>
      <div class="logoSection-container">
        <img
          class ="logoSection-logo"
          src={logo_like}
        />
        <span>STUDENT SATISFACTION</span>
      </div>
      
    </div>
  )
}