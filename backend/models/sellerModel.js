const { Schema, model, Types } = require('../connection');

const myschema = new Schema({
    name : String,
    description : String,
    email : String,
    password : String,
    avatar: String,
    
    phone:Number,
    gender:String,
    address:String,

    pincode:Number,
    city:String,
    state:String,
    createdAt: Date,
    

});

module.exports = model('sellers',myschema);