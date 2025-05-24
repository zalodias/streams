"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function updateStream(formData: FormData) {
  const id = formData.get("id") as string;
  const text = formData.get("text") as string;

  const { error } = await supabase
    .from("Streams")
    .update({ text })
    .eq("id", id);

  if (error) {
    console.error("Error updating stream:", error);
  }

  revalidatePath("/");
}
