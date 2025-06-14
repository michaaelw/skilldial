import { Column } from '@/components/Column';
import { AceInterview } from '@/components/icons/AceInterview';
import { CodingProblems } from '@/components/icons/CodingProblems';
import { TrackProgress } from '@/components/icons/TrackProgress';
import { Text } from '@/components/Text';
import { useTheme } from '@/components/ThemeProvider';
import { alignCenter, flex, gap16, textCenter } from '@/styles';
import { View } from 'react-native';

export function HowItWorksSection() {
  const { theme, media } = useTheme();

  return (
    <Column style={[flex, gap16]}>
      <Text variant="h2" style={[textCenter]}>
        How it works
      </Text>

      <View
        style={{ marginTop: 32, flex: 1, gap: 16, flexDirection: media?.md ? 'row' : 'column' }}>
        <Column style={[flex, gap16, alignCenter]}>
          <CodingProblems />
          <Text variant="h4">Practice Coding Problems</Text>
          <Text style={{ opacity: 0.7 }}>
            Use our interactive flashcards to learn concepts and immediately apply them in our
            coding environment.
          </Text>
        </Column>
        <Column style={[flex, gap16, alignCenter]}>
          <TrackProgress />
          <Text variant="h4">Track Your Progress</Text>
          <Text style={{ opacity: 0.7 }}>
            Use our analytics dashboard to monitor your performance and adjust your study plan as
            needed.
          </Text>
        </Column>
        <Column style={[flex, gap16, alignCenter]}>
          <AceInterview />
          <Text variant="h4">Ace Your Interview</Text>
          <Text style={{ opacity: 0.7 }}>
            Walk into your interview room with confidence, prepared to tackle any coding challenge
            thrown your way!
          </Text>
        </Column>
      </View>
    </Column>
  );
}
