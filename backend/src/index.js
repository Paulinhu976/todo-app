import express from "express";
import routes from "./routes/index.js";
import db from "./configs/dbConect.js";

db.on("error", (e) => console.log(console, e));
db.once("open", () => console.log("🟢 Database connection established"));

const PORT = process.env.PORT || 3000;

const app = express();
routes(app);

app.listen(PORT, () => {
  console.log(`🟢 Server is running on ${PORT}: http://localhost:${PORT}`);
});
