import { asyncHandler, ApiError, uploadOnCloudinary } from "../utils/index.js";

const uploadFile = asyncHandler(async (req, res) => {
  if (!req?.file) {
    throw new ApiError(400, "file is missing ");
  }

  const localFilePath = req.file?.path;

  if (!localFilePath) {
    throw new ApiError(401, "localfile path is mising ");
  }

  const uploadedCloudinaryFile = await uploadOnCloudinary(localFilePath);
  console.log("uploaded data ", uploadedCloudinaryFile);
});

export { uploadFile };
