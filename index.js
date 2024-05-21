import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import currencyRouter from "./routes/currency.route.js";

dotenv.config({});

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/api/v1/currency", currencyRouter);

app.get("/healthcheck", (req, res) => {
  res.json({ status: "Server Running!" });
});

app.listen(PORT, () => {
  console.log("Server Running on Port :", PORT);
});
