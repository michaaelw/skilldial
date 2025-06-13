import { Button } from '@/components/Button';
import { Column } from '@/components/Column';
import { Row } from '@/components/Row';
import { Text } from '@/components/Text';
import { useTheme } from '@/components/ThemeProvider';
import { gap16, gap8 } from '@/styles';
import { StyleSheet, View, Image } from 'react-native';

export function HeroSection() {
  const { theme, media } = useTheme();
  return (
    <Column style={styles.hero}>
      <View style={{ flexDirection: media.md ? 'row' : 'column' }}>
        <Column style={[gap16, { width: media.md ? '50%' : '100%' }]}>
          <Text style={styles.title}>Conquer Your Data Structures & Algorithms Interview</Text>
          <Text style={styles.subtitle}>
            Prepare smarter, code better and land your dream job in tech.
          </Text>
          <Row style={[gap8]}>
            <Button title="Start free today!" variant="outline"></Button>
            <Button title="Learn more" variant="outline"></Button>
          </Row>
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

const styles = StyleSheet.create({
  hero: { marginVertical: 24 },
  title: { fontSize: 60, fontWeight: 'bold' },
  subtitle: { fontSize: 16, marginVertical: 8 },
});
