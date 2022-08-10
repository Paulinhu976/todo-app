import { StatusCodes as HTTP_STATUS_CODES } from "http-status-codes";
import todos from "../models/Todo.js";
import { internalServerError, badRequest } from "../utils/utils.js";

function getaAll(req, res) {
  // const todos = await todoService.getAllTodos();
  // res.send(todos);
  todos.find((error, result) => {
    if (error) return internalServerError(res);

    res.send(result);
  });
}

function getById(req, res) {
  const id = req.params["id"]; //mesma coisa que o req.params.id

  todos.findById(id, (error, result) => {
    if (error) {
      res.status(HTTP_STATUS_CODES.NOT_FOUND).send();
      return;
    }
    res.send(result);
  });
}

function create(req, res) {
  const body = req.body;

  if (Object.keys(body).length === 0) return badRequest(res);

  const date = new Date().toISOString();
  const newTodo = {
    ...body,
    createdAt: date,
    updatedAt: date,
    isCompleted: false,
  };

  const todo = new todos(newTodo);

  todo.save((error) => {
    if (error) {
      const { message } = error;
      res.status(HTTP_STATUS_CODES.BAD_REQUEST).send({ error: message });
      return;
    }
    res.status(HTTP_STATUS_CODES.CREATED).send(todo.toJSON());
  });
}

function updateById(req, res) {
  const id = req.params["id"];
  const body = req.body;

  if (Object.keys(body).length === 0) {
    res.status(HTTP_STATUS_CODES.BAD_REQUEST).send();
    return;
  }

  todos.findByIdAndUpdate(id, { $set: body }, (error) => {
    if (error) return internalServerError(res);

    res.send({ message: "Todo sucessfully updated." });
  });
}

function deleteById(req, res) {
  const id = req.params["id"];

  todos.findByIdAndDelete(id, (error) => {
    if (error) return internalServerError(res);

    res.status(HTTP_STATUS_CODES.NO_CONTENT).send();
  });
}

export default {
  getaAll,
  getById,
  create,
  updateById,
  deleteById,
};
