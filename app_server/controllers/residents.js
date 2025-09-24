var fs = require('fs');
var animals = JSON.parse(fs.readFileSync('./data/animals.json', 'utf8'));

/* Get residents view */
const residents = (req, res) => {
    console.log('animals:', animals);
    res.render('residents', { title: 'Wild Oasis Animal Sanctuary', animals});
};

module.exports = {
    residents
};