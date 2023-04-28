const { Schema, model, Types } = require('../connection');

const myschema = new Schema({
    title : String,
    description : String,
    price : Number,
    category: String,
    image: String,
    createdAt: Date,

});

module.exports = model('equipment',myschema);