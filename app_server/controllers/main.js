/* Get Homepage */
const index = (req, res) => {
    res.render('index', { title: "Wild Oasis Animal Sanctuary"});
};

module.exports = {
    index
};