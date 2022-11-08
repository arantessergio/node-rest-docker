const { Router } = require("express");
const Controller = require("../controllers/todo");
const { validateToken } = require("../middlewares/auth");

const router = Router();

router.get("/todos", validateToken, Controller.list);
router.get("/todos/:id", validateToken, (req, res) => Controller.get(req, res));
router.put("/todos/:id", validateToken, (req, res) =>
  Controller.update(req, res)
);
router.post("/todos", validateToken, (req, res) => Controller.create(req, res));
router.delete("/todos/:id", validateToken, (req, res) =>
  Controller.remove(req, res)
);
router.get("/tags/:tagId/todos", validateToken, (req, res) =>
  Controller.findByTag(req, res)
);

module.exports = router;
