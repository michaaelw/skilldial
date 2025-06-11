import { Text } from '@/components/Text';
import { useTheme } from '@/components/ThemeProvider';
import { DeckWithCardCount } from '@/types';
import { pluralize } from '@/utils/pluralise';
import { Link } from 'expo-router';
import { FlatList, View, StyleSheet } from 'react-native';

type DeckScreenProps = {};

export function DeckScreen(props: DeckScreenProps) {
  const { media } = useTheme();

  return <Text>Deck Detail</Text>;
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
