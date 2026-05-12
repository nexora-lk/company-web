import HeroSection from '@/components/sections/HeroSection'
import FAQAccordion from '@/components/sections/FAQAccordion'
import CTABanner from '@/components/sections/CTABanner'

const faqItems = [
  { question: 'What does Prestige Glamour Group do?', answer: 'PGG is a diversified Sri Lankan group with operations across plantation, cultivation, microfinance, gem export, FMCG and community development — established in 2013.' },
  { question: 'How do I invest with PGG?', answer: 'We offer four structured models: Agri-Land Partnership, Capital Contribution, Agri-Real Estate and Gem Export. Visit Investment Plans or submit an inquiry — our team will walk you through the agreement and onboarding.' },
  { question: 'What is the minimum investment?', answer: 'Minimums range from LKR 200,000 for our Capital Contribution Model to LKR 1,000,000 for Agri-Real Estate. Each model has its own terms, ROI band and payout schedule.' },
  { question: 'Where are your plantations located?', answer: 'We currently manage 137+ active acres across Puttalam, Hambantota, Mihintale, Kandy Haragama, Madrankkuliya and Redebedi Ealla, with 5 expansion sites planned for 2026.' },
  { question: 'How do I apply for microfinance?', answer: 'Visit any of our 25+ branches with basic ID and income documents. Loan officers issue decisions within 48 hours and funds are disbursed to your bank account.' },
  { question: 'What are your microfinance products?', answer: 'Three core products: Agri Micro Loan (up to LKR 500,000), SME Business Loan (up to LKR 2,000,000) and Housing Micro Loan (up to LKR 1,000,000).' },
  { question: 'Is PGG regulated?', answer: 'Yes. We operate under Companies Act No. 07 of 2007, are BOI registered, hold export licenses from the National Gem & Jewellery Authority, and our microfinance arm (Next Investments) is licensed. Tax, EPF/ETF compliance is current.' },
  { question: 'Can I visit a plantation site?', answer: 'Yes — site visits can be arranged through our investment team. Contact us to schedule a tour aligned with the crop cycle of your preferred location.' },
]

export default function FAQPage() {
  return (
    <>
      <HeroSection label="FAQ" title="Frequently Asked Questions" subtitle="Find answers to common questions about our investment models, cultivation plans, microfinance products and group operations." size="small" align="center" backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&q=80" backgroundVideo="https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4" />
      <section className="py-24 bg-dark">
        <div className="max-w-3xl mx-auto px-6">
          <FAQAccordion items={faqItems} />
        </div>
      </section>
      <CTABanner title="Still Have Questions?" subtitle="Get in touch and our team will help you find the right answer." primaryBtn={{ label: 'Contact Us', href: '/contact-us' }} secondaryBtn={{ label: 'Investment Plans', href: '/investment-plans' }} />
    </>
  )
}
