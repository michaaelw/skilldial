import { flex, gap64, mxAuto } from "~/styles";
import { ScrollView } from "react-native";

import { Column } from "~/components/ui/column";
import { Container } from "~/components/container";
import { Redirect } from "expo-router";
import { useAuth } from "../auth/auth.context";

import { LoadingSpinner } from "../auth/components/loading-spinner";
import { Text } from "~/components/ui/text";
import { FooterSection } from "./components/footer-section";
import { Header } from "../../components/header";
import { HeroSection } from "./components/hero-section";
import { WelcomeSection } from "./components/welcome-section";
import { TestimoninalSection } from "./components/testimonial-section";
import { FeaturesSection } from "./components/features-section";
import { HowItWorksSection } from "./components/how-it-works-section";
import { SuccessSection } from "./components/success-section";
import { FAQSection } from "./components/faq-section";
import { CallToActionSection } from "./components/call-to-action-section";

export function LandingScreen() {
  const { user, isLoading } = useAuth();

  if (isLoading) return <LoadingSpinner />;

  if (user) {
    return <Redirect href={"/(main)"} />;
  }

  return (
    <Container showHeader={false}>
      <ScrollView style={[flex]}>
        <Column className="max-w-[1200px] w-full mx-auto gap-32">
          <HeroSection />
          <WelcomeSection />
          <TestimoninalSection />
          <FeaturesSection />
          <HowItWorksSection />
          <SuccessSection />
          <FAQSection />
          <CallToActionSection />
        </Column>
        <FooterSection />
      </ScrollView>
    </Container>
  );
}
