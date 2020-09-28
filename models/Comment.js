import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  //comment에 연결된 Video ID 넣는법
  // video: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Video",
  // },
});

const model = mongoose.model("Comment", CommentSchema);
