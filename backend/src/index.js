import express from "express";

const PORT = 3000;

import todoController from "./controllers/todo.controller.js";

const app = express();
app.use(express.json());

app.get("/", todoController.getaAll);
app.get("/:id", todoController.getById);
app.post("/", todoController.create);
app.put("/:id", todoController.updateById);
app.delete("/:id", todoController.deleteById);

app.listen(PORT, () => {
  console.log(`🟢 Server is running on ${PORT}`);
});
