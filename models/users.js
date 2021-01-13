const mongoose = require('mongoose');

const schema = {
    firstname: {
        type: String,
        required: [true, "No `firstname` field in request"],
        trim: true
    },
    lastname: {
        type: String,
        required: [true, "No `lastname` field in request"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "No `email` field in request"],
        trim: true
    },
    mobile: {
        type: String,
        required: [true, "No `mobile` field in request"]
    },
    id: {
        type: String,
        required: true
    }
}
 
const userSchema = mongoose.Schema(schema)

let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     
    // Validates the email field.
    userSchema.path('email').validate(function (email) {
        return emailRegex.test(email); // Assuming email has a text attribute
     }, 'The e-mail is not a valid e-mail.')
    
    
module.exports = mongoose.model('users', userSchema)