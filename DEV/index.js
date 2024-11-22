const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const database = require("./config/database");
const cors = require("cors");
//Route v1
const routes = require("./api/routers/index.route");

database.connect();

const app = express();
const port = process.env.PORT;

// const corsOptions = {
//   origin: "http://example.com",
// };

app.use(cors());
//parse application/json
app.use(bodyParser.json());

//Route v1
routes(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});