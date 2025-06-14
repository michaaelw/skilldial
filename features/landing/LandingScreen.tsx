import { useTheme } from '@/components/ThemeProvider';
import { flex, gap64, mxAuto } from '@/styles';
import { ScrollView } from 'react-native';
import { HeaderSection } from './components/HeaderSection';
import { HeroSection } from './components/HeroSection';
import { WelcomeSection } from './components/WelcomeSection';
import { TestimoninalSection } from './components/TestimonialSection';
import { FeaturesSection } from './components/FeaturesSection';
import { HowItWorksSection } from './components/HowItWorks';
import { SuccessSection } from './components/SuccessSection';
import { FAQSection } from './components/FAQSection';
import { CallToActionSection } from './components/CallToActionSection';
import { FooterSection } from './components/FooterSection';
import { Column } from '@/components/Column';

export function LandingScreen() {
  const { theme } = useTheme();

  return (
    <ScrollView
      style={[flex]}
      contentContainerStyle={[{ backgroundColor: theme.colors.background }]}>
      <Column
        style={[
          mxAuto,
          gap64,
          {
            maxWidth: 1200,
          },
        ]}>
        <HeaderSection />
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
  );
}
