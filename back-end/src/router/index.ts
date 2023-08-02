import express from "express";
const router = express.Router();

import v1Api from "./student.api";
router.use("/", v1Api);

export default router;
