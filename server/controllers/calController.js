const Calendar = require("../models/calendar")

const assignToCalendar = async (req,res) => {
    try {
        const {name, date, description, type } = req.body;
        //check if name was entered
        if (!name) {
            
            return res.json({
                error: "Name is required"
            })
        }else{
            console.log(name)
        }
        //check date
        if (!date) {
            console.log(date)
            return res.json({
                error: "Date is required"
            })
        }
        //check description
        if (!description) {
            return res.json({
                error: "Description is required"
            })
        }
        //check type
        if (!type) {
            return res.json({
                error: "Type is required"
            })
        }
        
        //create calendar event in Database
        const calendar = Calendar.create({name,date,description,type})
        return res.json(calendar)

    } catch (error) {
        console.log(error)
    }
}

//bring event records

const bringEvent = async (req,res) => {
    try {
        Calendar.find({}).then((recs) => {
            res.send(recs)
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    bringEvent,
    assignToCalendar
}