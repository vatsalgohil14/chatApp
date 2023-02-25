// chatName
// isGroupChat
// users
// Latest message
// groupAdmin
// install the mongoose to connect to mongodb data base.

const mongoose = require("mongoose");


const chatModel = mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId, // this will contian id to that user
        ref: "User",
      },
    ],
    latestMessage: [
      {
        type: mongoose.Schema.Types.ObjectId, // this will contian id to that user
        // ref: "Message", abhi ke liye hataya hai fir kar dena add
      },
    ],
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId, // this will contian id to that user
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.model("Chat", chatModel);
module.exports = Chat;
