import { Column } from "~/components/ui/column";
import { Text } from "~/components/ui/text";

export function WelcomeSection() {
  return (
    <Column className="gap-8">
      <Text className="text-3xl font-bold text-center">
        Welcome to Your One-Stop Solution for Coding Interview Preparation!
      </Text>

      <Text className="text-center">
        Navigating the tech interview landscape can be daunting. With countless
        coding problems and algorithms to master, traditional study methods
        often fall short. Our platform combines the best of flashcard learning
        and coding practice, empowering you to ace your interviews with
        confidence.
      </Text>
    </Column>
  );
}
