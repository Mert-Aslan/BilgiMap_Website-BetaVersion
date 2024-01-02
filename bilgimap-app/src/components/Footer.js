import react from "react"
import "./Common.css"
import logo_email from "./logos/logo-email.png"
import logo_phone from "./logos/logo-phone.png"
import logo_instagram from "./logos/logo-instagram.png"
import logo_x from "./logos/logo-x.png"

export default function Footer() {
  return (
    <div class="home-footer">
      <footer class="home-footer1">
        <div class="home-container11">
          <a class="home-logo2" href="#home">BILGIMAP</a>
        </div>
        <div class="home-separator"></div>

        <div class="contact-container" id="contact">
          <div class="email-container">
            <div class="email-logo-container">
              <img
                class="email-logo"
                src={logo_email}
              />
            </div>
            <div class="email-label-container">
              <a class="email-label">bilgimap@gmail.com</a>
            </div>
          </div>
          <div class="phone-container">
            <div class="phone-logo-container">
              <img
                class="phone-logo"
                src={logo_phone}
              />
            </div>
            <div class="phone-label-container">
              <a class="phone-label">+90 530 822 0904</a>
            </div>
          </div>
        </div>

        <div class="home-separator2"></div>

        <div class="home-container12">
          <span class="home-text10">
            © 2023 BILGIMAP, All Rights Reserved.
          </span>
          <div class="home-icon-group1">
            <a class="anchor-instagram">
            <img
            class="logo-instagram"
            src={logo_instagram}
            />
            </a>
            <a class="anchor-x">
            <img
            class="logo-x"
            src={logo_x}
            />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}