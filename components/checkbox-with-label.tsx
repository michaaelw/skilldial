import { useState } from "react";
import { Pressable, View } from "react-native";
import { Checkbox } from "~/components/ui/checkbox";
import { Text } from "~/components/ui/text";
import { Row } from "./ui/row";

type Props = {
  label: string;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
};

export function CheckboxWithLabel({
  label,
  defaultChecked = false,
  onChange,
}: Props) {
  const [checked, setChecked] = useState(defaultChecked);

  const handlePress = () => {
    const next = !checked;
    setChecked(next);
    onChange?.(next);
  };

  return (
    <Pressable onPress={handlePress}>
      <Row className="items-center space-x-2">
        <Checkbox checked={checked} onCheckedChange={handlePress} />
        <Text className="text-sm text-gray-700">{label}</Text>
      </Row>
    </Pressable>
  );
}
