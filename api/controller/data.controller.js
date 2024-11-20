const digeco = require("../models/data.model");

//[get]/api/data
module.exports.index = async (req, res) => {
  const find = {};

  if (req.query.Year) {
    find.Year = req.query.Year;
  }
  if (req.query.Continents) {
    find.Continents = req.query.Continents;
  }
  if (req.query.Country) {
    find.Country = req.query.Country;
  }
  const data = await digeco.find(find);
  res.json(data);
};

//[get]/api/data/numOf
module.exports.numberOf = async (req, res) => {
  const find = {};

  if (req.query.Year) {
    find.Year = req.query.Year;
  }
  if (req.query.Continents) {
    find.Continents = req.query.Continents;
  }
  if (req.query.Country) {
    find.Country = req.query.Country;
  }
  const data = await digeco.find(find).select("Country Continents NumOfEnterprises NumOfTechnology Year");
  res.json(data);
}

//[get]/api/data/rateSmartCre
module.exports.rateSmartCre = async (req, res) => {
  const find = {};

  if (req.query.Year) {
    find.Year = req.query.Year;
  }
  if (req.query.Continents) {
    find.Continents = req.query.Continents;
  }
  if (req.query.Country) {
    find.Country = req.query.Country;
  }
  const data = await digeco.find(find).select("Country Continents RateUserInternet SmartDevice CreditBanking Year");
  res.json(data);
}

//[get]/api/data/ecogrow
module.exports.ecogrow = async (req, res) => {
  const find = {};

  if (req.query.Year) {
    find.Year = req.query.Year;
  }
  if (req.query.Continents) {
    find.Continents = req.query.Continents;
  }
  if (req.query.Country) {
    find.Country = req.query.Country;
  }
  const data = await digeco.find(find).select("Country Continents EcoGrowthRate Year");
  res.json(data);
}

//[get]/api/data/refunfor
module.exports.refunfor = async (req, res) => {
  const find = {};

  if (req.query.Year) {
    find.Year = req.query.Year;
  }
  if (req.query.Continents) {
    find.Continents = req.query.Continents;
  }
  if (req.query.Country) {
    find.Country = req.query.Country;
  }
  const data = await digeco.find(find).select("Country Continents RevenueEcomPlat RevenueItIndustry FundingDigital ForeignInvestment Year");
  res.json(data);
}

//[get]/api/data/selectCountry
module.exports.selectCountry = async (req, res) => {
  const find = {};

  if (req.query.Year) {
    find.Year = req.query.Year;
  }
  const data = await digeco.find(find).select("Country Continents");
  res.json(data);
}

//[get]/api/data/selectYear
module.exports.selectYear = async (req, res) => {
  const find = {};

  if (req.query.Country) {
    find.Country = req.query.Country;
  }
  const data = await digeco.find(find).select("Year");
  res.json(data);
}

//[get]/api/data/datacountry
module.exports.dataCountry = async (req, res) => {
  const find = {};

  if (req.query.Year) {
    find.Year = req.query.Year;
  }
  const data = await digeco.find(find).select("Name Code RateUserInternet SmartDevice RevenueEcomPlat");
  res.json(data);
}

//update data
module.exports.upDate = async (req, res) => {
  const id = req.params.id;
  const updates = {
    RateUserInternet: req.body.RateUserInternet,
    SmartDevice: req.body.SmartDevice,
    RevenueEcomPlat: req.body.RevenueEcomPlat,
    RevenueItIndustry: req.body.RevenueItIndustry,
    FundingDigital: req.body.FundingDigital,
    ForeignInvestment: req.body.ForeignInvestment,
    CreditBanking: req.body.CreditBanking,
    NumOfEnterprises: req.body.NumOfEnterprises,
    EcoGrowthRate: req.body.EcoGrowthRate,
    NumOfTechnology: req.body.NumOfTechnology
  }


  const data = await digeco.findOne({
    _id: id
  });
  if (!data) {
    res.json({
      message: "Không tồn tại quốc gia này"
    });
    return;
  }
  await digeco.updateOne({ _id: id },
    { $set: updates}
  )
  res.json([{
    message: "Cập nhật dữ liệu thành công"
  }]);
}
