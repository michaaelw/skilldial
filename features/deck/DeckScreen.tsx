import { Text } from '@/components/Text';
import { useTheme } from '@/components/ThemeProvider';
import { StyleSheet } from 'react-native';
import { MotiView, View } from 'moti';
import { useDeck, useDecks } from './DeckPresenter';
import { useLocalSearchParams } from 'expo-router';

type DeckScreenProps = {};

export function DeckScreen(props: DeckScreenProps) {
  const { media } = useTheme();
  const params = useLocalSearchParams<{ slug: string }>();

  const { deck } = useDeck({ slug: params?.slug });

  const firstCard = deck?.cards?.[0];

  return (
    <View
      from={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1000, type: 'timing' }}>
      <Text>{deck?.name || 'Deck Detail'}</Text>

      <Text>{firstCard?.question}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  count: {
    color: '#666',
    fontSize: 14,
  },
});
