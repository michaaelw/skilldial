import { useObservable, useSelector } from "@legendapp/state/react";
import * as deckService from "./deck.service";
import { deckStore$ } from "./deck.store";
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

export function useDeck({ slug }: { slug: string }) {
  const decks = useSelector(deckStore$.decks);
  const deck = useSelector(deckStore$.deck);
  const cardIndex$ = useObservable(0);
  const cardIndex = useSelector(cardIndex$);

  function nextCard() {
    cardIndex$.set((current) => (current + 1) % 3);
  }

  function fetchDeckBySlug(slug: string) {
    deckService.getDeckBySlug(slug).then((res) => {
      deckStore$.deck.set(res);
    }).catch((err) => {
      deckStore$.error.set(err);
    });
  }

  useEffect(() => {
    fetchDeckBySlug(slug);
  }, [slug]);

  return {
    cardIndex,
    nextCard,
    fetchDeckBySlug,
    deck: deck,
  };
}
