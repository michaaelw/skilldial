import { AdamSmith } from "~/components/icons/AdamSmith";
import { XIcon } from "~/components/icons/X";

import { StyleSheet, View } from "react-native";
import { Column } from "~/components/ui/column";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { Row } from "~/components/ui/row";

export function TestimoninalSection() {
  return (
    <Column>
      <View className="flex-col md:flex-row">
        <Column className="gap-8 w-full md:w-2/4">
          <Text className="text-2xl">What our customers are saying</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>

          <Button className="flex-start" variant="outline">
            <Text>Normal CTA</Text>
          </Button>
        </Column>
        <Column className="gap-8 p-4 w-full md:w-2/4">
          <Row className="gap-8">
            <XIcon size={63} />
            <Column className="flex-1 gap-8">
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
              <Row>
                <Text>Adam Smith </Text>
                <AdamSmith />
              </Row>
            </Column>
          </Row>
        </Column>
      </View>
    </Column>
  );
}

const styles = StyleSheet.create({});
