import { Text } from '@/components/Text';
import { useTheme } from '@/components/ThemeProvider';
import { DeckWithCardCount } from '@/types';
import { pluralize } from '@/utils/pluralise';
import { Link } from 'expo-router';
import { FlatList, View, StyleSheet } from 'react-native';

type DeckListProps = {
  decks: DeckWithCardCount[];
};

export function DeckList({ decks }: DeckListProps) {
  const { media } = useTheme();
  const renderItem = ({ item }: { item: DeckWithCardCount }) => (
    <Link href={('/decks/' + item.slug) as never} style={styles.item}>
      <View style={styles.item}>
        <Text style={styles.name}>{item.name ?? 'Unnamed Deck'}</Text>
        <Text style={styles.count}>
          {item.card_count} {pluralize('card', item.card_count!)}
        </Text>
      </View>
    </Link>
  );

  return (
    <FlatList
      ListHeaderComponent={<Text variant="h1">Decks</Text>}
      key={media.md ? 'large' : 'small'}
      numColumns={media.md ? 3 : 1}
      data={decks}
      keyExtractor={(item) => item?.id!.toString()}
      renderItem={renderItem}
    />
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
