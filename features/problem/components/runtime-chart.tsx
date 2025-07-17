import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { LineChart, InfoIcon } from "lucide-react-native";
import { Row } from "~/components/ui/row";
import { Column } from "~/components/ui/column";

const runtimeData = [212, 117, 231, 10, 212, 212];
const max = Math.max(...runtimeData);
const maxBarHeight = 120;

export function RuntimeChart() {
  return (
    <View className="rounded-xl border border-gray-200 dark:border-blue-900 p-4 dark:bg-gray-800">
      {/* Header */}
      <Row className="justify-between items-center mb-4">
        <Row className="items-center gap-1">
          <LineChart size={16} color="#64748b" />
          <Text className="text-gray-500 font-medium">Runtime</Text>
        </Row>
        <View className="border border-gray-200 rounded-md p-1">
          <InfoIcon size={12} color="#000" />
        </View>
      </Row>

      {/* Bar Chart */}
      <View className="flex-row justify-between items-end h-[150px] w-full px-2">
        {runtimeData.map((value, i) => {
          const height = Math.round((value / max) * maxBarHeight);
          return (
            <Column key={i} className="items-center justify-end flex-1">
              <View className="bg-teal-600 rounded-md w-5" style={{ height }} />
              <Text className="text-xs text-gray-500 mt-1">{value}ms</Text>
            </Column>
          );
        })}
      </View>
    </View>
  );
}
