import { Button } from '@/components/Button';
import { Column } from '@/components/Column';
import { Row } from '@/components/Row';
import { Text } from '@/components/Text';
import { useTheme } from '@/components/ThemeProvider';
import {
  flex,
  flexColumn,
  flexRow,
  font16,
  font60,
  fontBold,
  gap16,
  gap8,
  mx8,
  my24,
  my8,
  w50,
  wMax,
} from '@/styles';
import { Link } from 'expo-router';
import { View, Image } from 'react-native';

export function HeroSection() {
  const { theme, media } = useTheme();
  return (
    <Column style={[my24]}>
      <View style={[media.md ? flexRow : flexColumn]}>
        <Column style={[gap16, media.md ? w50 : wMax]}>
          <Text style={[font60, fontBold]}>
            Conquer Your Data Structures & Algorithms Interview
          </Text>
          <Text style={[font16, my8]}>
            Prepare smarter, code better and land your dream job in tech.
          </Text>
          <Row style={[gap8]}>
            <Link href="/decks/core-programming-concepts" asChild>
              <Button title="Start free today!" variant="outline"></Button>
            </Link>
            <Button title="Learn more" variant="outline"></Button>
          </Row>
        </Column>
        <Column style={[mx8, flex]}>
          <View style={[flex]}>
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
