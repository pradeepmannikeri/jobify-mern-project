import { Router } from "express";
const router = Router();

import {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
  showStatus,
} from "../controllers/jobControllers.js";

import {
  validateJobInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";
import { checkForTestUser } from "../middleware/authMiddleware.js";

// router.get('/', getAllJobs);
// router.post('/', createJob);

router
  .route("/")
  .get(getAllJobs)
  .post(checkForTestUser, validateJobInput, createJob);

router.route("/stats").get(showStatus);

router
  .route("/:id")
  .get(validateIdParam, getJob)
  .patch(checkForTestUser, validateIdParam, updateJob)
  .delete(checkForTestUser, validateIdParam, deleteJob);

export default router;
