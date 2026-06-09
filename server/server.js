import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDb from "./config/db.js";

dotenv.config();

const app = express();

app.use(express.static("client"));
// app.use("/", stockRoutes);

app.listen(process.env.PORT, () => {
  console.log("Connection Live");
  connectDb();
});
