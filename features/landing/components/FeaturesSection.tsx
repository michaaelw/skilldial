import { Button } from '@/components/Button';
import { Column } from '@/components/Column';
import { Row } from '@/components/Row';
import { Text } from '@/components/Text';
import { useTheme } from '@/components/ThemeProvider';
import { gap16, gap32, gap8, textCenter } from '@/styles';
import { StyleSheet, View, Image } from 'react-native';

export function InteractiveFlashCards() {
  const { theme, media } = useTheme();
  return (
    <Column style={styles.hero}>
      <View style={{ flexDirection: media.md ? 'row' : 'column' }}>
        <Column style={{ marginHorizontal: 8, flex: 1 }}>
          <View style={{ flex: 1 }}>
            <Image
              source={require('@/assets/wireframe.png')}
              style={{ width: '100%', height: 400 }}
              resizeMode="contain"
              alt="Wireframe"
            />
          </View>
        </Column>
        <Column style={[gap32, { width: media.md ? '50%' : '100%' }]}>
          <Text style={styles.title}>Interactive Flashcards</Text>
          <Text style={styles.subtitle}>
            Experience a unique blend of flashcard learning and coding practice, allowing you to
            memorize key concepts while applying them in a coding environment.
          </Text>
        </Column>
      </View>
    </Column>
  );
}

export function ImplementationInterface() {
  const { theme, media } = useTheme();
  return (
    <Column style={styles.hero}>
      <View style={{ flexDirection: media.md ? 'row' : 'column' }}>
        <Column style={[gap32, { width: media.md ? '50%' : '100%' }]}>
          <Text style={styles.title}>Implementation Interface</Text>
          <Text style={styles.subtitle}>
            Code directly within our platform! Our built-in code editor supports multiple languages,
            offering syntax highlighting and auto-indentation to streamline your coding experience.
          </Text>
        </Column>
        <Column style={{ marginHorizontal: 8, flex: 1 }}>
          <View style={{ flex: 1 }}>
            <Image
              source={require('@/assets/wireframe.png')}
              style={{ width: '100%', height: 400 }}
              resizeMode="contain"
              alt="Wireframe"
            />
          </View>
        </Column>
      </View>
    </Column>
  );
}

export function SpacedRepetitonSystem() {
  const { theme, media } = useTheme();
  return (
    <Column style={styles.hero}>
      <View style={{ flexDirection: media.md ? 'row' : 'column' }}>
        <Column style={{ marginHorizontal: 8, flex: 1 }}>
          <View style={{ flex: 1 }}>
            <Image
              source={require('@/assets/wireframe.png')}
              style={{ width: '100%', height: 400 }}
              resizeMode="contain"
              alt="Wireframe"
            />
          </View>
        </Column>
        <Column style={[gap32, { width: media.md ? '50%' : '100%' }]}>
          <Text style={styles.title}>Spaced Repetition System</Text>
          <Text style={styles.subtitle}>
            Our intelligent algorithm refreshes your memory on key concepts just when you need it,
            ensuring you retain information effectively and efficiently.
          </Text>
        </Column>
      </View>
    </Column>
  );
}

export function PerformanceTracking() {
  const { theme, media } = useTheme();
  return (
    <Column style={styles.hero}>
      <View style={{ flexDirection: media.md ? 'row' : 'column' }}>
        <Column style={[gap32, { width: media.md ? '50%' : '100%' }]}>
          <Text style={styles.title}>Performance Tracking</Text>
          <Text style={styles.subtitle}>
            Our intelligent algorithm refreshes your memory on key concepts just when you need it,
            ensuring you retain information effectively and efficiently.
          </Text>
        </Column>
        <Column style={{ marginHorizontal: 8, flex: 1 }}>
          <View style={{ flex: 1 }}>
            <Image
              source={require('@/assets/wireframe.png')}
              style={{ width: '100%', height: 400 }}
              resizeMode="contain"
              alt="Wireframe"
            />
          </View>
        </Column>
      </View>
    </Column>
  );
}

export function FeaturesSection() {
  return (
    <>
      <Text variant="h2" style={[textCenter]}>
        Focus on what you need to practice
      </Text>
      <InteractiveFlashCards />
      <ImplementationInterface />
      <SpacedRepetitonSystem />
      <PerformanceTracking />
    </>
  );
}

const styles = StyleSheet.create({
  hero: { marginVertical: 24 },
  title: { fontSize: 24, fontWeight: 'bold' },
  subtitle: { fontSize: 16, marginVertical: 8 },
});
