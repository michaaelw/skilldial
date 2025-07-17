import { Stack, Link, Redirect } from "expo-router";

import { useIsMounted, useSelector } from "@legendapp/state/react";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useAuth } from "../auth/auth.context";
import { useDecks } from "../deck/deck.presenter";
import { DeckList } from "../deck/deck.list";
import { Container } from "~/components/container";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";

export function HomeScreen() {
  const { user, logout } = useAuth();

  const { decks, fetchDecks } = useDecks();

  const isMounted$ = useIsMounted();
  const isMounted = useSelector(isMounted$);
  const style = useAnimatedStyle(() => ({
    opacity: isMounted ? withTiming(1, { duration: 1000 }) : withTiming(0),
    transform: [
      {
        translateY: isMounted
          ? withTiming(0, { duration: 1000 })
          : withTiming(100),
      },
    ],
  }));

  if (!user) {
    return <Redirect href={"/login"} />;
  }

  return (
    <Container>
      <DeckList decks={decks} />
      <Button onPress={logout}>
        <Text>Logout</Text>
      </Button>
    </Container>
  );
}
