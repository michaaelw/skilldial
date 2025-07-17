import { Container } from "~/components/container";

import { LoadingSpinner } from "../auth/components/loading-spinner";

import { useLocalSearchParams } from "expo-router";
import { Column } from "~/components/ui/column";
import { useProblem } from "./problem.presenter";
import { Row } from "~/components/ui/row";
import { Text } from "~/components/ui/text";
import { useMedia } from "~/lib/useMedia";
import { ResultsSection } from "./components/results-section";
import { ImplementationSection } from "./components/implementation-section";
import { ProblemSection } from "./components/problem-section";
import { Problem } from "~/types";

export function ProblemDetailScreen() {
  const media = useMedia();
  const params = useLocalSearchParams<{ id: string }>();
  const { data, isLoading } = useProblem({ problemId: params?.id });

  if (isLoading) return <LoadingSpinner />;

  if (data?.error) return <div>{data?.error.message}</div>;

  return (
    <Container showHeader={true}>
      <Column className="gap-4 p-4">
        <Text className="text-2xl">{data?.data?.title}</Text>
        <Row className="gap-8">
          {media?.md && <ProblemSection problem={data?.data as Problem} />}
          <ImplementationSection />
          <ResultsSection />
        </Row>
      </Column>
    </Container>
  );
}
