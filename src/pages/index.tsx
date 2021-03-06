import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import CasesSection from '@/components/cases-section';
import SocialProof from '@/components/social-proof';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="Mississauga mortgage broker, Iko Maurovski"
        description="Mississauga mortgage broker, Iko Maurovski | Find best mortgage rates | Mortgage Calculator"
      />
      <main>
        <CasesSection />
      </main>
      <Footer />
    </Page>
  );
}
