import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
    getPendingRoleRequests,
    handleRoleRequest,
} from "../controllers/admin.controller.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

const router = Router();
router
  .route("/role-requests")
  .get(verifyJWT, authorizeRoles("admin"), getPendingRoleRequests);

router
  .route("/role-requests/:id")
  .post(verifyJWT, authorizeRoles("admin"), handleRoleRequest);
router.route;

export default router;
