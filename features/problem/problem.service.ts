import { supabase } from "~/utils/supabase";

export async function getProblem(id: string) {
  let result = await supabase
    .from("problems")
    .select("*")
    .match({ id })
    .maybeSingle();

  return result;
}
