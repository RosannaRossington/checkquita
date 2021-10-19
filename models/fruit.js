import mongoose from 'mongoose';

//Schema - sturcture of document
const Schema = mongoose.Schema
const FruitSchema = new Schema({
    name: String,
    month: String,
    season: String
});

//Model - collection name
const Fruit = mongoose.model('Fruit', FruitSchema)

export default Fruit