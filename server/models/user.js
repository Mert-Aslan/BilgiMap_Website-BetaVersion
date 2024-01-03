const mongoose = require("mongoose")
const { Schema } = mongoose

const userSchema = new Schema(
    {
        name: String,
        lastname: String,
        email: {
            type: String,
            unique: true,
        },
        password: String,
        calInfo: [
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
        ]
    }

)

const UserModel = mongoose.model("User", userSchema)

module.exports = UserModel