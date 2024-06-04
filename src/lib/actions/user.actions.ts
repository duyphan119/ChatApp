"use server";

import { revalidatePath } from "next/cache";

import User from "../database/models/user.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";

// CREATE
export async function createUser(user: any) {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
}

// READ
export async function getUserById(userId: string) {
  try {
    await connectToDatabase();

    const user = await User.findOne({ clerkId: userId });

    if (!user) throw new Error("User not found");

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
}

// UPDATE
export async function updateUser(clerkId: string, user: any) {
  try {
    await connectToDatabase();

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    if (!updatedUser) throw new Error("User update failed");

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
}

// DELETE
export async function deleteUser(clerkId: string) {
  try {
    await connectToDatabase();

    // Find user to delete
    const userToDelete = await User.findOne({ clerkId });

    if (!userToDelete) {
      throw new Error("User not found");
    }

    // Delete user
    const deletedUser = await User.findByIdAndDelete(userToDelete._id);
    revalidatePath("/");

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    handleError(error);
  }
}

// MAKE FRIENDS
export async function makeFriends(user1Id: string, user2Id: string) {
  try {
    await connectToDatabase();

    const updatedUser1 = await User.findOneAndUpdate(
      { _id: user1Id },
      {
        $push: {
          friends: user2Id,
        },
      },
      { new: true }
    );
    const updatedUser2 = await User.findOneAndUpdate(
      { _id: user2Id },
      {
        $push: {
          friends: user1Id,
        },
      },
      { new: true }
    );

    if (!updatedUser1 || !updatedUser2) throw new Error("Make friends failed");

    return JSON.parse(JSON.stringify({ updatedUser1, updatedUser2 }));
  } catch (error) {
    handleError(error);
  }
}

// SEARCH USERS
export async function searchUsers(keyword: string) {
  try {
    await connectToDatabase();
    const users = await User.find({
      firstName: new RegExp(keyword, "i"),
    });

    return JSON.parse(JSON.stringify(users));
  } catch (error) {
    handleError(error);
  }
}
