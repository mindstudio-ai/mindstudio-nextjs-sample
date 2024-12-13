"use server";

import { MindStudio } from "mindstudio";
import { Comment } from "@/types";
import { revalidatePath } from "next/cache";

// Initialize MindStudio client
const mindstudio = new MindStudio(process.env.MINDSTUDIO_KEY);

// Mock comments database (in-memory)
const comments: Comment[] = [];

export async function submitComment(formData: FormData) {
  const content = formData.get("content") as string;

  if (!content) {
    throw new Error("Content is required");
  }

  const newComment: Comment = {
    id: Math.random().toString(36).substring(7),
    content,
    author: "Anonymous",
    createdAt: new Date(),
    isModerated: false,
  };

  // Moderate the comment content using MindStudio
  try {
    const moderationResult =
      await mindstudio.workers.ContentModerator.verifyComment({
        content: newComment.content,
      });

    newComment.moderationResult = {
      isApproved: moderationResult.result === "CLEAR",
      reason: moderationResult.result,
    };
    newComment.isModerated = true;
  } catch (error) {
    console.error("Moderation failed:", error);
    newComment.moderationResult = {
      isApproved: false,
      reason: "Moderation error",
    };
    newComment.isModerated = true;
  }

  // Add the new comment to the mock database
  comments.push(newComment);

  // Revalidate the current path to update the page with the new comment
  revalidatePath("/");
}

export async function getComments() {
  return comments;
}
