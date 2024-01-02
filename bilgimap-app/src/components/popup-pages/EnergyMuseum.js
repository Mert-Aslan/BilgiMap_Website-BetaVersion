import "../Common.css"
import {  useNavigate } from "react-router-dom";
import Login from "./Login";

export default function EnergyMuseum() {
    const navigate = useNavigate()
    const closeLogin = () => {
        document.body.style.overflow = "auto"
        navigate("/");
    }
    return (
        <div>
            <Login />
        </div>
    )
}