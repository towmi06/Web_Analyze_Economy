const Predicted = require("../models/predicted.model");

module.exports.index = async (req, res) => {
  const find = {};

  if (req.query.Continents) {
    find.Continents = req.query.Continents;
  }
  if (req.query.Country) {
    find.Country = req.query.Country;
  }
  const dataPredicted = await Predicted.find(find);
  res.json(dataPredicted);
};