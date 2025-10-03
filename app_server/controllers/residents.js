const animalsEndpoint = "http://localhost:3000/api/animals"; 
const options = { 
  method: "GET", 
  headers: { 
    Accept: "application/json", 
  }, 
}; 

//var fs = require('fs');

//var animals = JSON.parse(fs.readFileSync('./data/animals.json', 'utf8'));


/* GET residents view */
const residents = async function (req, res, next) {
  await fetch(animalsEndpoint, options)
  .then((res) => res.json())
  .then((json) => {
    let message = null;
    if(!(json instanceof Array)) {
      message = "API lookup error";
      json = [];
    }
    else {
      if (!json.length) {
        message = "No animals exists in our database!";
      }
    }
    res.render('residents', { title: 'Wild Oasis Animal Sanctuary', animals: json, message });
  })
  .catch((err) => res.status(500).send(err.message));
};

module.exports = {
  residents
};