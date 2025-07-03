import { Column } from '@/components/Column';
import { Container } from '@/components/Container';
import { Row } from '@/components/Row';
import { Text } from '@/components/Text';
import { useTheme } from '@/components/ThemeProvider';
import { flex, gap16, gap8, mxAuto, p16, wMax } from '@/styles';
import { View } from 'react-native';
import { SettingsForm } from './components/SettingsForm';
import { Separator } from '@/components/Separator';

export function SettingsScreen() {
  const { theme, media } = useTheme();

  if (media.md) {
    return (
      <Container showHeader={true}>
        <View style={[flex, gap8, p16, { flexDirection: 'column', maxWidth: 1000 }, wMax, mxAuto]}>
          <Text style={{ color: theme.colors.lightText }}>
            Customise your account to suit your needs
          </Text>

          <Separator />
          <Row>
            <Column style={[media.md && flex, gap16]}>
              <Text>Account</Text>
              <Text>Billing</Text>
            </Column>

            <Column style={[flex]}>
              <SettingsForm />
            </Column>
          </Row>
        </View>
      </Container>
    );
  }
  return (
    <Container showHeader={true}>
      <View style={[flex, gap8, p16, { flexDirection: 'column', maxWidth: 1000 }, wMax, mxAuto]}>
        <Row style={[media.md && flex, gap16]}>
          <Text>Account</Text>
          <Text>Billing</Text>
        </Row>

        <Column style={[flex]}>
          <SettingsForm />
        </Column>
      </View>
    </Container>
  );
}
