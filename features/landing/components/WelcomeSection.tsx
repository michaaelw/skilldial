import { Column } from '@/components/Column';
import { Text } from '@/components/Text';
import { gap16, textCenter } from '@/styles';

export function WelcomeSection() {
  return (
    <Column style={[gap16]}>
      <Text variant="h1" style={[textCenter]}>
        Welcome to Your One-Stop Solution for Coding Interview Preparation!
      </Text>

      <Text style={[textCenter]}>
        Navigating the tech interview landscape can be daunting. With countless coding problems and
        algorithms to master, traditional study methods often fall short. Our platform combines the
        best of flashcard learning and coding practice, empowering you to ace your interviews with
        confidence.
      </Text>
    </Column>
  );
}
