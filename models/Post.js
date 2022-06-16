import mongoose from 'mongoose'

const Schema = mongoose.Schema
const model = mongoose.model
const Types = mongoose.Types

const schema = new Schema({
    name: {type:String, require:true},
    surname: {type:String, require:true},
    email: {type: String, require:true, unique:true},
    password:{type:String, require:true},
    phoneNumber:{type:String, require:true},
    balance: { type:Number, require:true},
    posts: [{type: Types.ObjectId, ref:'Post'}]
})

export default model('User', schema)