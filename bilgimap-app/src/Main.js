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
import BuildingInfo from "./components/popup-pages/BuildingInfo"
import EnergyMuseum from "./components/popup-pages/EnergyMuseum"
import FoodDrinks from "./components/popup-pages/FoodDrinks"
import StudyPlaces from "./components/popup-pages/StudyPlaces"

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
                <Route path="/building-info" element = {<BuildingInfo />}/>
                <Route path="/energy-museum" element = {<EnergyMuseum />}/>
                <Route path="/food-drinks" element = {<FoodDrinks />}/>
                <Route path="/study-places" element = {<StudyPlaces />}/>
                
            </Routes>
            <Body />
            <Footer />
        </BrowserRouter>
        

    )
}