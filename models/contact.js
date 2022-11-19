const mongoose = require('mongoose');
const contactSchema = mongoose.Schema({
    FullName : {
        type : String,
        required : true,
        default : ""
    },
    Phone : {
        type : Number,
        required : true,
        default : 0
    }
});

module.exports = mongoose.model("Contact", contactSchema);