import react from "react"
import Navbar from "./components/Navbar"
import Body from "./components/Body"
import Footer from "./components/Footer"
import {Routes,Route, BrowserRouter} from "react-router-dom"
import About from "./components/popup-pages/About"
import Login from "./components/popup-pages/Login"
import Register from "./components/popup-pages/Register"
import axios from "axios"
import {Toaster} from "react-hot-toast"
import LogoSection from "./components/LogoSection"
import BuildingInfo from "./components/popup-pages/BuildingInfo"
import EnergyMuseum from "./components/popup-pages/EnergyMuseum"
import FoodDrinks from "./components/popup-pages/FoodDrinks"
import StudyPlaces from "./components/popup-pages/StudyPlaces"
import { UserContextProvider } from "./context/userContext"
import Home_Login from "./pages/Home_Login"
import Home_Register from "./pages/Home_Register"
import Home_About from "./pages/Home_About"
import Home_BuildingInfo from "./pages/Home_BuilgdingInfo"
import Home_EnergyMuseum from "./pages/Home_EnergyMuseum"
import Home_FoodDrinks from "./pages/Home_FoodDrinks"
import Home_StudyPlaces from "./pages/Home_StudyPlaces"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"


axios.defaults.baseURL = "http://localhost:8000/"
axios.defaults.withCredentials = true

export default function Main(){
    return(
        <UserContextProvider>
        <BrowserRouter>
            
            <Toaster position="bottom-right" toastOptions = {{durtation: 2000}} />
            <Routes>
                <Route path="/" element = {<Home />} />
                <Route path="/login" element={<Home_Login />}/>
                <Route path="/register" element={<Home_Register />}/>
                <Route path="/about" element = {<Home_About />}/>
                <Route path="/building-info" element = {<Home_BuildingInfo />}/>
                <Route path="/energy-museum" element = {<Home_EnergyMuseum />}/>
                <Route path="/food-drinks" element = {<Home_FoodDrinks />}/>
                <Route path="/study-places" element = {<Home_StudyPlaces />}/>
                <Route path="/dashboard" element = {<Dashboard />} />
            </Routes>
               
        </BrowserRouter>
        </UserContextProvider>
    )
}