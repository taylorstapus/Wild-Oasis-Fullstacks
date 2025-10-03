const mongoose = require('mongoose');
const  Animal= require('../models/sanctuary'); //Register model
const Model = mongoose.model('animals');

// List Animals
const animalsList = async (req, res) => {
  const q = await Model.find({}).exec();

  if (!q) {
    
    return res.status(404).json(err);
  } else {
    return res.status(200).json(q);
  }
};

// Get: /animals - list of all animals
const animalsFindByCode = async(req, res) => {
  const q = await Model
    .find({'code' : req.params.animalCode}) //return single record 
    .exec();

    //console.log(q);

  if(!q)
  {//Database return no data
    return res
      .status(404)
      .json(err);
  }
  else{ // Return resulting animals list 
    return res
      .status(200)
      .json(q);
  } 
};

//Adds animals
const animalsAddAnimal = async(req, res) => {
  const newAnimal = new Animal ({
    code: req.body.code,
    name: req.body.name,
    species: req.body.species,
    img: req.body.img,
    description: req.body.description
  });

  const q = await newAnimal.save();

    if (!q)
    {
      return res
        .status(400)
        .json(err);
    } else {
      return res
        .status(201)
        .json(q);

    }
};

//Updates Animals
const animalsUpdateAnimal = async(req, res) => {
  const q = await Model         
  .findOneAndUpdate(             
    { 'code' : req.params.animalCode },             
    {                 
    code: req.body.code,
    name: req.body.name,
    species: req.body.species,
    img: req.body.img,
    description: req.body.description             
    }          
  )         
  .exec();

  if(!q)         
    { // Database returned no data             
      return res                 
      .status(400)                 
      .json(err);

  } else { // Return resulting updated animal             
    return res                 
    .status(201)                 
    .json(q);         
  }  
};

module.exports = {
  animalsList, 
  animalsFindByCode,
  animalsAddAnimal,
  animalsUpdateAnimal
};