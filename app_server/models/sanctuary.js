const mongoose = require('mongoose'); 
// Define the animal schema 
const animalSchema = new mongoose.Schema({ 
    code: { type: String, required: true, index: true }, 
    name: { type: String, required: true, index: true },  
    img: { type: String, required: true }, 
    description: { type: String, required: true } 
}); 
const Animal = mongoose.model('animals', animalSchema); 
module.exports = Animal;