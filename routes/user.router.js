const router = require("express").Router();
const UserController = require("../controllers/user.controller");
const validate = require("../validations/user.validation");

router.post("/", validate.userDataValidateSchemaBased, UserController.addUser);

module.exports = router;