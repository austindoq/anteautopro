import { Router } from "express";
import { createConsultationLead } from "../controllers/consultationLead.controller.js";

const router = Router();

router.post("/consultation", createConsultationLead);

export default router;
