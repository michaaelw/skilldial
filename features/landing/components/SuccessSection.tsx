import { Button } from '@/components/Button';
import { Column } from '@/components/Column';
import { AdamSmith } from '@/components/icons/AdamSmith';
import { XIcon } from '@/components/icons/X';
import { Row } from '@/components/Row';
import { Text } from '@/components/Text';
import { useTheme } from '@/components/ThemeProvider';
import { alignCenter, flex, gap16, gap32, gap8, p8, textCenter } from '@/styles';

import { StyleSheet, View } from 'react-native';

export function SuccessSection() {
  const { theme, media } = useTheme();

  return (
    <Column style={[gap32]}>
      <Text variant="h2" style={[textCenter]}>
        1000+ People have successfully enter job market with us
      </Text>
      <View style={{ flexDirection: media.md ? 'row' : 'column', gap: 8 }}>
        <Column
          style={[
            gap16,
            p8,
            { width: media.md ? '50%' : '100%', borderWidth: 1, borderColor: theme.colors.border },
          ]}>
          <Row style={[gap16]}>
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: theme.colors.blue,
              }}>
              <XIcon color={theme.colors.blue} size={60} />
            </View>
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
        <Column
          style={[
            gap16,
            p8,
            { width: media.md ? '50%' : '100%', borderWidth: 1, borderColor: theme.colors.border },
          ]}>
          <Row style={[gap16]}>
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: theme.colors.blue,
              }}>
              <XIcon color={theme.colors.blue} size={60} />
            </View>
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
