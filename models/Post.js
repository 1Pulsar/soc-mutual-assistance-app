import mongoose from 'mongoose'

const Schema = mongoose.Schema
const model = mongoose.model
const Types = mongoose.Types

const schema = new Schema({
    title: {type:String, require:true},
    text: {type:String, require:true},
    price: {type:Number, require: true},
    city: {type:String, require:true},
    date: {type: Date, default: Date.now},
    views: {type: Number, default: 0},
    owner: [{type: Types.ObjectId, ref:'User'}]
})

export default model('Post', schema)