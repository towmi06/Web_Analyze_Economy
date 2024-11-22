const Swot = require("../models/swot.model");

module.exports.index = async (req, res) => {
  const find = {};
  
  if (req.query.Country) {
    find.Country = req.query.Country;
  }
  
  const dataSwot = await Swot.find(find);
  res.json(dataSwot);
};