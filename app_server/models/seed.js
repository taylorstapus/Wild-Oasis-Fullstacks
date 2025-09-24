//Bring in the DB connection and the Animal schema
const Mongoose = require('./db');
const Animal = require('./sanctuary');

// Read seed data from json file 
var fs = require('fs');
var animals = JSON.parse(fs.readFileSync('./data/animals.json','utf8'))

//Delete and existing records, then insert seed data 
const seedDB = async() => {
    await Animal.deleteMany({});
    await Animal.insertMany(animals);
};

//Close the MonoDB connection and exit 
seedDB().then(async () => {
    await Mongoose.connection.close();
    process.exit(0)
});