import express from "express";
import authRoute from "./routes/auth.routes.js";
const app = express();

const PORT = 5000;
app.use("/auth", authRoute);
app.listen(PORT, () => {
  console.log("Server Listend at ", PORT);
});
