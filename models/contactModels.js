const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    // user id: user who is creating this contact
    // user id is created in the mongoDb & thats where we have object id
    // reference model-Users
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Users",
    },
    name: {
        type: String,
        required: [true, "Contact name is mandatory"],
    },
    email: {
        type: String,
        required: [true, "Add the email for contact"],
    },
    phone: {
        type: Number,
        required: [true, "Enter the phone number for the contact"],
    },
    location: {
        type: String,
        required: [true, "Please provide your location"]
    },
},
{
    timestamps: true
});

module.exports = mongoose.model("Contacts", ContactSchema);