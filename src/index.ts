import path from "path";
import express from "express";
import { errorHandler } from "./middleware/errorHandler";

const app = express();
const port: number = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", require("./routes/index.js"));

app.use(errorHandler);

app.listen(port, "0.0.0.0", () => {
  console.log(`app listening on port ${port}`);
});
