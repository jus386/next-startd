import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import CasesSection from '@/components/cases-section';
import Footer from '@/components/footer';
import ApplyForm from '@/components/apply-form';

export default function Apply() {
  return (
    <Page>
      <NextSeo title="Apply - Casabrite" description="Apply mortgage etc!" />
      <main>
        <ApplyForm />
      </main>
      <Footer />
    </Page>
  );
}
