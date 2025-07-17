import { Image } from "react-native";
import { Column } from "~/components/ui/column";
import { Row } from "~/components/ui/row";
import { Text } from "~/components/ui/text";

const WireframeImage = () => (
  <Column className="mx-2 flex-1">
    <Column className="flex-1">
      <Image
        source={require("~/assets/wireframe.png")}
        className="w-full h-[400px]"
        resizeMode="contain"
        alt="Wireframe"
      />
    </Column>
  </Column>
);

export function InteractiveFlashCards() {
  return (
    <Column className="my-6">
      <Row className="flex-col md:flex-row">
        <WireframeImage />
        <Column className="gap-8 w-full md:w-2/4">
          <Text className="text-xl font-bold">Interactive Flashcards</Text>
          <Text className="text-base my-2">
            Experience a unique blend of flashcard learning and coding practice,
            allowing you to memorize key concepts while applying them in a
            coding environment.
          </Text>
        </Column>
      </Row>
    </Column>
  );
}

export function ImplementationInterface() {
  return (
    <Column className="my-6">
      <Row className="flex-col md:flex-row">
        <Column className="gap-8 w-full md:w-2/4">
          <Text className="text-xl font-bold">Implementation Interface</Text>
          <Text className="text-base my-2">
            Code directly within our platform! Our built-in code editor supports
            multiple languages, offering syntax highlighting and
            auto-indentation to streamline your coding experience.
          </Text>
        </Column>
        <WireframeImage />
      </Row>
    </Column>
  );
}

export function SpacedRepetitonSystem() {
  return (
    <Column className="my-6">
      <Row className="flex-col md:flex-row">
        <WireframeImage />
        <Column className="gap-8 w-full md:w-2/4">
          <Text className="text-xl font-bold">Spaced Repetition System</Text>
          <Text className="text-base my-2">
            Our intelligent algorithm refreshes your memory on key concepts just
            when you need it, ensuring you retain information effectively and
            efficiently.
          </Text>
        </Column>
      </Row>
    </Column>
  );
}

export function PerformanceTracking() {
  return (
    <Column className="my-6">
      <Row className="flex-col md:flex-row">
        <Column className="gap-8 w-full md:w-2/4">
          <Text className="text-xl font-bold">Performance Tracking</Text>
          <Text className="text-base my-2">
            Our intelligent algorithm refreshes your memory on key concepts just
            when you need it, ensuring you retain information effectively and
            efficiently.
          </Text>
        </Column>
        <WireframeImage />
      </Row>
    </Column>
  );
}

export function FeaturesSection() {
  return (
    <>
      <Text className="text-2xl font-bold text-center mb-6">
        Focus on what you need to practice
      </Text>
      <InteractiveFlashCards />
      <ImplementationInterface />
      <SpacedRepetitonSystem />
      <PerformanceTracking />
    </>
  );
}
