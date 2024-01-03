import "./Common.css"
import { useNavigate } from "react-router-dom"


export default function Navbar() {
  const navigate = useNavigate()
  const routeCange = (path) => {
    navigate(path)
  }

  return (


    <div class="home-header">
      <div id="home"></div>
      <header data-thq="thq-navbar" class="home-navbar-interactive">
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
            <a class="home-nav2" id="about-btn" href="/about" onClick={() => document.body.style.overflow = "hidden"}>About</a>
            <a class="home-nav4" href="#features">Features</a>
            <a class="home-nav5" href="#contact">Contact</a>
          </nav>
          <div class="home-buttons">
            <button class="home-login" onClick={() => {
              document.body.style.overflow = "hidden"
              routeCange("/login")

            }}>Login
            </button>

            <button class="home-register" onClick={() => {
              document.body.style.overflow = "hidden"
              routeCange("/register")
            }}>Register</button>

          </div>
        </div>

      </header>
    </div>

  )
}