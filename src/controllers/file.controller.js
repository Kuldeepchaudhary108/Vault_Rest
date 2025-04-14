import { File } from "../models/file.model.js";
import { User } from "../models/user.model.js";
import {
  asyncHandler,
  ApiError,
  uploadOnCloudinary,
  ApiResponse,
} from "../utils/index.js";

const uploadFile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) {
    throw new ApiError(404, "user not found");
  }

  if (!req?.files) {
    throw new ApiError(400, "file is missing ");
  }

  const localFilePath = req.files[0]?.path;

  console.log(localFilePath);

  if (!localFilePath) {
    throw new ApiError(401, "localfile path is mising ");
  }

  const uploadedCloudinaryFile = await uploadOnCloudinary(localFilePath);
  console.log("uploaded data ", uploadedCloudinaryFile.created_at);

  const file = await File.create({
    filename: uploadedCloudinaryFile.original_filename,
    path: uploadedCloudinaryFile.url,
    uploader: user,
  });

  const createdFile = await File.findById(file._id);

  if (!createdFile) {
    throw new ApiError(504, "error comes while creating file in mongoos");
  }
  return res.status(200).json(new ApiResponse(200, {}, "all things working  "));
});
const getAllfile = asyncHandler(async (req, res) => {
  const files = await File.find({}); // No filter, so it returns all files

  if (!files || files.length === 0) {
    throw new ApiError(404, "No files found");
  }
  console.log(files);

  res.status(202).json(new ApiResponse(201, files, "all files are fetched "));
});

export { uploadFile,getAllfile };
