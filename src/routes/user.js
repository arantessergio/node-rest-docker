const { Router } = require("express");
const Controller = require("../controllers/user");

const router = Router();

router.post("/users", (req, res) => Controller.create(req, res));
router.post("/users/auth", (req, res) => Controller.auth(req, res));

module.exports = router;
