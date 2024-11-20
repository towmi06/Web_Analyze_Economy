const dataRoute = require("./digeco.route");
const swotRoute = require("./swot.route");
const userRoute = require("./users.route");
const predictedRouter = require("./predicted.route");

module.exports = (app) => {
  const version = "/api";

  app.use(version + '/data', dataRoute);
  app.use(version + '/swot', swotRoute);
  app.use(version + '/user', userRoute);
  app.use(version + '/predicted', predictedRouter);

};