const express = require("express");
const cors = require("cors");
const PORT = 8000;
const app = express();
app.use(cors({ origin: "*" }));

app.get("/api/greet", (req, res) => {
  const { name } = req.query;

  if (name) {
   return  res.send(`Hello, ${name}! Welcome to Younglabs.`);
  }

  return res.send("Name is required.");
});

app.listen(PORT, () => {
  console.log("Server Started Sucessfully at localhost:", PORT);
});
