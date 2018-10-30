
// looking for get, post, delete
const db = require("..models");

module.exports = {

// looking at 11-05-09
saved: function(req, res) {
    db.Article
        .findOne({ _id: req.params.id })
        .then(dbModel => res.json(dbModel)) 
        .catch(err => res.status(422).json(err));

},
        
remove: function(req, res) {
    db.Article
    .findById({ _id: req.params.id })
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
}
};
