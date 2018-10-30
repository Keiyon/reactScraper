const router = require("express").Router();
const nytController = require("../../controllers/nytController");

//router.route("/")

router 
    .route(":/id")
    .get(nytController.findById)
    .put(nytController.saved)
    .delete(nytController.remove);

module.exports = router;