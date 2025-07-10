import { Column } from '@/components/Column';
import { Text } from '@/components/Text';
import { useTheme } from '@/components/ThemeProvider';
import { alignCenter, gap16 } from '@/styles';
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
      ListHeaderComponent={
        <Column style={[alignCenter, gap16]}>
          <Text variant="h1">Welcome to Skill Dial</Text>
          <Text variant="h2">Decks</Text>
          <Link href="/problem/a2222222-2222-2222-2222-222222222222">Problem</Link>
        </Column>
      }
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
