import { Deck, DeckWithCardCount } from "~/types";
import { observable } from "@legendapp/state";
import { GetDeckBySlugResponse } from "./deck.service";

type DeckStore = {
  decks: DeckWithCardCount[];
  deck: GetDeckBySlugResponse;
  error: Error | null;
};

export const deckStore$ = observable<DeckStore>({
  deck: null,
  decks: [],
  error: null,
});
