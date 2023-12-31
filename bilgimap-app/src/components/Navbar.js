import react, { useState } from "react"
import "./Common.css"
import Login from "./Login.js"
import Register from "./Register.js"

export default function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  function loginOpen() {
    setIsLoginOpen(true)
  }
  function loginClose() {
    setIsLoginOpen(false)
  }

  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  function registerOpen() {
    setIsLoginOpen(true)
  }
  function registerClose() {
    setIsLoginOpen(false)
  }


  return (
    <div class="home-header">
      <header data-thq="thq-navbar" class="home-navbar-interactive" id="home">
        <div data-thq="thq-navbar-nav" class="home-desktop-menu">
          <a class="logo-container" href="#home">
            <span class="home-logo-bilgi">
              <span>BILGI</span>
              <br />
            </span>
            <span class="home-logo-map">
              <span>MAP</span>
              <br />
            </span>
          </a>
          <nav class="home-links">
            <a class="home-nav1" href="#home" >Home</a>
            <a class="home-nav2" id="about-btn">About</a>
            <a class="home-nav3">Campus Map</a>
            <a class="home-nav4" href="#features">Features</a>
            <a class="home-nav5">Contact</a>
          </nav>
          <div class="home-buttons">
            <button class="home-login" onClick={() => {
                                                      loginOpen();
                                                      document.body.style.overflow = "hidden"
                                                      
                                                      }}>Login</button>
            {isLoginOpen && <Login onClose={loginClose} />}
            <button class="home-register" onClick={() => {
                                                          registerOpen();
                                                          document.body.style.overflow = "hidden"
                                                          }}>Register</button>
            {isRegisterOpen && <Register onClose={registerClose} />}
          </div>
        </div>
        <div data-thq="thq-burger-menu" class="home-burger-menu">
          <svg viewBox="0 0 1024 1024" class="home-icon">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
            ></path>
          </svg>
        </div>
        
      </header>
    </div>

  )
}