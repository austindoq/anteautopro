import { Router } from "express";
import { isAdmin, serveDashboard } from "../controllers/admin.controller";
import { isAuthenticated } from "../middleware/auth";
const router = Router();

router.get("/login", serveLogin);
router.post("/login", isAdmin);
router.get("/dashboard", isAuthenticated, serveDashboard);

export default router;
