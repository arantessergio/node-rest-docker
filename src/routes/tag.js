const { Router } = require("express");
const Controller = require("../controllers/tag");

const router = Router();

router.get("/tags", Controller.list);
router.post("/tags", (req, res) => Controller.create(req, res));
router.delete("/tags/:id", (req, res) => Controller.remove(req, res));

module.exports = router;
