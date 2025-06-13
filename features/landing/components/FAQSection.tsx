import { Button } from '@/components/Button';
import { Column } from '@/components/Column';
import { AdamSmith } from '@/components/icons/AdamSmith';
import { XIcon } from '@/components/icons/X';
import { Row } from '@/components/Row';
import { Text } from '@/components/Text';
import { useTheme } from '@/components/ThemeProvider';
import { alignCenter, flex, gap16, gap32, gap8, p8, textCenter } from '@/styles';
import { FileQuestion } from 'lucide-react-native';

import { StyleSheet, View, ViewStyle } from 'react-native';

export function FAQSection() {
  const { theme, media } = useTheme();

  const faqItem: ViewStyle = { padding: 16, paddingVertical: 8, width: media.md ? '50%' : '100%' };

  return (
    <Column style={[gap32]}>
      <Text variant="h2" style={[textCenter]}>
        Frequently asked questions
      </Text>
      <Row style={{ flex: 1, flexWrap: 'wrap' }}>
        <Row style={[gap8, alignCenter, faqItem]}>
          <FileQuestion />
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Text>
        </Row>

        <Row style={[gap8, alignCenter, faqItem]}>
          <FileQuestion />
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Text>
        </Row>

        <Row style={[gap8, alignCenter, faqItem]}>
          <FileQuestion />
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Text>
        </Row>

        <Row style={[gap8, alignCenter, faqItem]}>
          <FileQuestion />
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Text>
        </Row>
      </Row>
    </Column>
  );
}

const styles = StyleSheet.create({});
