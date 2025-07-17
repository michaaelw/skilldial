import { Row } from "~/components/ui/row";

import React from "react";

import { Button } from "./ui/button";
import { Text } from "./ui/text";
import { AppMenu } from "./app-menu";
import { Link } from "expo-router";

import { Image } from "react-native";

export function Header() {
  return (
    <Row className="items-center justify-between p-4">
      <Link href="/">
        <Image
          source={require("~/assets/skilldial-small.png")}
          style={{ width: 50, height: 50 }}
        />
      </Link>
      <Row className="gap-2 items-center">
        <Button>
          <Text>Upgrade</Text>
        </Button>
        <AppMenu />
      </Row>
    </Row>
  );
}
