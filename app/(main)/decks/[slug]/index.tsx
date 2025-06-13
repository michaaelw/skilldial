import { DeckScreen } from '@/features/deck/DeckScreen';
import * as deckService from '@/features/deck/DeckService';

export async function generateStaticParams(): Promise<Record<string, string>[]> {
  const decks = (await deckService.getDecks()) || [];
  // Return an array of params to generate static HTML files for.
  // Each entry in the array will be a new page.
  return decks?.map((deck) => ({ slug: deck.slug }));
}

export default DeckScreen;
