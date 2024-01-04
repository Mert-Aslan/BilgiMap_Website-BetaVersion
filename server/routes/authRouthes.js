const express = require("express")
const router = express.Router()
const cors = require("cors")
const {test, registerUser, loginUser, getProfile}  = require("../controllers/authControlles")
const {getEvents, assignToCalendar} = require("../controllers/calController.js")

//middlewate
router.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000"
    })
)

router.get("/",test)
router.post("/login", loginUser)
router.post("/register",registerUser)
router.get("/profile", getProfile)

router.get("/events", getEvents)
router.post("/create-event", assignToCalendar)


module.exports = router