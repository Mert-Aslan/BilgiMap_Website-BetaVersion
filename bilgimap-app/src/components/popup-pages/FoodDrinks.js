import "../Common.css"
import {  useNavigate } from "react-router-dom";

export default function FoodDrinks(){
    const navigate = useNavigate()
    const closeLogin = () => {
        document.body.style.overflow = "auto"
        navigate("/");
      }

    return(
        <div>
            FoodDrinks
        </div>
    )
}