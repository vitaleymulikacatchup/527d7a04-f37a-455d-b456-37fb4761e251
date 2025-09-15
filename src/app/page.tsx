"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "futuristicAndOutOfBox", colorTemplate: 1, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Subhadeep"
          navItems={[
            { name: 'Hero', id: 'hero' },
            { name: 'About', id: 'about' },
            { name: 'How to Buy', id: 'how-to-buy' },
            { name: 'Tokenomics', id: 'tokenomics' },
            { name: 'FAQ', id: 'faq' },
            { name: 'Footer', id: 'footer' }
          ]}
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero
          title="Welcome to Subhadeep"
          subtitle="The futuristic approach to software solutions"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="What is Subhadeep?"
          descriptions={[
            "Subhadeep is a comprehensive SaaS product that aims to streamline your workflow.",
            "We bring technological innovation to your business processes."
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D
          variant="simple"
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <NumberGridTokenomics
          title="Tokenomics"
          description="An overview of our token distribution and use cases."
          kpiItems={[
            { value: '10M', description: 'Total Supply' },
            { value: '5M', description: 'Circulating Supply' },
            { value: '2M', description: 'Locked for Reserve' }
          ]}
        />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <CentralFAQ
          items={[
            { title: 'What is Subhadeep?', content: 'Subhadeep is designed to improve efficiency across businesses.' },
            { title: 'How can I start using Subhadeep?', content: 'Simply sign up on our website to begin.' },
            { title: 'What payment methods are accepted?', content: 'We accept all major credit cards and PayPal.' },
            { title: 'Is there a free trial?', content: 'Yes, a 30-day free trial is available.' }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={100}
          logoHeight={50}
          columns={[
            { title: 'Products', items: [{ label: 'Subhadeep', onClick: () => {} }] },
            { title: 'Company', items: [{ label: 'About Us', onClick: () => {} }] },
            { title: 'Support', items: [{ label: 'Contact', onClick: () => {} }] }
          ]}
          copyrightText="© 2023 Subhadeep. All rights reserved."
          onPrivacyClick={() => {}
          }
        />
      </div>
    </SiteThemeProvider>
  );
}