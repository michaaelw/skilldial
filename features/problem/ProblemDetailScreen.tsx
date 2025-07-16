import { useTheme } from '@/components/ThemeProvider';

import { Container } from '@/components/Container';
import { useAuth } from '../auth/AuthContext';

import { LoadingSpinner } from '../auth/components/LoadingSpinner';
import { Row } from '@/components/Row';
import { Text } from '@/components/Text';
import { View } from 'react-native';
import { alignCenter, flex, gap16, gap8, justifySpaceBetween, p8 } from '@/styles';
import { TabBar } from '@/components/TabBar';
import { Braces, ChevronDown, Maximize2, PanelLeft, Undo } from 'lucide-react-native';
import { useQuery } from '@tanstack/react-query';
import { useLocalSearchParams } from 'expo-router';
import * as problemService from '@/features/problem/ProblemService';
import { Column } from '@/components/Column';

import { Button } from '@/components/Button';
import CodeEditor from './components/CodeEditor';
import { Problem } from '@/types';
import { useProblem } from './ProblemPresenter';

function ProblemSection({ problem }: { problem: Problem }) {
  return (
    <View style={[{ maxWidth: '25%' }]}>
      <Row style={[justifySpaceBetween, alignCenter]}>
        <TabBar
          tabs={[
            { key: 'problem', label: 'Problem' },
            { key: 'learn', label: 'Learn' },
          ]}
        />
        <PanelLeft />
      </Row>
      <View style={[p8]}>
        <Text>{problem?.prompt}</Text>
      </View>
    </View>
  );
}

function ImplementationSection() {
  return (
    <Column style={[flex]}>
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
      <Column>
        <Text>Test cases</Text>
      </Column>
    </Column>
  );
}

function ResultsSection() {
  return (
    <View style={[{ width: '33%' }]}>
      <Row style={[justifySpaceBetween, alignCenter]}>
        <TabBar
          tabs={[
            { key: 'problem', label: 'Results' },
            { key: 'learn', label: 'Solution' },
            { key: 'history', label: 'History' },
          ]}
        />
        <PanelLeft />
      </Row>
    </View>
  );
}

export function ProblemDetailScreen() {
  const { theme, media } = useTheme();
  const { user } = useAuth();

  const params = useLocalSearchParams<{ id: string }>();

  const { data, isLoading } = useProblem({ problemId: params?.id });

  if (isLoading) return <LoadingSpinner />;

  if (data?.error) return <div>{data?.error.message}</div>;

  return (
    <Container showHeader={true}>
      <Column style={[gap8]}>
        <Text variant="h2">{data?.data?.title}</Text>
        <Row style={[gap16]}>
          {media?.md && <ProblemSection problem={data?.data} />}
          <ImplementationSection />
          <ResultsSection />
        </Row>
      </Column>
    </Container>
  );
}
