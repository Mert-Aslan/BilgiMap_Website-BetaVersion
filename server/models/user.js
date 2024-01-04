const mongoose = require("mongoose")
const { Schema } = mongoose

const events = new Schema(
    {
        events: [
            {
                id: {
                    type: Number,
                },
                title: {
                    type: String,
                },
                start: {
                    type: Date,
                },
                end: {
                    type: Date,
                },
            }
        ]
}
)

const userSchema = new Schema(
    {
        name: String,
        lastname: String,
        email: {
            type: String,
            unique: true,
        },
        password: String,
    }

)

const UserModel = mongoose.model("User", userSchema)

module.exports = UserModel