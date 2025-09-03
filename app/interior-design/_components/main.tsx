'use client';
import { useModalStore } from '@/store/modals-toggle-store';

import ArchitectureThatSpeaksStyleSection from './architecture-that-speak-styles-section';
import CalculateSection from './calculate-section';
import CTASection from './cta-section';
import FAQSection from './faq-section';
import FeatureInSection from './featured-in-section';
import GlimpseSection from './glimpse-section';
import HeroSection from './hero-section';
import ReferFriendModalForm from './refer-your-friend-modal-form';
import { ThinkInteriorSection } from './think-interior-section';
import TrustedPartnersSection from './trusted-partners-section';
import WhyChooseUsSection from './why-choose-us-section';

export default function MainContent() {
  const { isReferFriendModalOpen } = useModalStore();

  return (
    <>
      <HeroSection />
      <ThinkInteriorSection />
      <WhyChooseUsSection />
      <CalculateSection />
      <GlimpseSection />
      <TrustedPartnersSection />
      <ArchitectureThatSpeaksStyleSection />
      <FeatureInSection />
      <FAQSection />
      <CTASection />
      {isReferFriendModalOpen && <ReferFriendModalForm />}
    </>
  );
}
