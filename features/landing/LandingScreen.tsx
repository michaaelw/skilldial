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
import { Container } from '@/components/Container';
import { Redirect } from 'expo-router';
import { useAuth } from '../auth/AuthContext';
import { Loader2 } from 'lucide-react-native';
import * as config from '@/config';

export function LandingScreen() {
  const { theme } = useTheme();
  const { user, isLoading } = useAuth();

  if (isLoading) return <Loader2 />;
  if (user) {
    return <Redirect href={'/(main)'} />;
  }

  return (
    <Container showHeader={false}>
      <ScrollView
        style={[flex]}
        contentContainerStyle={[{ backgroundColor: theme.colors.background }]}>
        <Column
          style={[
            mxAuto,
            gap64,
            {
              width: '100%',
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
    </Container>
  );
}
