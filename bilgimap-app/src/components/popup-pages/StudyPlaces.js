import "../Common.css"
import {  useNavigate } from "react-router-dom";

export default function StudyPlaces(){
    const navigate = useNavigate()
    const closeLogin = () => {
        document.body.style.overflow = "auto"
        navigate("/");
      }

    return(
        <div>
            Study Place
        </div>
    )
}