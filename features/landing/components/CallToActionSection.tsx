import { Button } from '@/components/Button';
import { Column } from '@/components/Column';
import { Row } from '@/components/Row';
import { Text } from '@/components/Text';
import { useTheme } from '@/components/ThemeProvider';
import { gap16, gap8, selfCenter, textCenter } from '@/styles';
import { StyleSheet, View, Image } from 'react-native';

export function CallToActionSection() {
  const { theme, media } = useTheme();
  return (
    <Column style={[gap16, styles.hero]}>
      <Text variant="h2" style={[textCenter]}>
        Ready to ace your tech inteview?
      </Text>
      <Text style={[textCenter]}>
        Join thousands of successful candidates who have transformed their interview preparation.
        Get started today and unlock your potential!
      </Text>

      <Button variant="outline" title="Start Your Free Trial Now" style={[selfCenter]}></Button>
    </Column>
  );
}

const styles = StyleSheet.create({
  hero: { marginVertical: 24 },
});
