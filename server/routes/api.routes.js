import { Router } from "express";
import { createConsultationLead } from "../controllers/consultationLead.controller.js";
import { createAppraisalLead } from "../controllers/appraisalLead.controller.js";
import {
  getAllBlogPosts,
  mostRecentBlogPost,
} from "../controllers/blog.controller.js";
const router = Router();

router.post("/consultation", createConsultationLead);
router.post("/appraisal", createAppraisalLead);
router.get("/getAllBlogPosts", getAllBlogPosts);
router.get("/mostRecentBlogPost", mostRecentBlogPost);
// router.get("/allListings")
// router.get("/mostRecentListings")
export default router;
