import { useQuery } from "@tanstack/react-query";
import * as problemService from "~/features/problem/problem.service";

export function useProblem({ problemId }: { problemId: string }) {
  return useQuery({
    queryKey: ["problem", problemId],
    queryFn: ({ queryKey }) => {
      const [, id] = queryKey;
      return problemService.getProblem(id);
    },
  });
}
