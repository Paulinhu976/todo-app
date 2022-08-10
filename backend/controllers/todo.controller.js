import { StatusCodes as HTTP_STATUS_CODES } from "http-status-codes";

import todoService from "../services/todo.service.js";

function getaAll(req, res) {
  const todos = todoService.getAllTodos();
  res.send(todos);
}

export function getById(req, res) {
  const id = req.params["id"]; //mesma coisa que o req.params.id
  const todo = todoService.getTodoById(id); //percorrendo a lista de todos para encontrar o id semelhante

  if (!todo) {
    res.status(HTTP_STATUS_CODES.NOT_FOUND).send();
    return;
  }
  res.send(todo);
}

export function create(req, res) {
  const body = req.body;

  if (Object.keys(body).length === 0) {
    res.status(HTTP_STATUS_CODES.BAD_REQUEST).send();
    return;
  }

  const newTodo = todoService.createTodo(body);

  res.status(HTTP_STATUS_CODES.CREATED).send(newTodo);
}

export function updateById(req, res) {
  const id = req.params["id"];
  const body = req.body;

  if (Object.keys(body).length === 0) {
    res.status(HTTP_STATUS_CODES.BAD_REQUEST).send();
    return;
  }

  const index = todoService.getIndexById(id);
  if (index === -1) {
    res.status(HTTP_STATUS_CODES.NOT_FOUND).send();
    return;
  }

  todoService.updateTodoById(id, body);

  res.status(HTTP_STATUS_CODES.NO_CONTENT).send();
}

export function deleteById(req, res) {
  const id = req.params["id"];
  const index = todoService.getIndexById(id);

  if (index === -1) {
    res.status(HTTP_STATUS_CODES.NOT_FOUND).send();
    return;
  }
  todoService.deleteTodoById(id);
  res.status(HTTP_STATUS_CODES.NO_CONTENT).send();
}

export default {
  getaAll,
  getById,
  create,
  updateById,
  deleteById,
};
