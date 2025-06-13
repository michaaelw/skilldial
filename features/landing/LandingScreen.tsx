import { Text } from '@/components/Text';
import { useTheme } from '@/components/ThemeProvider';
import { alignCenter, gap16, gap24, gap32, gap8, p16, textCenter } from '@/styles';
import React from 'react';
import { ScrollView, View, Pressable, TextInput, StyleSheet, Image } from 'react-native';
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
      style={[styles.container]}
      contentContainerStyle={[{ backgroundColor: theme.colors.background }]}>
      <Column
        style={{
          gap: 64,
          maxWidth: 1200,
          marginHorizontal: 'auto',
        }}>
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

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  link: {
    textDecorationLine: 'none',
    fontSize: 18,
  },
  logo: { fontWeight: 'bold', fontSize: 18 },
  navLinks: { paddingLeft: 32, flexDirection: 'row', gap: 12 },
  btn: { padding: 8, backgroundColor: '#eee', borderRadius: 4 },
  cta: { backgroundColor: '#007AFF', padding: 12, borderRadius: 6, marginTop: 12 },
  ctaText: { color: '#fff' },
  testimonial: { marginVertical: 24, padding: 16, backgroundColor: '#f9f9f9', borderRadius: 8 },
  testimonialText: { fontStyle: 'italic', textAlign: 'center' },
  sectionTitle: { fontSize: 20, fontWeight: '600', marginBottom: 12, textAlign: 'center' },
  features: { marginVertical: 24 },
  featureBox: { padding: 12, backgroundColor: '#f1f1f1', marginBottom: 8, borderRadius: 6 },
  featureText: { fontSize: 16 },
  howItWorks: { marginVertical: 24 },
  successStories: { marginVertical: 24, paddingHorizontal: 16 },
  faq: { marginVertical: 24 },
  ctaSection: { alignItems: 'center', marginVertical: 24 },
  footer: { padding: 24, alignItems: 'center', backgroundColor: '#eee' },
});
