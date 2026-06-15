import { Router } from "express";
import {
  serveLogin,
  isAdmin,
  serveDashboard,
} from "../controllers/admin.controller.js";
import { createBlogPost } from "../controllers/blog.controller.js";
import { isAuthenticated } from "../middleware/auth.js";
const router = Router();

router.get("/login", serveLogin);
router.post("/login", isAdmin);
router.get("/dashboard", isAuthenticated, serveDashboard);
router.post("/createBlog", isAuthenticated, createBlogPost);

export default router;
