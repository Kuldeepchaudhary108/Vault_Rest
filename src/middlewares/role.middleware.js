import { asyncHandler, ApiError } from "../utils/index.js";

export const authorizeRoles = (...allowedRoles) => {
  try {
    return asyncHandler(async (req, res, next) => {
      const userRole = req.user.role;

      if (!allowedRoles.includes(userRole)) {
        throw new ApiError(403, "Access denied: insufficient role");
      }
      next();
    });
  } catch (error) {
    throw new ApiError(401, error?.message || "Invaild Role authorize");
  }
};
