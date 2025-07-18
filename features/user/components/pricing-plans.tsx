import * as React from "react";
import { View, ScrollView } from "react-native";
import { Check, X } from "lucide-react-native";

import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "~/components/ui/card";

const features = ["Title", "Status", "Priority", "Priority", "Priority"];

type Interval = "monthly" | "yearly";
type PlanProps = {
  interval: Interval;
};

function FreePlan({ interval }: PlanProps) {
  return (
    <Card className="flex-1 border border-gray-200 dark:border-gray-800 rounded-lg">
      <CardHeader>
        <CardTitle>Free</CardTitle>
        <Text className="text-2xl font-bold">
          $0 <Text className="text-sm text-gray-500">mo</Text>
        </Text>
      </CardHeader>
      <CardContent className="gap-2 mt-2">
        {features.map((feat, i) => (
          <View key={i} className="flex-row items-center gap-2">
            <X size={14} color="red" />
            <Text className="text-gray-500">{feat}</Text>
          </View>
        ))}
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="mt-4 w-full">
          <Text>Your current plan</Text>
        </Button>
      </CardFooter>
    </Card>
  );
}

function ProPlan({ interval }: PlanProps) {
  return (
    <Card className="flex-1 border border-gray-200 dark:border-gray-800 rounded-lg">
      <CardHeader>
        <CardTitle>Pro</CardTitle>
        <Text className="text-2xl font-bold">
          {interval === "yearly" ? "$40" : "$5"}{" "}
          <Text className="text-sm text-gray-500">mo</Text>
        </Text>
      </CardHeader>
      <CardContent className="gap-2 mt-2">
        {features.map((feat, i) => (
          <View key={i} className="flex-row items-center gap-2">
            <Check size={14} color="green" />
            <Text className="text-gray-700">{feat}</Text>
          </View>
        ))}
      </CardContent>
      <CardFooter>
        <Button className="mt-4 w-full">
          <Text>Upgrade</Text>
        </Button>
      </CardFooter>
    </Card>
  );
}

export function PricingPlans() {
  const [plan, setPlan] = React.useState("yearly");
  const intervals: Interval[] = ["yearly", "monthly"];

  return (
    <View className="flex-1 p-4">
      <Text className="text-xl font-bold mb-1">Billing</Text>
      <Text className="text-gray-500 mb-4">
        Manage your subscription easily.
      </Text>

      <Tabs
        value={plan}
        onValueChange={setPlan}
        className="flex-1"
        orientation="horizontal"
      >
        <TabsList className="flex-row w-full gap-2 mb-4">
          <TabsTrigger value="yearly" className="flex-1">
            <Text>Yearly</Text>
          </TabsTrigger>
          <TabsTrigger value="monthly" className="flex-1">
            <Text>Monthly</Text>
          </TabsTrigger>
        </TabsList>

        {intervals.map((interval) => (
          <TabsContent key={interval} value={interval} className="flex-1">
            <ScrollView contentContainerStyle={{ flex: 1 }}>
              <View className="flex-row gap-4 flex-1">
                <FreePlan interval={interval} />
                <ProPlan interval={interval} />
              </View>
            </ScrollView>
          </TabsContent>
        ))}
      </Tabs>
    </View>
  );
}
