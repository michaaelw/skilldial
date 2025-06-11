import { Database } from "./database.types";

export type Deck = Database["public"]["Tables"]["decks"]["Row"];
export type DeckWithCardCount =
  Database["public"]["Views"]["deck_card_counts"]["Row"];
export type Card = Database["public"]["Tables"]["cards"]["Row"];
