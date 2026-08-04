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
import uploadBlog from "../middleware/uploadBlog.js";
import uploadVehicle from "../middleware/uploadVehicle.js";
import {
  createBrandNewInventoryItem,
  createTradeInInventoryItem,
  deleteBrandNewInventoryItem,
  deleteTradeInInventoryItem,
} from "../controllers/inventory.controller.js";

const router = Router();

router.get("/login", serveLogin);
router.post("/login", isAdmin);
router.get("/logout", isAuthenticated, logout);
router.get("/dashboard", isAuthenticated, serveDashboard);

//BLOG
router.post(
  "/createBlog",
  isAuthenticated,
  uploadBlog.single("image"),
  createBlogPost,
);
router.delete("/deleteBlog/:blogId", isAuthenticated, deleteBlogPost);

//INVENTORY
router.post(
  "/createBrandNew",
  isAuthenticated,
  uploadVehicle.single("image"),
  createBrandNewInventoryItem,
);
router.post(
  "/createTradeIn",
  isAuthenticated,
  uploadVehicle.single("image"),
  createTradeInInventoryItem,
);
router.delete(
  "/deleteBrandNew/:inventoryId",
  isAuthenticated,
  deleteBrandNewInventoryItem,
);
router.delete(
  "/deleteTradeIn/:inventoryId",
  isAuthenticated,
  deleteTradeInInventoryItem,
);

export default router;
