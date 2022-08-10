import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    id: { type: String },
    title: { type: String, required: true },
    description: { type: String },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
    isCompleted: { type: Boolean, required: true },
  },
  {
    versionKey: false,
  }
);

const todos = mongoose.model("todos", todoSchema);

export default todos;
