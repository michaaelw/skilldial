import { useSelector } from "@legendapp/state/react";
import * as deckService from "./DeckService";
import { deckStore$ } from "./DeckStore";
import { useEffect } from "react";
export function useDecks() {
  const decks = useSelector(deckStore$.decks);

  function fetchDecks() {
    deckService.getDecks().then((res) => {
      if (res) {
        deckStore$.decks.set(res);
        deckStore$.error.set(null);
      }
    }).catch((err) => {
      deckStore$.error.set(err);
    });
  }

  useEffect(() => {
    fetchDecks();
  }, []);

  return {
    fetchDecks,
    decks,
  };
}
