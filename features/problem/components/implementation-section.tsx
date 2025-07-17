import {
  Braces,
  ChevronDown,
  Maximize2,
  PanelLeft,
  Undo,
} from "lucide-react-native";
import { View } from "react-native";
import { Button } from "~/components/ui/button";
import { Column } from "~/components/ui/column";
import { Row } from "~/components/ui/row";
import { Text } from "~/components/ui/text";
import CodeEditor from "./code-editor";
import { UseCasesSection } from "./use-cases-section";
import { useColorScheme } from "~/lib/useColorScheme";

export function ImplementationSection() {
  return (
    <Column className="flex-1">
      <Row className="justify-between items-center">
        <Text>My Implementation</Text>
        <Row className="gap-4 items-center">
          <Braces className="dark:text-white" />
          <Undo className="dark:text-white" />
          <Maximize2 className="dark:text-white" />
          <PanelLeft className="dark:text-white" />
          <Button variant="ghost">
            <Text>Python</Text>
            <ChevronDown className="dark:text-white" />
          </Button>
        </Row>
      </Row>
      <View>
        <CodeEditor />
      </View>

      <UseCasesSection />
    </Column>
  );
}
