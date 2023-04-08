const { model, Schema } = require("mongoose");

const filmsSchema = Schema({
  title: {
    type: String,
    required: [true, "DB: title is required"],
  },
  director: {
    type: String,
    default: "Bogdan Berezka",
  },
  year: {
    type: Number,
    required: [true, "DB: year is required"],
  },
  rating: {
    type: Number,
    default: 0.0,
  },
});

module.exports = model("films", filmsSchema);
