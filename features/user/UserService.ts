import { supabase } from "@/utils/supabase";

export async function updateUsername(
  input: { username: string; userId: string },
) {
  return supabase.from("profiles").update({ username: input.username }).match({
    id: input.userId,
  });
}

export function getUserProfile(userId: string) {
  return supabase.from("profiles").select("*").match({ id: userId })
    .maybeSingle();
}
