import { flex, gap16, gap8, mxAuto, p16, wMax } from "~/styles";
import { View } from "react-native";
import { SettingsForm } from "./components/SettingsForm";

import { useMedia } from "~/lib/useMedia";
import { Container } from "~/components/container";
import { Text } from "~/components/ui/text";
import { Row } from "~/components/ui/row";
import { Column } from "~/components/ui/column";
import { Separator } from "~/components/separator";

export function SettingsScreen() {
  const media = useMedia();

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
          <Text>Customise your account to suit your needs</Text>

          <Separator />
          <Row>
            <Column style={[media.md && flex, gap16]}>
              <Text>Account</Text>
              <Text>Billing</Text>
            </Column>

            <Column style={[flex]}>
              <SettingsForm />
            </Column>
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
        <Row style={[media.md && flex, gap16]}>
          <Text>Account</Text>
          <Text>Billing</Text>
        </Row>

        <Column style={[flex]}>
          <SettingsForm />
        </Column>
      </View>
    </Container>
  );
}
