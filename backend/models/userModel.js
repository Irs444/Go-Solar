const { Schema, model, Types } = require('../connection');

const myschema = new Schema({
    name : String,
    email : String,
    password : String,
    createdAt: Date,
    avatar: String,

});

module.exports = model('users',myschema);