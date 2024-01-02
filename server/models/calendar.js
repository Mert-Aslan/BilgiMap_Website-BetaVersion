const mongoose = require("mongoose")
const {Schema} = mongoose

const calendarSchema = new Schema(
    {
        name: {
            type: String,
        },
        date: {
            type: String,
        },
        description: {
            type: String,
        },
        type: {
            type: String,
            enum : ["holiday","event","birthday"],
        },
    }
)

const CalendarModal = mongoose.model("Calendar", calendarSchema)

module.exports = CalendarModal