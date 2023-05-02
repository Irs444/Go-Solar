const {Schema,model,Types}=require('../connection');

const myschema= new Schema({
    name:String,
    phone:Number,
    email:String,
    subject:String,
    message:String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
})

module.exports=model('contact',myschema)