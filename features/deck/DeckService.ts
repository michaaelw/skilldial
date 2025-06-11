import { supabase } from "@/utils/supabase";

export async function getDecks() {
  let { data, error } = await supabase.from("deck_card_counts").select("*");

  if (error) throw error;

  return data;
}
