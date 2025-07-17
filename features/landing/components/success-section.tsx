import { AdamSmith } from "~/components/icons/AdamSmith";
import { XIcon } from "~/components/icons/X";
import { Column } from "~/components/ui/column";
import { Row } from "~/components/ui/row";
import { Text } from "~/components/ui/text";

export function SuccessSection() {
  return (
    <Column className="gap-8">
      <Text className="text-center text-2xl">
        1000+ People have successfully entered the job market with us
      </Text>

      <Row className="flex-col md:flex-row gap-2">
        <Column className="gap-4 p-4 w-full md:w-2/4 border border-gray-300">
          <Row className="gap-4">
            <Column className="w-[60px] h-[60px] rounded-full bg-blue-500">
              <XIcon color={"blue"} size={60} />
            </Column>
            <Column className="flex-1 gap-4">
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

        <Column className="gap-4 p-4 w-full md:w-2/4 border border-gray-300">
          <Row className="gap-4">
            <Column className="w-[60px] h-[60px] rounded-full bg-blue-500">
              <XIcon color={"blue"} size={60} />
            </Column>
            <Column className="flex-1 gap-4">
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
      </Row>
    </Column>
  );
}
