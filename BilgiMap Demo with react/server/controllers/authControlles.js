const User = require("../models/user")

const test = (req,res) => {
    res.json("test is working")
}

const registerUser = async (req,res) => {
    try {
        const {name, lastname, email, password} = req.body
        //check if name was entered
        if(!name){
            return res.json({
                error: "Name is required"
            })
        }
        //check lastname
        if(!lastname){
            return res.json({
                error: "Last Name is required"
            })
        }
        //check password
        if(!password || password.length < 6){
            return res.json({
                error: "Password is required and should be at leas 6 chracters long"
            })
        }
        //check email
        const exit = await User.findOne({email})
        if(email){
            return res.json({
                error:"Email is taken already"
            })
        }

        const user = User.create({name,lastname,email,password})
        return res.json(user)

    } catch (error) {
        console.log(error)
    }
}

module.exports ={
    test,
    registerUser
}