const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");
const databaseConfig = require("./config/database");
const todoRouter = require("./src/routes/todo");
const tagRouter = require("./src/routes/tag");

const app = express();

mongoose.connect(databaseConfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

require("./src/models/todo");
require("./src/models/tag");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(helmet());
app.use(cors());

app.use(todoRouter);
app.use(tagRouter);

app.listen(process.env.SERVER_PORT, () => {
  console.log("TODO API is running...");
});
