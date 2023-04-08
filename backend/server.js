const dotenv = require("dotenv");
const path = require("path");
const express = require("express");
require("colors");
const connectDB = require("../config/connectDB");

const envPath = path.join(__dirname, "..", "config", ".env");
dotenv.config({ path: envPath });

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//setRoutes
app.use("/api/v1", require("./routes/filmsRoutes"));

connectDB();

app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}`.green.italic.bold)
);
