import {
  CircleSlash,
  Clock,
  Heart,
  Repeat2,
  Star,
  ThumbsUp,
  TrendingUp,
} from "lucide-react-native";
import { JSX } from "react";
import { TouchableOpacity, View } from "react-native";
import { Column } from "~/components/ui/column";
import { Row } from "~/components/ui/row";
import { Text } from "~/components/ui/text";

export function ProblemRatingCard() {
  return (
    <Column className="gap-4 py-4">
      <Row className="flex-1 justify-between">
        <Column>
          <Text className="text-green-500 font-bold">Success</Text>
          <Text className="text-sm opacity-60">10/10 test cases passed</Text>
        </Column>
        <Column>
          <Row className="gap-2 items-center">
            <Text>82.5%</Text>
            <TrendingUp className="dark:text-white" />
          </Row>
          <Text className="text-sm opacity-60">Beats</Text>
        </Column>
      </Row>
      <Column className="bg-blue-50 dark:bg-gray-800 p-4 rounded-xl border border-blue-100 dark:border-blue-900 space-y-4">
        {/* Header */}
        <Column className="space-y-1">
          <Text className="text-center text-base font-semibold">
            To go to the next question, what do you think about this problem?
          </Text>
          <Text className="text-center text-sm text-gray-500">
            Select an option to your path and proceed.
          </Text>
        </Column>

        {/* Row 1 */}
        <Row className="justify-between space-x-2">
          <RatingButton
            icon={<Repeat2 size={16} color="#10B981" />}
            label="Again"
            time="10m"
          />
          <RatingButton
            icon={<CircleSlash size={16} color="#EF4444" />}
            label="Hard"
            time="6h"
          />
        </Row>

        {/* Row 2 */}
        <Row className="justify-between space-x-2">
          <RatingButton
            icon={<ThumbsUp size={16} color="#3B82F6" />}
            label="Good"
            time="3d"
          />
          <RatingButton
            icon={<Heart size={16} color="#F97316" />}
            label="Easy"
            time="8d"
          />
        </Row>

        {/* Row 3 (centered) */}
        <View className="items-center">
          <RatingButton
            icon={<Star size={16} color="#000" />}
            label="Perfect"
            time="14d"
          />
        </View>
      </Column>
    </Column>
  );
}

function RatingButton({
  icon,
  label,
  time,
}: {
  icon: JSX.Element;
  label: string;
  time: string;
}) {
  return (
    <TouchableOpacity className="flex-row items-center bg-white dark:bg-gray-800 rounded-lg px-3 py-2 space-x-2 border border-gray-200 dark:border-gray-700">
      {icon}
      <Text className="font-medium text-sm">{label}</Text>
      <Clock size={14} color="#6B7280" />
      <Text className="text-sm text-gray-500">{time}</Text>
    </TouchableOpacity>
  );
}
