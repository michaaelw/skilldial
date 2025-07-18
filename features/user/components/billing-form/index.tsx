import { View, ScrollView } from "react-native";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import {
  CalendarDays,
  DollarSign,
  MailIcon,
  CreditCard,
} from "lucide-react-native";

export function BillingForm() {
  return (
    <ScrollView className="flex-1 p-4 bg-white">
      <Text className="text-xl font-semibold mb-1">Billing</Text>
      <Text className="text-gray-500 mb-4">
        Manage your subscription easily.
      </Text>

      {/* Deck Section */}
      <View className="mb-6">
        <Text className="font-medium text-base mb-2">Deck</Text>
        <Text className="text-gray-500 mb-2">
          List of your subscribed decks.
        </Text>

        <Card className="flex-row justify-between items-center p-4 border border-gray-200 rounded-lg">
          <View className="flex-1">
            <Text className="font-medium text-base mb-1">
              Data Structure & Algorithm - $106
            </Text>
            <View className="flex-row items-center gap-4">
              <View className="flex-row items-center gap-1">
                <DollarSign size={14} color="#6b7280" />
                <Text className="text-sm text-gray-500">Billed Annually</Text>
              </View>
              <View className="flex-row items-center gap-1">
                <CalendarDays size={14} color="#6b7280" />
                <Text className="text-sm text-gray-500">
                  Next billing date May 26th, 2025
                </Text>
              </View>
            </View>
          </View>

          <Button variant="outline" size="sm" className="ml-4">
            Cancel Subscription
          </Button>
        </Card>
      </View>

      {/* Billing Info */}
      <View className="mb-6">
        <Text className="font-medium text-base mb-2">Billing information</Text>
        <Text className="text-gray-500 mb-2">
          Stay informed and secure with your billing information.
        </Text>

        <Card className="flex-row justify-between items-center p-4 border border-gray-200 rounded-lg">
          <View className="flex-1">
            <Text className="font-medium text-base">M Faisal</Text>
            <View className="flex-row items-center gap-2 mt-1">
              <MailIcon size={14} color="#6b7280" />
              <Text className="text-sm text-gray-500">faisal@gmail.com</Text>
            </View>
          </View>

          <View className="flex-row gap-2 ml-4">
            <Button size="sm" variant="outline">
              Change
            </Button>
            <Button size="sm" variant="outline">
              History
            </Button>
          </View>
        </Card>
      </View>

      {/* Payment Info */}
      <View>
        <Text className="font-medium text-base mb-2">Payment information</Text>
        <Text className="text-gray-500 mb-2">
          Keep your payment information up to date for uninterrupted service.
        </Text>

        <Card className="flex-row justify-between items-center p-4 border border-gray-200 rounded-lg">
          <View className="flex-row items-center gap-2">
            <CreditCard size={16} color="#6b7280" />
            <Text className="text-gray-800 text-sm">************12345</Text>
          </View>

          <Button variant="default" size="sm">
            <Text>Update</Text>
          </Button>
        </Card>
      </View>
    </ScrollView>
  );
}
