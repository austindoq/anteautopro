import { fileURLToPath } from "url";
import { join, dirname } from "path";

//Prepare the relative path value to serve auth protected views to admin
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const serveLogin = (req, res) => {
  if (req.session.isLoggedIn) {
    return res.redirect("/admin/dashboard");
  } else {
    res.sendFile(join(__dirname, "../views/login.html"));
  }
};

export const isAdmin = (req, res) => {
  if (
    req.body.username === process.env.ADMIN_USERNAME &&
    req.body.password === process.env.ADMIN_PASSWORD
  ) {
    req.session.username = req.body.username;
    req.session.isLoggedIn = true;
    return res.status(200).sendFile(join(__dirname, "../views/dashboard.html"));
  } else {
    return res.status(401).redirect("/admin/login");
  }
};

export const serveDashboard = (req, res) => {
  res.sendFile(__dirname, "../views/dashboard.html");
};
