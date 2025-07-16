import { supabase } from "@/utils/supabase";

export async function getProblem(id: string) {
  let result = await supabase.from("problems").select(
    "*, coding_problems(*, coding_problem_test_cases(*))",
  ).match({ id })
    .maybeSingle();

  return result;
}
