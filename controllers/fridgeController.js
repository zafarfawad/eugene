const db = require("../models");

// Defining methods for the investorsController
module.exports = {
  findAll: function(req, res) {
    console.log(req.body)
    db.Fridge
      .find(req.body)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Fridge
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body);
    db.Fridge
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Fridge
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    console.log(req.params);

    db.Fridge
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  giphy: function(req,res){
    console.log('BE URL', req.body)
    axios
    .get(URL)
    //   axios.get(BASEURL)
    .then(function(articles) {
      // We have access to the day as an argument inside of the callback function
      res.json(articles.data);
    });
}

};