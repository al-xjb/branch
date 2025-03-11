// service2/index.js
const express = require("express");
const app = express();
const port = 3003;

const cors = require("cors");
// Enable CORS for all origins
app.use(cors());

app.get("/api/data", (req, res) => {
  res.json({ message: "Service 2 is working!" });
});

app.listen(port, () => {
  console.log(`Service 2 listening at http://localhost:${port}`);
});
