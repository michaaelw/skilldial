import { Deck, DeckWithCardCount } from "@/types";
import { observable } from "@legendapp/state";

type DeckStore = {
  decks: DeckWithCardCount[];
  error: Error | null;
};

export const deckStore$ = observable<DeckStore>({
  decks: [],
  error: null,
});
