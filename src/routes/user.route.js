import Router from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  signup,
  loginUser,
  logoutUser,
  changeCurrentPassword,
  getCurrentUser,
  updateUserAvatar,
  requestRoleUpgrade,
} from "../controllers/user.controller.js";

import { authorizeRoles } from "../middlewares/role.middleware.js";
import {
  deletFile,
  getAllfile,
  getById,
  uploadFile,
} from "../controllers/file.controller.js";
const router = Router();
// const upload = multer();
router.route("/signup").post(signup);
router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/change/password").patch(verifyJWT, changeCurrentPassword);
router.route("/current-user").get(verifyJWT, getCurrentUser);
router
  .route("/change/avatarImage")
  .post(verifyJWT, upload.single("avatar"), updateUserAvatar);

//file route
router
  .route("/upload-file")
  .post(
    verifyJWT,
    authorizeRoles("admin", "editor"),
    upload.array("file"),
    uploadFile
  );

router.route("/all-files").get(verifyJWT, getAllfile);
router
  .route("/delet-file/:fileId")
  .delete(verifyJWT, authorizeRoles("admin", "editor"), deletFile);
router
  .route("/file/:fileId")
  .get(verifyJWT, authorizeRoles("admin", "editor", "viewer"), getById);

router.route("/request-role-upgrade").post(verifyJWT, requestRoleUpgrade);

// avtar

export default router;
