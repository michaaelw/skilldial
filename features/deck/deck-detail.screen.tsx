import { Text } from "~/components/ui/text";

import { StyleSheet } from "react-native";
import { MotiView, View } from "moti";
import { useDeck, useDecks } from "./deck.presenter";
import { useLocalSearchParams } from "expo-router";
import { Column } from "~/components/ui/column";

import { useObservable, useSelector } from "@legendapp/state/react";
import { Button } from "~/components/ui/button";
import { Card } from "~/types";
import { RefreshCcw } from "lucide-react-native";
import { Container } from "~/components/container";

type DeckScreenProps = {};

type CardProps = {
  open: boolean;
  content?: Card;
  close: () => void;
};

function QuestionCard({ open, content, close }: CardProps) {
  return (
    <MotiView
      className="w-full md:w-[600px]"
      animate={{
        opacity: open ? 1 : 0,
        transform: [{ rotateY: open ? "0deg" : "180deg" }],
      }}
      transition={{ duration: 1000, type: "timing" }}
      style={{
        zIndex: open ? 1 : 0,
        gap: 16,
        height: 400,
        borderRadius: 16,
        position: "absolute",
        padding: 16,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundImage: "linear-gradient(135deg, #3b82f6, #2563eb)",
        experimental_backgroundImage:
          "linear-gradient(135deg, #3b82f6, #2563eb)",
      }}
    >
      <Text style={{ color: "white" }}>Question</Text>
      <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
        {content?.question}
      </Text>
      <Button
        onPress={() => {
          close();
        }}
      >
        <Text>Tap to show answer</Text>
      </Button>
    </MotiView>
  );
}

function SolutionCard({ open, content, close }: CardProps) {
  return (
    <MotiView
      className="w-full md:w-[600px]"
      animate={{
        opacity: open ? 1 : 0,
        transform: [{ rotateY: open ? "0deg" : "180deg" }],
      }}
      transition={{ duration: 1000, type: "timing" }}
      style={{
        zIndex: open ? 1 : 0,
        position: "absolute",
        height: 400,
        gap: 16,
        borderRadius: 16,
        padding: 16,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundImage: "linear-gradient(135deg, #22c55e, #16a34a)",
        experimental_backgroundImage:
          "linear-gradient(135deg, #16a34a, #16a34a)",

        flex: 1,
      }}
    >
      <Text style={{ color: "white" }}>Answer</Text>
      <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
        {content?.solution}
      </Text>
      <Button
        onPress={() => {
          close();
        }}
      >
        <RefreshCcw color={"white"} />
      </Button>
    </MotiView>
  );
}

export function DeckDetailScreen(props: DeckScreenProps) {
  const params = useLocalSearchParams<{ slug: string }>();

  const { deck, cardIndex, nextCard } = useDeck({ slug: params?.slug });

  const card = deck?.cards?.[cardIndex];
  const questionOpen$ = useObservable(true);
  const questionOpen = useSelector(questionOpen$);

  const solutionOpen = !questionOpen;

  return (
    <Container>
      <View
        style={{
          flex: 1,
          padding: 16,
          alignItems: "center",
          gap: 16,
          marginTop: 48,
        }}
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1000, type: "timing" }}
      >
        <Text className="text-2xl">{deck?.name || "Deck Detail"}</Text>
        <Column
          style={{
            gap: 16,
            position: "relative",
            height: 400,
            flex: 1,
            alignItems: "center",
            backgroundColor: "red",
          }}
        >
          <QuestionCard
            open={questionOpen}
            content={card}
            close={() => questionOpen$.set(false)}
          />
          <SolutionCard
            open={solutionOpen}
            content={card}
            close={() => questionOpen$.set(true)}
          />
        </Column>
        <Column>
          <Button onPress={nextCard}>
            <Text>Next</Text>
          </Button>
        </Column>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  count: {
    color: "#666",
    fontSize: 14,
  },
});
