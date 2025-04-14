import Router from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  signup,
  loginUser,
  logoutUser,
  changeCurrentPassword,
  getCurrentUser,
  updateAccountDetails,
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
router
  .route("/update-userdetails")
  .post(verifyJWT, upload.single("avatar"), updateAccountDetails);
router
  .route("/change/avatarImage")
  .post(verifyJWT, upload.single("avatar"), updateUserAvatar);

export default router;
