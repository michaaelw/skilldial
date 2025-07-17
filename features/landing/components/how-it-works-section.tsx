import { AceInterview } from "~/components/icons/AceInterview";
import { CodingProblems } from "~/components/icons/CodingProblems";
import { TrackProgress } from "~/components/icons/TrackProgress";
import { Column } from "~/components/ui/column";
import { Text } from "~/components/ui/text";

export function HowItWorksSection() {
  return (
    <Column className="flex gap-4">
      <Text className="text-center text-2xl">How it works</Text>

      <Column className="mt-8 flex-col md:flex-row flex-1 gap-4">
        <Column className="flex-1 items-center gap-4 text-center">
          <CodingProblems />
          <Text>Practice Coding Problems</Text>
          <Text className="opacity-70">
            Use our interactive flashcards to learn concepts and immediately
            apply them in our coding environment.
          </Text>
        </Column>

        <Column className="flex-1 items-center gap-4 text-center">
          <TrackProgress />
          <Text>Track Your Progress</Text>
          <Text className="opacity-70">
            Use our analytics dashboard to monitor your performance and adjust
            your study plan as needed.
          </Text>
        </Column>

        <Column className="flex-1 items-center gap-4 text-center">
          <AceInterview />
          <Text>Ace Your Interview</Text>
          <Text className="opacity-70">
            Walk into your interview room with confidence, prepared to tackle
            any coding challenge thrown your way!
          </Text>
        </Column>
      </Column>
    </Column>
  );
}
