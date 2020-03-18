

const mongoose = require("mongoose")
var passportLocalMongoose = require("passport-local-mongoose");
//const Schema = mongoose.Schema

const UserSchema = new mongoose.Schema ({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

UserSchema.plugin(passportLocalMongoose)
module.exports = User = mongoose.model('user', UserSchema)