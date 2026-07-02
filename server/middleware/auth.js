import { fileURLToPath } from "url";
import { join, dirname } from "path";

//Set relative paths to serve view from the backend
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const isAuthenticated = (req, res, next) => {
  console.log("session:", req.session);
  console.log("isLoggedIn:", req.session.isLoggedIn);
  if (req.session.isLoggedIn) {
    return next();
  } else {
    return res.status(401).sendFile(join(__dirname, "../views/login.html"));
  }
};
