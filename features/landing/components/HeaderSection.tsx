import { Button } from '@/components/Button';
import { Cube } from '@/components/icons/Cube';
import { Row } from '@/components/Row';
import { Text } from '@/components/Text';
import { useTheme } from '@/components/ThemeProvider';
import { alignCenter, gap8 } from '@/styles';
import { Show } from '@legendapp/state/react';
import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export function HeaderSection() {
  const { theme, media } = useTheme();
  return (
    <View style={styles.header}>
      <Row style={[gap8, alignCenter]}>
        <Link href="/">
          <Row style={[gap8, alignCenter]}>
            <Cube size={24} color={theme.colors.typography}></Cube>
            <Text style={styles.logo}>SkillDial</Text>
          </Row>
        </Link>

        <Show if={media.md}>
          <Row style={styles.navLinks}>
            <Text style={styles.link}>Home</Text>
            <Text style={styles.link}>Pricing</Text>
          </Row>
        </Show>
      </Row>
      <Row style={[gap8]}>
        <Button variant="ghost" title="Login"></Button>
        <Button title="Sign Up" variant="outline"></Button>
      </Row>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  logo: { fontWeight: 'bold', fontSize: 18 },
  link: {
    textDecorationLine: 'none',
    fontSize: 18,
  },
  navLinks: { paddingLeft: 32, flexDirection: 'row', gap: 12 },
});
