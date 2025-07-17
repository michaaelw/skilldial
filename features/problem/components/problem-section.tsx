import { PanelLeft } from "lucide-react-native";
import { useState } from "react";
import { View } from "react-native";
import { Row } from "~/components/ui/row";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Text } from "~/components/ui/text";
import { Problem } from "~/types";

export function ProblemSection({ problem }: { problem: Problem }) {
  const [tabValue, setTabValue] = useState("problem");

  return (
    <Tabs
      value={tabValue}
      onValueChange={setTabValue}
      className="w-[25%]"
      orientation="horizontal"
    >
      <TabsList className="flex-row justify-between">
        <Row>
          <TabsTrigger value="problem">
            <Text>Problem</Text>
          </TabsTrigger>
          <TabsTrigger value="learn">
            <Text>Learn</Text>
          </TabsTrigger>
        </Row>
        <PanelLeft className="dark:text-white" />
      </TabsList>

      <TabsContent value="problem">
        <View className="p-4">
          <Text>{problem?.prompt}</Text>
        </View>
      </TabsContent>

      <TabsContent value="learn">
        <View className="p-4">
          <Text>Learning resources coming soon...</Text>
        </View>
      </TabsContent>
    </Tabs>
  );
}
