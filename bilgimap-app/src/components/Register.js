import React, { useState } from "react";
import "./Common.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {toast} from "react-hot-toast"
import website_logo from "./logos/logo-website.png"


export default function Register() {

    const [data,setData] = useState({
        name: "",
        lastname: "",
        email: "",
        password:""
    })

    const registerUser = async (e) =>{
        e.preventDefault()
        const {name, lastname,email, password} = data
        try {
            const {data} = await axios.post("/register",{
                name,lastname,email, password
            })

            if(data.error){
                toast.error(data.error)
            }else {
                setData({})
                toast.success("Login Succesful. Welcome!")
                routeCange("/login")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const navigate = useNavigate()
    const routeCange = (path) => {
        navigate(path)
    }

    const closeRegister = () => {
        
        routeCange("/")
        document.body.style.flexFlow = "auto"
        //window.location.reload(true)
    }

    return (
        <div class="blur-overlay-login" id="blur-overlay-login">
            <div class="login-container" id="login-container">
                <button class="close-login" id="close-btn-login" onClick={closeRegister}>&times;</button>
                <div class="login-logo-container">
                    <img src={website_logo} class="login-logo" />
                </div>
                <h1>Register</h1>
                <form onSubmit={registerUser}>
                    <div class="inputBox">
                        <input type="text" placeholder="Name"  value={data.name} onChange={(e) => setData({...data, name: e.target.value})}/>
                    </div>
                    <div class="inputBox">
                        <input type="text" placeholder="Last Name"  value={data.lastname} onChange={(e) => setData({...data, lastname: e.target.value})}/>
                    </div>
                    <div class="inputBox">
                        <input type="email" placeholder="Mail"  value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
                    </div>

                    <div class="inputBox">
                        <input type="password" placeholder="Password"  value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
                    </div>

                    <div class="loginbtn-container">
                        <button type="submit" class="loginbtn">Register</button>
                    </div>

                </form>
            </div>
        </div>
    )
}