import express from "express";
import todoController from "../controllers/todo.controller.js";

const router = express.Router();

router
  .get("/", todoController.getaAll)
  .get("/:id", todoController.getById)
  .post("/", todoController.create)
  .put("/:id", todoController.updateById)
  .delete("/:id", todoController.deleteById);

export default router;
