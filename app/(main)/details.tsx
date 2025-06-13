import { Stack, useLocalSearchParams } from 'expo-router';

import { Container } from '@/components/Container';
import { Text } from '@/components/Text';

export default function Details() {
  const { name } = useLocalSearchParams();

  return (
    <>
      <Container>
        <Text>Detail</Text>
      </Container>
    </>
  );
}
