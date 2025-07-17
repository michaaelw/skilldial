import { Button } from "~/components/ui/button";
import { Column } from "~/components/ui/column";
import { Text } from "~/components/ui/text";

export function CallToActionSection() {
  return (
    <Column className="gap-4 my-6">
      <Text className="text-center text-2xl">
        Ready to ace your tech interview?
      </Text>

      <Text className="text-center">
        Join thousands of successful candidates who have transformed their
        interview preparation. Get started today and unlock your potential!
      </Text>

      <Button variant="outline" className="self-center">
        <Text>Start Your Free Trial Now</Text>
      </Button>
    </Column>
  );
}
