import { User } from "../models/user.model.js";
import { ApiError, ApiResponse } from "../utils/index.js";

const getPendingRoleRequests = async (req, res) => {
  const pendingUsers = await User.find({ roleRequestStatus: "pending" });
  res
    .status(200)
    .json(new ApiResponse(202, pendingUsers, "all pending request user are "));
};

const handleRoleRequest = async (req, res) => {
  const { id } = req.params;
  const { action } = req.body;

  const user = await User.findById(id);
  if (!user || user.roleRequestStatus !== "pending") {
    throw new ApiError(403, "No pending request for this user");
  }

  if (action === "approve") {
    user.role = user.roleRequest;
    user.roleRequest = null;
    user.roleRequestStatus = "approved";
  } else if (action === "reject") {
    user.roleRequest = null;
    user.roleRequestStatus = "rejected";
  } else {
    throw new ApiError(400, "Invaild Action");
  }

  await user.save();

  return res
    .status(200)
    .json(new ApiResponse(201, user, `Request ${action}ed successfully`));
};
export { getPendingRoleRequests, handleRoleRequest };
