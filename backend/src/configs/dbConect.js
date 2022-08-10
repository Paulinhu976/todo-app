import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const username = process.env.USERNAMEMONGO;
const password = process.env.PASSWORDMONGO;

mongoose.connect(
  `mongodb+srv://${username}:${password}@learning-node.5td13uw.mongodb.net/api-node`
);

const db = mongoose.connection;

export default db;
