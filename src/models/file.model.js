import mongoose, { Schema } from "mongoose";

const FileSchema = new Schema(
  {
    filename: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    uploader: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    publicId: {
      type: String,
    },
    // accessHistory: [
    //   {
    //     accessedBy: {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: "User",
    //     },
    //     accessedAt: {
    //       type: Date,
    //       default: Date.now,
    //     },
    //   },
    // ],
  },
  { timestamps: true }
);

export const File = mongoose.model("File", FileSchema);
