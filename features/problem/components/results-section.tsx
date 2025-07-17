import { PanelLeft } from "lucide-react-native";
import { useState } from "react";
import { Row } from "~/components/ui/row";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Text } from "~/components/ui/text";
import { ProblemRatingCard } from "./problem-rating-card";
import { RuntimeChart } from "./runtime-chart";

export function ResultsSection() {
  const [tabValue, setTabValue] = useState("results");
  return (
    <Tabs
      className="w-1/4"
      value={tabValue}
      onValueChange={(value) => setTabValue(value)}
      orientation="horizontal"
    >
      <TabsList className="flex-row justify-between">
        <Row>
          <TabsTrigger value="results">
            <Text>Results</Text>
          </TabsTrigger>
          <TabsTrigger value="solution">
            <Text>Solution</Text>
          </TabsTrigger>

          <TabsTrigger value="history">
            <Text>History</Text>
          </TabsTrigger>
        </Row>

        <PanelLeft className="dark:text-white" />
      </TabsList>

      <TabsContent value="results">
        <ProblemRatingCard />
        <RuntimeChart />
      </TabsContent>
    </Tabs>
  );
}
