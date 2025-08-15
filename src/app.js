const compression = require("compression");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();

// init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// init db
require("./db/init.mongodb");
const { checkOverLoad } = require("./helpers/check.connect");
checkOverLoad();

// init routes
app.get("/", (req, res, next) => {
  //   const stringCompress = "Nguyễn Thiên Ân";
  return res.status(200).json({
    message: "Welcome PixelSmith",
    // metadata: stringCompress.repeat(10000),
  });
});

// handling error

module.exports = app;
