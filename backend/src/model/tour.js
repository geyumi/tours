const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// tours ---
// name
// price
// description
// image

const tourSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    price:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    }


});

const Tour=mongoose.model('Tour',tourSchema);
module.exports = Tour;