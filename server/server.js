import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import apiRouter from "./routes/api.routes.js";
dotenv.config();

const app = express();

app.use(express.static("client"));
app.use(express.json());

app.use("/api", apiRouter);

app.listen(process.env.PORT, () => {
  console.log("Connection Live");
  connectDb();
});
