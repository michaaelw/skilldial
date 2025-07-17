import { Button } from "~/components/ui/button";
import { Column } from "~/components/ui/column";
import { Row } from "~/components/ui/row";
import { Text } from "~/components/ui/text";

import { Link } from "expo-router";
import { View, Image } from "react-native";

export function HeroSection() {
  return (
    <Column className="">
      <View className="md:flex-row">
        <Column className="w-full md:w-2/4">
          <Text className="font-bold text-3xl">
            Conquer Your Data Structures & Algorithms Interview
          </Text>
          <Text className="text-2xl my-4">
            Prepare smarter, code better and land your dream job in tech.
          </Text>
          <Row className="gap-4">
            <Link href="/decks/core-programming-concepts" asChild>
              <Button variant="outline">Start free today!</Button>
            </Link>
            <Button variant="outline">Learn more</Button>
          </Row>
        </Column>
        <Column className="flex-1 mx-4">
          <View className="flex-1">
            <Image
              source={require("~/assets/wireframe.png")}
              style={{ width: "100%", height: 400 }}
              resizeMode="contain"
              alt="Wireframe"
            />
          </View>
        </Column>
      </View>
    </Column>
  );
}
