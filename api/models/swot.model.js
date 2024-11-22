const mongoose = require("mongoose");

const swotSchema = new mongoose.Schema(
  {
    Country: String,
    Name: String,
    Description: Array,
    Continents: String,
    GiaiDoan: Array,
  } 
);

const Swot = mongoose.model("Swot", swotSchema, "swots");

module.exports = Swot;