import { useTheme } from '@/components/ThemeProvider';

import { Container } from '@/components/Container';
import { useAuth } from '../auth/AuthContext';

import { LoadingSpinner } from '../auth/components/LoadingSpinner';
import { Row } from '@/components/Row';
import { Text } from '@/components/Text';
import { View } from 'react-native';
import { alignCenter, flex, gap8, justifySpaceBetween, p8 } from '@/styles';
import { TabBar } from '@/components/TabBar';
import { Braces, ChevronDown, Maximize2, PanelLeft, Undo } from 'lucide-react-native';
import { useQuery } from '@tanstack/react-query';
import { useLocalSearchParams } from 'expo-router';
import * as problemService from '@/features/problem/ProblemService';
import { Column } from '@/components/Column';

import { Button } from '@/components/Button';
import CodeEditor from './components/CodeEditor';

export function ProblemDetailScreen() {
  const { theme, media } = useTheme();
  const { user, isLoading } = useAuth();

  const params = useLocalSearchParams<{ id: string }>();

  const { data } = useQuery({
    queryKey: ['problem', params.id],
    queryFn: ({ queryKey }) => {
      const [, id] = queryKey;
      return problemService.getProblem(id);
    },
  });

  console.log('data ', data?.data);

  if (isLoading) return <LoadingSpinner />;

  return (
    <Container showHeader={true}>
      <Column style={[gap8]}>
        <Text variant="h2">{data?.data?.title}</Text>
        <Row>
          {media?.md && (
            <View style={[flex]}>
              <Row style={[justifySpaceBetween]}>
                <TabBar
                  tabs={[
                    { key: 'problem', label: 'Problem' },
                    { key: 'learn', label: 'Learn' },
                    { key: 'history', label: 'History' },
                  ]}
                />
                <PanelLeft />
              </Row>
              <View style={[p8]}>
                <Text>{data?.data?.prompt}</Text>
              </View>
            </View>
          )}

          <View style={[flex]}>
            <Row style={[justifySpaceBetween, alignCenter]}>
              <Text>My Implementation</Text>
              <Row style={[gap8, alignCenter]}>
                <Braces />
                <Undo />
                <Maximize2 />
                <PanelLeft />
                <Button variant="ghost" title="Python" iconAfter={<ChevronDown />}></Button>
              </Row>
            </Row>
            <View style={{ height: '100%' }}>
              <CodeEditor />
            </View>
          </View>
        </Row>
      </Column>
    </Container>
  );
}
