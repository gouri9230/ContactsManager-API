const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter a username"]
    },
    email_id: {
        type: String,
        required: [true, "Please add the email address"],
        unique: [true, "Email address already taken"]
    },
    password: {
        type: String,
        required: [true, "Please enter the password"]
    }
},
{
    timestamps: true
});
// "Users is the model name that we import and use in controllers"
module.exports = mongoose.model("Users",UserSchema);