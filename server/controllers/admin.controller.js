import { fileURLToPath } from "url";
import { join, dirname } from "path";

//Prepare the relative path value to serve auth protected views to admin
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Serve admin login view
export const serveLogin = (req, res) => {
  if (req.session.isLoggedIn) {
    return res.redirect("/admin/dashboard");
  } else {
    return res.sendFile(join(__dirname, "../views/login.html"));
  }
};

//Check if username and password are correct
export const isAdmin = (req, res) => {
  if (
    req.body.username === process.env.ADMIN_USERNAME &&
    req.body.password === process.env.ADMIN_PASSWORD
  ) {
    req.session.username = req.body.username;
    req.session.isLoggedIn = true;
    return res.status(200).sendFile(join(__dirname, "../views/dashboard.html"));
  } else {
    return res.status(401).sendFile(join(__dirname, "../views/login.html"));
  }
};

//Serve admin dashboard view
export const serveDashboard = (req, res) => {
  res.sendFile(join(__dirname, "../views/dashboard.html"));
};

//Logout by destroying session, will need to login to access dashboard again
export const logout = (req, res) => {
  try {
    req.session.destroy();
    return res.status(200).sendFile(join(__dirname, "../views/login.html"));
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: `Could not delete session: ${error}` });
  }
};
