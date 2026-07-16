import { Router } from "express";
import {
  serveLogin,
  isAdmin,
  serveDashboard,
  logout,
} from "../controllers/admin.controller.js";
import {
  createBlogPost,
  deleteBlogPost,
} from "../controllers/blog.controller.js";
import { isAuthenticated } from "../middleware/auth.js";
import upload from "../middleware/upload.js";

const router = Router();

router.get("/login", serveLogin);
router.post("/login", isAdmin);
router.get("/logout", isAuthenticated, logout);
router.get("/dashboard", isAuthenticated, serveDashboard);
router.post(
  "/createBlog",
  isAuthenticated,
  upload.single("image"),
  createBlogPost,
);
router.delete("/deleteBlog/:blogId", isAuthenticated, deleteBlogPost);
// router.post("/createListing/:listingId")
// router.delete("/deleteListing/:listingId")

export default router;
