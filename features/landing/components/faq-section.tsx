import { FileQuestion } from "lucide-react-native";
import { Column } from "~/components/ui/column";
import { Text } from "~/components/ui/text";
import { Row } from "~/components/ui/row";

export function FAQSection() {
  return (
    <Column className="gap-8">
      <Text className="text-center text-2xl">Frequently asked questions</Text>

      <Row className="flex flex-wrap">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <Row
              key={i}
              className="gap-2 items-center p-4 py-2 w-full md:w-2/4"
            >
              <FileQuestion />
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit?
              </Text>
            </Row>
          ))}
      </Row>
    </Column>
  );
}
