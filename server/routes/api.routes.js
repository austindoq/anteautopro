import { Router } from "express";
import { createConsultationLead } from "../controllers/consultationLead.controller.js";
import { createAppraisalLead } from "../controllers/appraisalLead.controller.js";
import {
  getAllBlogPosts,
  mostRecentBlogPost,
} from "../controllers/blog.controller.js";
import {
  getAllBrandNewListings,
  getAllTradeInListings,
  getSearchListings,
  mostRecentTradeIns,
} from "../controllers/inventory.controller.js";

const router = Router();

//LANDING PAGE FORM ROUTES
router.post("/consultation", createConsultationLead);
router.post("/appraisal", createAppraisalLead);

//BLOG ROUTES
router.get("/getAllBlogPosts", getAllBlogPosts);
router.get("/mostRecentBlogPost", mostRecentBlogPost);

//INVENTORY ROUTES
router.get("/mostRecentTradeIns", mostRecentTradeIns);
router.get("/getAllBrandNewListings", getAllBrandNewListings);
router.get("/getAllTradeInListings", getAllTradeInListings);
router.get("/getSearchListings/:contentType", getSearchListings);

export default router;
