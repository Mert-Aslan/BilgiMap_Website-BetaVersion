import React, { useState } from "react";
import "../Common.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {toast} from "react-hot-toast"
import website_logo from "../logos/logo-website.png"


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
        document.body.style.overflow = "auto"
    }

    return (
        <div class="blur-overlay-register" >
            <div class="register-container" >
                <button class="close-login"  onClick={closeRegister}>&times;</button>
                <div class="register-logo-container">
                    <img src={website_logo} class="register-logo" />
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

                    <div class="registerbtn-container">
                        <button type="submit" class="registerbtn">Register</button>
                    </div>

                </form>
            </div>
        </div>
    )
}