import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import currencyRouter from "./routes/currency.route.js";

dotenv.config({});

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, {'Content-Type': 'text/plain'});
  // Write some text to the response
  res.end('Welcome to my simple Node.js app!');
});

app.use("/api/v1/currency", currencyRouter);

app.get("/healthcheck", (req, res) => {
  res.json({ status: "Server Running!" });
});

app.listen(PORT, () => {
  console.log("Server Running on Port :", PORT);
});

module.exports = app;
