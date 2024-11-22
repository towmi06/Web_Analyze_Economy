const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    STT: Number,
    Country: String,
    Code: String,
    Name: String,
    Continents: String,
    RateUserInternet: Number,
    SmartDevice: Number,
    RevenueEcomPlat: Number,
    RevenueItIndustry: Number,
    FundingDigital: Number,
    ForeignInvestment: Number,
    CreditBanking: Number,
    NumOfEnterprises: Number,
    EcoGrowthRate: Number,
    NumOfTechnology: Number,
    Year: Number
  } 
);

const digeco = mongoose.model("digeco", dataSchema, "data");

module.exports = digeco;