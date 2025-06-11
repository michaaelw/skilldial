import { Text } from '@/components/Text';
import { useTheme } from '@/components/ThemeProvider';
import { StyleSheet } from 'react-native';
import { MotiView, View } from 'moti';
import { useDeck, useDecks } from './DeckPresenter';
import { useLocalSearchParams } from 'expo-router';
import { Column } from '@/components/Column';
import { observable } from '@legendapp/state';
import { useObservable, useSelector } from '@legendapp/state/react';
import { Button } from '@/components/Button';
import { Card } from '@/types';
import { RefreshCcw } from 'lucide-react-native';

type DeckScreenProps = {};

type CardProps = {
  open: boolean;
  content?: Card;
  close: () => void;
};

function QuestionCard({ open, content, close }: CardProps) {
  const { media } = useTheme();
  return (
    <MotiView
      animate={{ opacity: open ? 1 : 0, transform: [{ rotateY: open ? '0deg' : '180deg' }] }}
      transition={{ duration: 1000, type: 'timing' }}
      style={{
        zIndex: open ? 1 : 0,
        width: media.md ? 600 : '100%',
        gap: 16,
        height: 400,
        borderRadius: 16,
        position: 'absolute',
        padding: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundImage: 'linear-gradient(135deg, #3b82f6, #2563eb)',
        experimental_backgroundImage: 'linear-gradient(135deg, #3b82f6, #2563eb)',
      }}>
      <Text style={{ color: 'white' }}>Question</Text>
      <Text variant="h4" style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>
        {content?.question}
      </Text>
      <Button
        title="Tap to show answer"
        onPress={() => {
          close();
        }}></Button>
    </MotiView>
  );
}

function SolutionCard({ open, content, close }: CardProps) {
  const { media } = useTheme();
  return (
    <MotiView
      animate={{ opacity: open ? 1 : 0, transform: [{ rotateY: open ? '0deg' : '180deg' }] }}
      transition={{ duration: 1000, type: 'timing' }}
      style={{
        zIndex: open ? 1 : 0,
        position: 'absolute',
        height: 400,
        gap: 16,
        borderRadius: 16,
        padding: 16,
        width: media.md ? 600 : '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundImage: 'linear-gradient(135deg, #22c55e, #16a34a)',
        experimental_backgroundImage: 'linear-gradient(135deg, #16a34a, #16a34a)',

        flex: 1,
      }}>
      <Text style={{ color: 'white' }}>Answer</Text>
      <Text variant="h4" style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>
        {content?.solution}
      </Text>
      <Button
        icon={<RefreshCcw color={'white'} />}
        onPress={() => {
          close();
        }}></Button>
    </MotiView>
  );
}

export function DeckScreen(props: DeckScreenProps) {
  const { media, theme } = useTheme();
  const params = useLocalSearchParams<{ slug: string }>();

  const { deck } = useDeck({ slug: params?.slug });

  const firstCard = deck?.cards?.[0];
  const questionOpen$ = useObservable(true);
  const questionOpen = useSelector(questionOpen$);

  const solutionOpen = !questionOpen;

  return (
    <View
      style={{ flex: 1, padding: 16, alignItems: 'center', gap: 16, marginTop: 48 }}
      from={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1000, type: 'timing' }}>
      <Text variant="h2">{deck?.name || 'Deck Detail'}</Text>
      <Column
        style={{
          gap: 16,
          position: 'relative',
          height: 400,
          flex: 1,
          alignItems: 'center',
          backgroundColor: 'red',
        }}>
        <QuestionCard
          open={questionOpen}
          content={firstCard}
          close={() => questionOpen$.set(false)}
        />
        <SolutionCard
          open={solutionOpen}
          content={firstCard}
          close={() => questionOpen$.set(true)}
        />
      </Column>
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
