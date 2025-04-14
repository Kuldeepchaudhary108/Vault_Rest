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
} from "../controllers/user.controller.js";

import { authorizeRoles } from "../middlewares/role.middleware.js";
import { uploadFile } from "../controllers/file.controller.js";
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

router
  .route("/file/:id")
  .get(verifyJWT, authorizeRoles("admin", "editor", "viewer"));

// avtar

export default router;
