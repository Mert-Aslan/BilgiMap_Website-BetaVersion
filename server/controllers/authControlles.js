
const User = require("../models/user")
const {hashPassword, comparePassword} = require("../helpers/auth.js")

const test = (req, res) => {
    res.json("test is working")
}

//register Endpoint
const registerUser = async (req, res) => {
    try {
        const { name, lastname, email, password } = req.body;
        //check if name was entered
        if (!name) {
            return res.json({
                error: "Name is required"
            })
        }
        //check lastname
        if (!lastname) {
            return res.json({
                error: "Last Name is required"
            })
        }
        //check password
        if (!password || password.length < 6) {
            return res.json({
                error: "Password is required and should be at leas 6 chracters long"
            })
        }
        //check email
        const exit = await User.findOne({ email })
        if (exit) {
            return res.json({
                error: "Email is taken already"
            })
        }
        //Create user in Database
        const hashedPassword = hashPassword(password)
        const user = User.create({ name, lastname, email, password})
        return res.json(user)

    } catch (error) {
        console.log(error)
    }
};

//Login Endpoint
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        //Check if user exits
        const user = await User.findOne({ email })
        if (!user) {
            return res.json({
                error: "No User Found"
            })
        }

        //check if passwords match
        const match = await comparePassword(password, user.password);
        if(password == user.password){
            res.json("password match")
        }

    } catch (error) {
        
    }
}





module.exports = {
    test,
    registerUser,
    loginUser
}