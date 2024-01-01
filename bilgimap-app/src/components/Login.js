import React, { useState } from "react";
import "../components/Common.css";
import {  useNavigate } from "react-router-dom";
import axios from "axios"
import { toast } from "react-hot-toast";
import website_logo from "./logos/logo-website.png"

export default function Login() {

  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const loginUser = async (e) => {
    e.preventDefault()
    const {email, password} = data
    try {
      const {data} = await axios.post("/login",{
        email,password
      })

      if(data.error){
        toast.error(data.error)
      }else{
        setData({})
        toast.success("Login succesful")
        routeCange("/")
      }
    } catch (error) {
      console.log(error)
    }
  }


  const navigate = useNavigate()
  const routeCange = (path) => {
    navigate(path)
  }

  const closeLogin = () => {
    document.body.style.overflow = "auto"
    routeCange("/");
  }

  return (
    <div class="blur-overlay-login" id="blur-overlay-login">
      <div class="login-container" id="login-container">
        <button class="close-login" id="close-btn-login" onClick={closeLogin}>&times;</button>
        <div class="login-logo-container">
          <img src={website_logo} class="login-logo" />
        </div>
        <h1>Login</h1>
        <form onSubmit={loginUser}>

          <div class="inputBox">
            <input type="email" placeholder="Mail" required value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
          </div>

          <div class="inputBox">
            <input type="password" placeholder="Password" required value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
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
            <p>Don't have an account?<a href='/register'>Register</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}