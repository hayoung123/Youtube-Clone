import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL is required", //error message
  },
  title: {
    type: String,
    required: "Title is required",
  },
  Description: {
    type: String,
  },
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const model = mongoose.model("Video", videoSchema);
export default model;
