import express, { Router } from "express";
import {
  getFreelancers,
  getFreelancer,
  createFreelancer,
  deleteFreelancer,
} from "../controller/freelancer";

const router = Router();

router.route("/").get(getFreelancers).post(createFreelancer);
router.route("/:id").get(getFreelancer).delete(deleteFreelancer);

export default router;
