const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    name: {type:String, require:true},
    surname: {type:String, require:true},
    email: {type: String, require:true, unique:true},
    password:{type:String, require:true},
    posts: [{type: Types.ObjectId, ref:'Post'}]
})

module.exports = model('User', schema)