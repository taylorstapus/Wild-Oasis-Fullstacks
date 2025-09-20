/* Get residents view */
const residents = (req, res) => {
    res.render('residents', { title: 'Wild Oasis Animal Sanctuary'});
};

module.exports = {
    residents
};