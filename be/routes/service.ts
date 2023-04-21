import express, { Router } from "express";
import { getServices, getService, createService, uptadeService, deleteService } from "../controller/service";

const router = Router();

router.route("/").get(getServices).post(createService);
router.route("/:id").get(getService).put(uptadeService).delete(deleteService);

export default router;