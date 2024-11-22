const mongoose = require("mongoose");

const predictedSchema = new mongoose.Schema (
  {
    STT: Number,
    Country: String,
    Name: String,
    Continents: String,
    Actual: Number,
    Predicted: Number
  }
);

const Predicted = mongoose.model("Predicted", predictedSchema, "predicted");

module.exports = Predicted;