let mongoose = require("mongoose");
let userSchema = new mongoose.Schema({
    Name : {type : String},
    phone : {type : Number},
    email : {type : String}
})

let user = mongoose.model("users" , userSchema);

module.exports = user;