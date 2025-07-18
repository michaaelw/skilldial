import { flex, gap16, gap8, mxAuto, p16, wMax } from "~/styles";
import { View } from "react-native";
import { SettingsForm } from "./components/settings-form";

import { useMedia } from "~/lib/useMedia";
import { Container } from "~/components/container";
import { Text } from "~/components/ui/text";
import { Row } from "~/components/ui/row";
import { Column } from "~/components/ui/column";
import { Separator } from "~/components/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { useObservable, useSelector } from "@legendapp/state/react";
import { BillingForm } from "./components/billing-form";
import { PricingPlans } from "./components/pricing-plans";
import { cn } from "~/lib/utils";

type TabValues = "account" | "billing";

export function SettingsScreen() {
  const media = useMedia();

  const activeTab$ = useObservable<TabValues>("account");

  const activeTab = useSelector(activeTab$);

  if (media.md) {
    return (
      <Container showHeader={true}>
        <View
          style={[
            flex,
            gap8,
            p16,
            { flexDirection: "column", maxWidth: 1000 },
            wMax,
            mxAuto,
          ]}
        >
          <Text className="opacity-60">
            Customise your account to suit your needs
          </Text>

          <Separator />

          <Row className="flex-1">
            <Tabs
              className="flex-row flex-1"
              orientation="horizontal"
              value={activeTab}
              onValueChange={(value) => activeTab$.set(value as TabValues)}
            >
              <TabsList className="items-start w-1/4 bg-transparent">
                <TabsTrigger
                  value="account"
                  className={cn(
                    "w-full",
                    activeTab !== "account" && "bg-gray-100 dark:bg-gray-800"
                  )}
                >
                  <Text className="font-bold">Account</Text>
                </TabsTrigger>

                <TabsTrigger
                  value="billing"
                  className={cn(
                    "w-full",
                    activeTab !== "billing" && "bg-gray-100 dark:bg-gray-800"
                  )}
                >
                  <Text className="font-bold">Billing</Text>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="account" className="px-4">
                <SettingsForm />
              </TabsContent>
              <TabsContent value="billing" className="px-4 flex-1">
                <PricingPlans />
              </TabsContent>
            </Tabs>
          </Row>
        </View>
      </Container>
    );
  }
  return (
    <Container showHeader={true}>
      <View
        style={[
          flex,
          gap8,
          p16,
          { flexDirection: "column", maxWidth: 1000 },
          wMax,
          mxAuto,
        ]}
      >
        <Tabs
          orientation="horizontal"
          value={activeTab}
          onValueChange={(value) => activeTab$.set(value as TabValues)}
        >
          <TabsList>
            <TabsTrigger value="account">
              <Text>Account</Text>
            </TabsTrigger>

            <TabsTrigger value="billing">
              <Text>Billing</Text>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <SettingsForm />
          </TabsContent>
        </Tabs>
      </View>
    </Container>
  );
}
