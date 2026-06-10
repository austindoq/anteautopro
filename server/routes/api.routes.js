import { Router } from "express";
import { createConsultationLead } from "../controllers/consultationLead.controller.js";
import { createAppraisalLead } from "../controllers/appraisalLead.controller.js";
const router = Router();

router.post("/consultation", createConsultationLead);
router.post("/appraisal", createAppraisalLead);

export default router;
