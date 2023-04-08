const FilmsModel = require("../models/filmsModel");

class FilmsController {
  add = async (req, res) => {
    try {
      const { title, year } = req.body;
      if (!title || !year) {
        res.status(400).json({
          code: 400,
          message: "CONTROLLER: Provide all requied fields",
        });
      }
      await FilmsModel.create({ ...req.body });
    } catch (error) {
      res.status(400).json({ code: 400, message: error.message });
    }
  };
  getAll = () => {
    console.log("getAll");
  };
  getOne = () => {
    console.log("getOne");
  };
  update = () => {
    console.log("update");
  };
  remove = () => {
    console.log("remove");
  };
}

module.exports = new FilmsController();
