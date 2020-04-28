const express = require("express");

const { index, store, show, destroy } = require("./entity/task/controller.js");

const { validate } = require("./entity/task/validations.js");

const router = express.Router();

router.get("/tareas", index);

router.post("/tareas", validate, store);

router.get("/tareas/:id([0-9]+)", show);

router.delete("/tareas/:id([0-9]+)", destroy);

module.exports = router;