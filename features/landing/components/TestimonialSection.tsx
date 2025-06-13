import { Button } from '@/components/Button';
import { Column } from '@/components/Column';
import { AdamSmith } from '@/components/icons/AdamSmith';
import { XIcon } from '@/components/icons/X';
import { Row } from '@/components/Row';
import { Text } from '@/components/Text';
import { useTheme } from '@/components/ThemeProvider';
import { flex, gap16, gap8, p8 } from '@/styles';

import { StyleSheet, View } from 'react-native';

export function TestimoninalSection() {
  const { theme, media } = useTheme();

  return (
    <Column>
      <View style={{ flexDirection: media.md ? 'row' : 'column' }}>
        <Column style={[gap16, { width: media.md ? '50%' : '100%' }]}>
          <Text variant="h2">What our customers are saying</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>

          <Button style={{ alignSelf: 'flex-start' }} variant="outline" title="Normal CTA"></Button>
        </Column>
        <Column style={[gap16, p8, { width: media.md ? '50%' : '100%' }]}>
          <Row style={[gap16]}>
            <XIcon size={63} />
            <Column style={[flex, gap16]}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Text>
              <Row>
                <Text>Adam Smith </Text>
                <AdamSmith />
              </Row>
            </Column>
          </Row>
        </Column>
      </View>
    </Column>
  );
}

const styles = StyleSheet.create({});
