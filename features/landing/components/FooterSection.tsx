import { Button } from '@/components/Button';
import { Column } from '@/components/Column';
import { Cube } from '@/components/icons/Cube';
import { Row } from '@/components/Row';
import { Text } from '@/components/Text';
import { useTheme } from '@/components/ThemeProvider';
import {
  alignCenter,
  flex,
  flexWrap,
  gap16,
  gap8,
  justifySpaceBetween,
  opacity80,
  textCenter,
} from '@/styles';
import { ViewStyle } from 'react-native';

export function FooterSection() {
  const { theme, media } = useTheme();

  const item: ViewStyle = {
    gap: 16,
    paddingVertical: 8,
    width: media.md ? '25%' : '100%',
  };

  return (
    <Column
      style={[
        gap16,
        {
          flex: 1,
          backgroundColor: '#000',
        },
      ]}>
      <Column
        style={{
          gap: 16,
          maxWidth: 1200,
          paddingVertical: 16,
          marginHorizontal: 'auto',
          width: '100%',
        }}>
        <Row style={[gap8, alignCenter]}>
          <Cube size={24} color={theme.colors.typography}></Cube>
          <Text>SkillDial</Text>
        </Row>
        <Row style={[gap16, justifySpaceBetween]}>
          <Text variant="h2">Build your skill.</Text>
          <Column style={[gap8]}>
            <Button variant="outline" title="Big CTA"></Button>
            <Button variant="outline" title="Normal CTA"></Button>
          </Column>
        </Row>

        <Row style={[flex, flexWrap]}>
          <Column style={[item]}>
            <Text variant="h4">Contact</Text>
            <Text style={[opacity80]}>
              9565 S. Railroad Dr. Spring Valley, NY 10977 United States 0800 01234 5678
            </Text>
          </Column>
          <Column style={[item]}>
            <Text variant="h4">Navigation</Text>
            <Column>
              <Text style={[opacity80]}>Home</Text>
              <Text style={[opacity80]}>Navigation Item</Text>
              <Text style={[opacity80]}>Other Nav Item</Text>
            </Column>
          </Column>
          <Column style={[item]}>
            <Text variant="h4">Social Media</Text>
            <Column>
              <Text style={[opacity80]}>Twitter</Text>
              <Text style={[opacity80]}>Facebook</Text>
              <Text style={[opacity80]}>Instagram</Text>
            </Column>
          </Column>
          <Column style={[item]}>
            <Text variant="h4">Legal</Text>
            <Column>
              <Text style={[opacity80]}>Privacy Policy</Text>
              <Text style={[opacity80]}>Cookie Agreement</Text>
              <Text style={[opacity80]}>Terms of Service</Text>
            </Column>
          </Column>
        </Row>
      </Column>
    </Column>
  );
}
