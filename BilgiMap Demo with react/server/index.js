const express = require("express")
const dotenv = require("dotenv").config()
const cors = require("cors")
const mongoose = require("mongoose")
const app = express();



// database connection
mongoose.connect(process.env.MOONGO_URL)
.then(() => console.log("Database connected"))
.catch(() => console.log("Database not connected"))

//middleware
app.use(express.json())




app.use("/", require("./routes/authRouthes"))


const port = 8000;
app.listen(port, () => console.log(`server is runnign on port ${port}`))