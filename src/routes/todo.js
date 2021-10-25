const { Router } = require("express");
const Controller = require("../controllers/todo");

const router = Router();

router.get("/todos", Controller.list);
router.get("/todos/:id", (req, res) => Controller.get(req, res));
router.put("/todos/:id", (req, res) => Controller.update(req, res));
router.post("/todos", (req, res) => Controller.create(req, res));
router.delete("/todos/:id", (req, res) => Controller.remove(req, res));
router.get("/tags/:tagId/todos", (req, res) => Controller.findByTag(req, res));

module.exports = router;
