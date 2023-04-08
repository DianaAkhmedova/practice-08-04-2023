const express = require("express");
const filmsRouter = express.Router();

// localhost:5000/api/v1/films
console.log("routes");

const filmsController = require("../controllers/FilmsController");

//Додати один фільм
filmsRouter.post(
  "/films",
  (req, res, next) => {
    console.log("JOI");
    next();
  },
  filmsController.add
);
//Отримати всі фільми
filmsRouter.get("/films", filmsController.getAll);
//Отримати один фільм
filmsRouter.get("/films/:id", filmsController.getOne);
//Оновити один фільм
filmsRouter.put("/films/:id", filmsController.update);
//Видалити один фільм
filmsRouter.delete("/films/:id", filmsController.remove);

module.exports = filmsRouter;
