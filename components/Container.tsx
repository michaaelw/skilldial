import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "~/components/header";

export const Container = ({
  children,
  showHeader = true,
}: {
  children: React.ReactNode;
  showHeader?: boolean;
}) => {
  return (
    <SafeAreaView className="flex-1">
      {showHeader ? <Header /> : null}
      {children}
    </SafeAreaView>
  );
};
