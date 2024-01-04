import {Routes,Route, BrowserRouter} from "react-router-dom"
import axios from "axios"
import {Toaster} from "react-hot-toast"
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
import ReactBigCalendar from "./calendar/ReactBigCalendar"


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
                <Route path="/calendar" element = {<ReactBigCalendar/>} />
            </Routes>
               
        </BrowserRouter>
        </UserContextProvider>
    )
}