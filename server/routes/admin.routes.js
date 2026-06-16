import { Router } from "express";
import {
  serveLogin,
  isAdmin,
  serveDashboard,
} from "../controllers/admin.controller.js";
import {
  createBlogPost,
  deleteBlogPost,
} from "../controllers/blog.controller.js";
import { isAuthenticated } from "../middleware/auth.js";
const router = Router();

router.get("/login", serveLogin);
router.post("/login", isAdmin);
router.get("/dashboard", isAuthenticated, serveDashboard);
router.post("/createBlog", isAuthenticated, createBlogPost);
router.delete("/deleteBlog/:blogId", isAuthenticated, deleteBlogPost);

export default router;
