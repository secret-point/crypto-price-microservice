const express = require("express");
const dotenv = require("dotenv");
const { priceRouter } = require("./routes");

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 5000;

app.get("/", (req, res) => res.send("Welcome!"));
app.use("/api", priceRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
