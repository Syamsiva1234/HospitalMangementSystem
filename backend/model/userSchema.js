const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        match: [/^[A-Za-z0-9_]+$/g, `please enter valid username`]
    },
    email: {
        type: String,
        required: true,
        match: [/^\S+@\S+\.\S+$/g, `Please fill valid email address`],

    },
    contact: {
        type: Number,
        required: true,
        match: [/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g, `please enter valid phone number`]
    },
    id: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    milestone: {
        type: String,
        required: true
    },
    devices: {
        type: String,
        required: true
    },
    intimations: {
        type: String,
        required: true
    },
    abstract: {
        type: String,
        required: true
    }
})

const User = mongoose.model('patients', userSchema)

module.exports = User;