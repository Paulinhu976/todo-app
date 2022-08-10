import { randomUUID } from "crypto";
const todos = [
  {
    id: "f097d414-4cca-40df-8b01-32c616b2dfc9",
    title: "Estudar Node.JS",
    description: "Aprender Node.JS criando uma API simples",
    createdAt: "2022-08-10T17:42:18.469Z",
    updatedAt: "2022-08-10T17:42:18.469Z",
    isCompleted: false,
  },
  {
    id: "cae6004f-a038-449e-9c11-3d9512759e8c",
    title: "Estudar TypeScrypt",
    description: "Aprender TypeScrypt e criar um projeto simples para teste",
    createdAt: "2022-08-08T17:42:18.469Z",
    updatedAt: "2022-08-08T17:42:18.469Z",
    isCompleted: false,
  },
  {
    id: "9ba445e0-7394-49bc-b052-ff2b41b59dff",
    title: "Estudar Nest.JS",
    description: "Aprender NestJS criando uma API simples",
    createdAt: "2022-08-07T17:42:18.469Z",
    updatedAt: "2022-08-07T17:42:18.469Z",
    isCompleted: false,
  },
];

function getAllTodos() {
  return todos;
}
function getTodoById(id) {
  const todo = todos.find((todo) => todo.id === id);
  return todo;
}
function createTodo(obj) {
  const date = new Date().toISOString();

  const newTodo = {
    ...obj,
    id: randomUUID(),
    createdAt: date,
    updatedAt: date,
    isCompleted: false,
  };
  todos.push(newTodo);

  return newTodo;
}
function updateTodoById(id, partialTodo) {
  const date = new Date().toISOString();
  const index = getIndexById(id);
  const todo = todos[index];

  todos[index] = { ...todo, ...partialTodo, updatedAt: date };
}
function deleteTodoById(id) {
  const index = getIndexById(id);
  todos.splice(index, 1);
}

function getIndexById(id) {
  const index = todos.findIndex((todo) => todo.id === id);
  return index;
}

export default {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodoById,
  deleteTodoById,
  getIndexById,
};
