module.exports = function (passport) {
const path = require("path");
const router = require("express").Router();
const fridgeController = require("../controllers/fridgeController.js");

router.route("/")
  .get(fridgeController.findAll)
  .post(fridgeController.create)

  router.route("/")
  .get(fridgeController.giphy)


router
  .route("/:id")
  .post(fridgeController.update)
  .get(fridgeController.findById)
  .delete(fridgeController.remove)

	return router;
};

