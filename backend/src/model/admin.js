const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// admin--
// name
// email
// password
// phone nu


const adminSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    }


});

const Admin=mongoose.model('Admin',adminSchema);
module.exports = Admin;