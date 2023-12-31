import React from "react";
import "../components/Common.css";

export default function Login({ onClose }) {
  const close = () => {
    document.body.style.flexFlow = "auto"
    onClose()
  }

  return (
    <div class="blur-overlay-login" id="blur-overlay-login">
      <div class="login-container" id="login-container">
        <button class="close-login" id="close-btn-login" onClick={ close } >&times;</button>
        <div class="login-logo-container">
          <img src="logos/logo-website.png" class="login-logo" />
        </div>
        <h1>Login</h1>
        <form action="">
          <div class="inputBox">
            <input type="email" placeholder="Mail" required />
          </div>

          <div class="inputBox">
            <input type="password" placeholder="Password" required />
          </div>

          <div class="remember_forgot">
            <label>
              <input type="checkbox" class="login-checkbox" />Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <div class="loginbtn-container">
            <button type="submit" class="loginbtn">Login</button>
          </div>

          <div class="register_link">
            <p>Don't have an account?<a href='#'>Register</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}