const express = require("express")
const router = express.Router()
const cors = require("cors")
const {bringEvent, assignToCalendar} = require("../controllers/calController.js")

//middlewate
router.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000"
    })
)

router.post("/calendar", bringEvent)
router.post("/create-event", assignToCalendar)




//module.exports = router