"use server";

import { revalidatePath } from "next/cache";

// CREATE
export async function createChatMessage({ path = "/" }: CreateChatMessageBody) {
  revalidatePath(path);
}
