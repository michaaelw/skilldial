import { useState } from "react";
import { Column } from "~/components/ui/column";
import { Row } from "~/components/ui/row";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Text } from "~/components/ui/text";

export function UseCasesSection() {
  const [tabValue, setTabValue] = useState("usecase1");

  return (
    <Column className="gap-4">
      <Row className="">
        <Tabs
          value={tabValue}
          onValueChange={setTabValue}
          orientation="horizontal"
          className="w-auto flex-1"
        >
          <TabsList className="flex-row gap-2 justify-between">
            <Text className="">Use Cases</Text>

            <Row>
              <TabsTrigger value="usecase1">
                <Text>Use Case 1</Text>
              </TabsTrigger>
              <TabsTrigger value="usecase2">
                <Text>Use Case 2</Text>
              </TabsTrigger>
            </Row>
          </TabsList>
          <TabsContent value="usecase1">
            <Text className="text-base text-gray-700">
              This is the content for{" "}
              <Text className="font-semibold">Use Case 1</Text>.
            </Text>
          </TabsContent>

          <TabsContent value="usecase2">
            <Text className="text-base text-gray-700">
              This is the content for{" "}
              <Text className="font-semibold">Use Case 2</Text>.
            </Text>
          </TabsContent>
        </Tabs>
      </Row>
    </Column>
  );
}
