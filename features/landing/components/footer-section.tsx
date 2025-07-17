import { Button } from "~/components/ui/button";
import { Column } from "~/components/ui/column";
import { Cube } from "~/components/icons/cube";
import { Row } from "~/components/ui/row";
import { Text } from "~/components/ui/text";
import {
  alignCenter,
  gap16,
  gap8,
  justifySpaceBetween,
  opacity80,
} from "~/styles";

export function FooterSection() {
  return (
    <Column
      style={[
        gap16,
        {
          flex: 1,
        },
      ]}
    >
      <Column
        style={{
          gap: 16,
          maxWidth: 1200,
          paddingVertical: 16,
          marginHorizontal: "auto",
          width: "100%",
        }}
      >
        <Row style={[gap8, alignCenter]}>
          <Cube size={24}></Cube>
          <Text>SkillDial</Text>
        </Row>
        <Row style={[gap16, justifySpaceBetween]}>
          <Text>Build your skill.</Text>
          <Column style={[gap8]}>
            <Button variant="outline">Big CTA</Button>
            <Button variant="outline">Normal CTA</Button>
          </Column>
        </Row>

        <Row className="flex flex-wrap">
          <Column>
            <Text>Contact</Text>
            <Text style={[opacity80]}>
              9565 S. Railroad Dr. Spring Valley, NY 10977 United States 0800
              01234 5678
            </Text>
          </Column>
          <Column>
            <Text>Navigation</Text>
            <Column>
              <Text className="opacity-80">Home</Text>
              <Text className="opacity-80">Navigation Item</Text>
              <Text className="opacity-80">Other Nav Item</Text>
            </Column>
          </Column>
          <Column>
            <Text>Social Media</Text>
            <Column>
              <Text className="opacity-80">Twitter</Text>
              <Text className="opacity-80">Facebook</Text>
              <Text className="opacity-80">Instagram</Text>
            </Column>
          </Column>
          <Column className="w-full md:w-1/4]">
            <Text>Legal</Text>
            <Column>
              <Text className="opacity-80">Privacy Policy</Text>
              <Text className="opacity-80">Cookie Agreement</Text>
              <Text className="opacity-80">Terms of Service</Text>
            </Column>
          </Column>
        </Row>
      </Column>
    </Column>
  );
}
