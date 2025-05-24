"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function updateStream(formData: FormData) {
  const id = formData.get("id") as string;
  const text = formData.get("text") as string;

  const { error } = await supabase
    .from("Streams")
    .update({
      text,
      updated_time: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) {
    console.error("Error updating stream:", error);
  }

  revalidatePath("/");
}

export async function createStream(formData: FormData) {
  const text = formData.get("text") as string;

  if (!text.trim()) return;

  const { error } = await supabase.from("Streams").insert([
    {
      id: crypto.randomUUID(),
      text,
      created_time: new Date().toISOString(),
      updated_time: new Date().toISOString(),
    },
  ]);

  if (error) {
    console.error("Error creating stream:", error);
  }

  if (error) {
    console.error("Error creating stream:", error);
  }

  revalidatePath("/");
}
