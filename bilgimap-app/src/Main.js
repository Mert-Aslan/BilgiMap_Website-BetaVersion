import react from "react"
import Navbar from "./components/Navbar"
import Body from "./components/Body"
import Footer from "./components/Footer"
import {Routes,Route, BrowserRouter} from "react-router-dom"
import About from "./components/About"
import Login from "./components/Login"
import Register from "./components/Register"
import axios from "axios"
import {Toaster} from "react-hot-toast"

axios.defaults.baseURL = "http://localhost:8000/"
axios.defaults.withCredentials = true

export default function Main(){
    return(
        <BrowserRouter>
            <Navbar />
            <Toaster position="bottom-right" toastOptions = {{durtation: 2000}} />
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/about" element = {<About />}/>
            </Routes>
            <Body />
            <Footer />
        </BrowserRouter>
        

    )
}