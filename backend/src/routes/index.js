import express from "express";
import todoRoutes from "./todoRoutes.js";

function routes(app) {
  app.use(express.json());
  app.use(todoRoutes);
}

export default routes;
