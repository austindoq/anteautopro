import "./config/env.js";
import express from "express";
import mongoose from "mongoose";
import connectDb from "./config/db.js";
import apiRouter from "./routes/api.routes.js";
import adminRouter from "./routes/admin.routes.js";
import session from "express-session";
import MongoStore from "connect-mongo";
import fileURLToPath from "url";
import { dirname, join } from "path";

const app = express();

//Absolute Path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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
      secure: process.env.NODE_ENV === "production",
    },
  }),
);

app.use("/api", apiRouter);
app.use("/admin", adminRouter);

app.use(express.static(join(__dirname, "../client")));

app.listen(process.env.PORT, () => {
  console.log("Connection Live");
  connectDb();
});
