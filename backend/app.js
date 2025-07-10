import express from "express";

const app = express();

const PORT = 5000;
app.get("/", (req, res) => {
  res.send("Server gets your request!");
});
app.listen(PORT, () => {
  console.log("Server Listend at ", PORT);
});
