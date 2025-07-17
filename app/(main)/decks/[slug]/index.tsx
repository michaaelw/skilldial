import { DeckDetailScreen } from "~/features/deck/deck-detail.screen";
import * as deckService from "~/features/deck/deck.service";

export async function generateStaticParams(): Promise<
  Record<string, string>[]
> {
  const decks = (await deckService.getDecks()) || [];
  // Return an array of params to generate static HTML files for.
  // Each entry in the array will be a new page.
  return decks?.map((deck) => ({ slug: deck.slug }));
}

export default DeckDetailScreen;
