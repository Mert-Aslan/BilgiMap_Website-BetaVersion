import "../Common.css"
import {  useNavigate } from "react-router-dom";
export default function EnergyMuseum() {
    const navigate = useNavigate()
    const closeLogin = () => {
        document.body.style.overflow = "auto"
        navigate("/");
    }
    return (
        <div>
            EnergyMuseum
        </div>
    )
}