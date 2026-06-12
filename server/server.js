import "./config/env.js";
import express from "express";
import mongoose from "mongoose";
import connectDb from "./config/db.js";
import apiRouter from "./routes/api.routes.js";
import session from "express-session";
import MongoStore from "connect-mongo";
import isAuthenticated from "./middleware/isAuthenticated.js";

const app = express();

//Middleware
app.use(express.static("client"));
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URL }),
    ttl: 60 * 60 * 24, //Session cleaned up from DB after 24 hours
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
      secure: false,
    },
  }),
);

app.use("/api", apiRouter);
app.use("/admin", isAuthenticated);

app.listen(process.env.PORT, () => {
  console.log("Connection Live");
  connectDb();
});
