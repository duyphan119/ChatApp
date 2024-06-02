import { Schema, model, models } from "mongoose";

const ChatMessageSchema = new Schema({
  content: { type: String, default: "" },
  user1: { type: Schema.Types.ObjectId, ref: "User" },
  user2: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  files: { type: Array, default: [] },
  images: { type: Array, default: [] },
});

const ChatMessage =
  models?.ChatMessage || model("ChatMessage", ChatMessageSchema);

export default ChatMessage;
