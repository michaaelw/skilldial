import { supabase } from "~/utils/supabase";

export async function getDecks() {
  let { data, error } = await supabase.from("decks").select("*");

  if (error) throw error;

  return data;
}

export type GetDeckBySlugResponse = Awaited<ReturnType<typeof getDeckBySlug>>;

export async function getDeckBySlug(slug: string) {
  let { data, error } = await supabase
    .from("decks")
    .select("*, cards(*)")
    .match({ slug })
    .maybeSingle();

  if (error) throw error;

  return data;
}
