import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import PageTransition from '@/components/layout/PageTransition';
import SmoothScroll from '@/components/layout/SmoothScroll';
import Script from 'next/script';
import CookieConsent from '@/components/layout/CookieConsent';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Geist, Manrope } from 'next/font/google';
import './globals.css';

const geist = Geist({
    subsets: ['latin'],
    variable: '--font-geist',
    display: 'swap',
    preload: true,
});

const manrope = Manrope({
    subsets: ['latin'],
    variable: '--font-manrope',
    display: 'swap',
    preload: true,
});

// Force entire site to be static — CDN serves pre-built HTML
export const dynamic = 'force-static';
export const revalidate = 86400; // Never revalidate — rebuild to update

export const metadata: Metadata = {
    title: "Prestige Glamour — Sri Lanka's Trusted Working Capital Company | Real Returns Since 2013",
    description:
        "Prestige Glamour Working Capital Solutions — Sri Lanka's most transparent working capital solutions provider. Invest in plantation, gems, real estate, microfinance and FMCG. 40-60% annual returns. 3,200+ investors. Since 2013.",
    keywords: [
        'Sri Lanka conglomerate',
        'plantation',
        'microfinance',
        'gems jewellery',
        'real estate',
        'hospitality',
        'agri-export',
        'solutions',

        // Plantation & Agriculture Keywords //

        //Company Type Keywords
        'diversified business group Sri Lanka',
        'Sri Lankan business organization',
        'multi-sector business Sri Lanka',
        'conglomerate Sri Lanka',
        'holding company Sri Lanka',
        'sustainable business Sri Lanka',
        'ethical business Sri Lanka',
        'community-driven business Sri Lanka',
        'Sri Lanka private limited company',
        'trusted company Sri Lanka',

       //Core Plantation Keywords
        'plantation solutions Sri Lanka',
        'plantation company Sri Lanka',
        'agricultural solutions Sri Lanka',
        'sustainable plantation Sri Lanka',
        'agri solutions Sri Lanka',
        'cultivation solutions Sri Lanka',
        'crop solutions Sri Lanka',
        'farming solutions Sri Lanka',
        'plantation business Sri Lanka',
        'plantation development Sri Lanka',

        //Crop-Specific Keywords
        'ginger cultivation Sri Lanka',
        'ginger farming solutions Sri Lanka',
        'ginger export Sri Lanka',
        'organic ginger Sri Lanka',
        'banana plantation Sri Lanka',
        'banana cultivation solutions',
        'mango farming Sri Lanka',
        'mango plantation solutions',
        'herbal crop cultivation Sri Lanka',
        'high value crop farming Sri Lanka',
        'export crop Sri Lanka',
        'specialty crop solutions Sri Lanka',
        'tropical fruit plantation',
        'spice cultivation Sri Lanka',

        //Landowner / Partner Keywords
        'land partnership Sri Lanka agriculture',
        'landowner solutions scheme Sri Lanka',
        'agricultural land partnership',
        'farming partnership Sri Lanka',
        'agri-partner Sri Lanka',
        'cultivation plan solutions Sri Lanka',
        'plantation ROI Sri Lanka',
        'agricultural return on solutions Sri Lanka',

        // Microfinance Keywords //

        //Core Microfinance Keywords
        'microfinance Sri Lanka',
        'microfinance company Sri Lanka',
        'rural microfinance Sri Lanka',
        'inclusive finance Sri Lanka',
        'financial inclusion Sri Lanka',
        'microfinance loans Sri Lanka',
        'microloan Sri Lanka',
        'community finance Sri Lanka',

        //Loan Product Keywords
        'small business loans Sri Lanka',
        'agricultural microfinance Sri Lanka',
        'rural entrepreneur loans',
        'smallholder farmer loans',
        'startup loans rural Sri Lanka',
        'equipment financing Sri Lanka',
        'working capital loan farmers Sri Lanka',
        'low income loan Sri Lanka',
        'easy loan Sri Lanka rural',
        'flexible repayment loan Sri Lanka',
        'no collateral loan Sri Lanka',
        'loan for farmers Sri Lanka',
        'loan application Sri Lanka rural',
        'best microfinance company in Sri Lanka for farmers',
        'low interest agricultural loans Sri Lanka',
        'how to apply microfinance loan Sri Lanka online',
        'no collateral small business loan Sri Lanka rural',
        'fast approval rural loan Sri Lanka',

        //Gem & Jewelry Export Keywords//

        //Core Gem Keywords
        'Sri Lankan gem export company',
        'gem export Sri Lanka',
        'gem trading company Sri Lanka',
        'certified gems Sri Lanka',
        'authentic Sri Lankan gemstones',
        'luxury gemstone export Sri Lanka',
        'gemstone wholesale Sri Lanka',
        'precious stone export Sri Lanka',

        //Gemstone-Specific Keywords
        'certified sapphire Sri Lanka',
        'buy sapphire Sri Lanka',
        'blue sapphire Sri Lanka export',
        'Ceylon sapphire buy',
        'Ceylon blue sapphire',
        'Sri Lankan ruby export',
        'alexandrite Sri Lanka',
        "cat's eye chrysoberyl Sri Lanka",
        'garnet export Sri Lanka',
        'padparadscha sapphire Sri Lanka',
        'star sapphire Sri Lanka',
        'natural gemstone Sri Lanka',
        'GIA certified gems Sri Lanka',
        'unheated sapphire Sri Lanka',

        //International Buyer Keywords
        'gem buyer Sri Lanka',
        'wholesale gem supplier Sri Lanka',
        'jewelry manufacturer gems',
        'gemstone importer from Sri Lanka',
        'buy gemstones direct from Sri Lanka',
        'Sri Lanka gemstone trading partner',
        'where to buy certified Ceylon sapphire in Sri Lanka',
        'trusted gemstone export company in Sri Lanka',
        'best place to buy blue sapphire direct from Sri Lanka',
        'wholesale unheated sapphire supplier Sri Lanka',
        'how to import gemstones from Sri Lanka',

        //FMCG & Fresh Foods Keywords//

        //FMCG Keywords
        'FMCG distribution Sri Lanka',
        'FMCG company Sri Lanka',
        'fresh food distribution Sri Lanka',
        'food distribution company Sri Lanka',
        'herbal product distribution Sri Lanka',
        'PGG Fresh Foods Sri Lanka',
        'value added food products Sri Lanka',
        'farm to table Sri Lanka',
        'organic fresh produce Sri Lanka',
        'fresh fruit distribution Sri Lanka',
        'agricultural produce distribution',
        'supermarket supplier Sri Lanka',
        'retail food supplier Sri Lanka',
        'wholesale fresh food Sri Lanka',
        'natural herbal products Sri Lanka',
        'plantation fresh foods brand',
        'best FMCG distribution company in Sri Lanka',
        'wholesale organic food supplier Sri Lanka',
        'fresh produce export Sri Lanka company',
        'farm to supermarket supply chain Sri Lanka',
        'reliable food distributor Sri Lanka wholesale',
        'organic herbal product supplier Sri Lanka',

        //Real Estate & Land Keywords//

        //Real Estate Keywords
        'agricultural land solutions Sri Lanka',
        'plantation real estate Sri Lanka',
        'estate development Sri Lanka',
        'commercial agricultural land Sri Lanka',
        'land solutions Sri Lanka',
        'agricultural estate Sri Lanka',
        'plantation land for sale Sri Lanka',
        'land development solutions Sri Lanka',
        'agri land appreciation Sri Lanka',
        'rural land solutions Sri Lanka',
        'agricultural land partnership Sri Lanka',
        'estate project solutions Sri Lanka',
        'land asset solutions Sri Lanka',
        'best agricultural land solutions opportunities in Sri Lanka',
        'how to invest in plantation land Sri Lanka',
        'profitable rural land solutions Sri Lanka',
        'secure land solutions in Sri Lanka agriculture sector',
        'foreign solutions in agricultural estates Sri Lanka',
        'high ROI plantation land solutions Sri Lanka',

        //Investment Keywords//

        //Investment Keywords
        'solutions plans Sri Lanka',
        'solutions opportunities Sri Lanka',
        'Sri Lanka solutions company',
        'best solutions Sri Lanka 2026',
        'agriculture solutions opportunity Sri Lanka',
        'sustainable solutions Sri Lanka',
        'ROI solutions Sri Lanka',
        'structured solutions plan Sri Lanka',
        'long term solutions Sri Lanka',
        'solutions partnership Sri Lanka',
        'invest in Sri Lanka agriculture',
        'solutions scheme Sri Lanka legal',
        'plantation solutions returns',
        'foreign solutions Sri Lanka agriculture',
        'passive income Sri Lanka',
        'capital solutions opportunity Sri Lanka',
        'transparent solutions Sri Lanka',
        'solutions plan with returns Sri Lanka',
        'safe solutions opportunities in Sri Lanka agriculture sector',
        'how to invest in plantation business Sri Lanka',
        'best high ROI solutions plans Sri Lanka 2026',
        'foreign investors agriculture solutions Sri Lanka legal',
        'low risk passive income solutions Sri Lanka',
        'structured plantation solutions with guaranteed returns Sri Lanka',

        //NGO / CSR Keywords

        //CSR & NGO Keywords
        'CSR projects Sri Lanka',
        'community development Sri Lanka',
        'NGO partnership Sri Lanka',
        'corporate social responsibility Sri Lanka',
        'rural development programs Sri Lanka',
        'social impact solutions Sri Lanka',
        'NGO Sri Lanka agriculture',
        'rural community development Sri Lanka',
        'education programs rural Sri Lanka',
        'rehabilitation programs Sri Lanka',
        'entrepreneurship development Sri Lanka',
        'rural income generation Sri Lanka',
        'low income community support Sri Lanka',
        'social enterprise Sri Lanka',
        'impact solutions Sri Lanka',
        'CSR collaboration Sri Lanka',
        'international NGO Sri Lanka',
        'childhood development programs Sri Lanka',
        'best CSR projects for rural development in Sri Lanka',
        'NGO agriculture partnership programs Sri Lanka',
        'social impact solutions opportunities Sri Lanka',
        'how companies do CSR in Sri Lanka rural communities',
        'community empowerment programs Sri Lanka NGO',
        'education and rural development NGO Sri Lanka projects',

        //Question Keywords — Google "People Also Ask"//

        //Plantation Questions
        'How to invest in plantation agriculture in Sri Lanka?',
        'What crops are most profitable in Sri Lanka?',
        'Is ginger cultivation profitable in Sri Lanka?',
        'How do plantation solutions schemes work in Sri Lanka?',
        'What is the ROI of banana plantation in Sri Lanka?',
        'Which agricultural crops are exported from Sri Lanka?',
        'How can I partner with a plantation company in Sri Lanka?',
        'What is PGG cultivation plan?',

        //Microfinance Questions
        'How do I get a microfinance loan in Sri Lanka?',
        'What documents are needed for a microfinance loan in Sri Lanka?',
        'Is microfinance available for farmers in Sri Lanka?',
        'What is the interest rate for microfinance loans in Sri Lanka?',
        'Can rural entrepreneurs get loans in Sri Lanka?',
        'What is inclusive finance in Sri Lanka?',
        'How does PGG microfinance work?',

        //Gem Questions
        'How to buy certified Sri Lankan sapphires?',
        'Are Sri Lankan gemstones certified?',
        'What gemstones are found in Sri Lanka?',
        'How to export gems from Sri Lanka?',
        'What is Ceylon sapphire?',
        'How do I verify a Sri Lankan gem is authentic?',
        'Who exports gemstones from Sri Lanka?',

        //Investment Questions
        'What are the best investments in Sri Lanka in 2026?',
        'Is agricultural solutions safe in Sri Lanka?',
        'How much do I need to invest in a plantation in Sri Lanka?',
        'Are plantation solutions schemes legal in Sri Lanka?',
        'Can foreigners invest in agriculture in Sri Lanka?',
        'What is a structured solutions plan in Sri Lanka?',
        'How long does a plantation solutions take to give returns?',

        //Company / Brand Questions
        'What is Prestige Glamour Group?',
        'Is Prestige Glamour Group legit?',
        'Where is Prestige Glamour Group head office?',
        'What does Prestige Glamour Group do?',
        'Who is the chairman of Prestige Glamour Group?',
        'How many branches does Prestige Glamour Group have?',
        'What services does PGG offer?',

        //Location-Specific Keywords — All 23+ Branch Areas//

        //Western Province
        'solutions company Kalutara',
        'microfinance Kalutara',
        'business company Kalutara',
        'plantation company Kalutara',
        'microfinance Panadura',
        'solutions Ja-Ela',
        'microfinance Kaduwela',
        'business Wellawatta',
        'solutions Horana',
        'microfinance Baduraliya',

        //North Western / North Central Province
        'solutions company Kurunegala',
        'microfinance Kurunegala',
        'plantation solutions Kuliyapitiya',
        'microfinance Kuliyapitiya',
        'business company Chilaw',
        'solutions Hettipola',
        'microfinance Nikaweratiya',
        'plantation Galewela',
        'solutions Dambulla',
        'microfinance Polpithigama',

        //Sabaragamuwa Province
        'solutions Avissawella',
        'microfinance Kegalle',
        'plantation company Ratnapura',
        'microfinance Hanwella',
        'solutions Balangoda',
        'business Eheliyagoda',
        'microfinance Deraniyagala',
        'solutions Homagama',

        //Central Province
        'solutions company Kandy',
        'microfinance Kandy',
        'plantation company Matale',
        'microfinance Gampola',
        'solutions Nuwara Eliya',

        //Northern / Eastern Province
        'solutions company Jaffna',
        'microfinance Jaffna',
        'business Batticaloa',
        'solutions Trincomalee',
        'microfinance Ampara',
        'business Vavuniya',

        //Southern Province
        'solutions company Galle',
        'microfinance Matara',
        'business Tangalle',
        'solutions Hikkaduwa',
        'microfinance Ambalangoda',

        //Near Me / Generic Local SEO
        'solutions company near me Sri Lanka',
        'microfinance near me Sri Lanka',
        'plantation company near me',
        'business solutions near me Sri Lanka',

        //Sinhala & Tamil Transliterated Keywords//

        //Sinhala Transliterated Keywords (Roman Script)
        'wanijya kamkaru pilivela Sri Lanka',
        'govi ithiripatha Sri Lanka',
        'kuda pasala loan Sri Lanka',
        'micro finance Sri Lanka Sinhala',
        'kesel govi Sri Lanka',
        'inguru govi Sri Lanka',
        'amba govi Sri Lanka',
        'kamkaru petha Sri Lanka',
        'pasala loan rural Sri Lanka Sinhala',
        'waga kamkaru petha Sri Lanka',
        'gem export Sri Lanka Sinhala',
        'manik export Sri Lanka',
        'neela manik Sri Lanka',
        'prestige glamour group Sinhala',
        'PGG Sri Lanka Sinhala',

        //Tamil Transliterated Keywords
        'vilaivu nilai ilaigal Sri Lanka',
        'vivasayam Sri Lanka',
        'siriya thozhil kadhan Sri Lanka',
        'Ilankai manikkal export',
        'nilam mudhaleetu Sri Lanka',
        'prestige glamour group Tamil',
        'PGG Jaffna',
        'PGG Batticaloa',
        'best wanijya kamkaru pilivela Sri Lanka solutions',
        'govi ithiripatha profitable agriculture Sri Lanka',
        'how to apply kuda pasala loan Sri Lanka',
        'kesel govi profit Sri Lanka cultivation guide',
        'neela manik Sri Lanka buy authentic sapphire',
        'Ilankai manikkal export company Sri Lanka',


    ],
    alternates: {
        canonical: 'https://www.prestigeglamourgroupofcompany.com',
    },
    openGraph: {
        title: 'Prestige Glamour Group',
        description: "Six enduring Sri Lankan businesses cultivating tomorrow's industries",
        url: 'https://www.prestigeglamourgroupofcompany.com',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Prestige Glamour — Sri Lanka's Conglomerate",
        description: 'Plantation, microfinance, gems, hospitality, real estate, agri-export',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            {
                url: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442467/logo_eszhjw.png',
                type: 'image/png',
            },
            {
                url: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442467/logo_eszhjw.png',
                sizes: '16x16',
                type: 'image/png',
            },
            {
                url: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442467/logo_eszhjw.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                url: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442467/logo_eszhjw.png',
                sizes: '96x96',
                type: 'image/png',
            },
            {
                url: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442467/logo_eszhjw.png',
                sizes: '192x192',
                type: 'image/png',
            },
        ],
        shortcut:
            'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442467/logo_eszhjw.png',
        apple: [
            {
                url: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442467/logo_eszhjw.png',
                sizes: '57x57',
                type: 'image/png',
            },
            {
                url: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442467/logo_eszhjw.png',
                sizes: '60x60',
                type: 'image/png',
            },
            {
                url: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442467/logo_eszhjw.png',
                sizes: '72x72',
                type: 'image/png',
            },
            {
                url: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442467/logo_eszhjw.png',
                sizes: '76x76',
                type: 'image/png',
            },
            {
                url: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442467/logo_eszhjw.png',
                sizes: '114x114',
                type: 'image/png',
            },
            {
                url: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442467/logo_eszhjw.png',
                sizes: '120x120',
                type: 'image/png',
            },
            {
                url: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442467/logo_eszhjw.png',
                sizes: '144x144',
                type: 'image/png',
            },
            {
                url: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442467/logo_eszhjw.png',
                sizes: '152x152',
                type: 'image/png',
            },
            {
                url: 'https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1779442467/logo_eszhjw.png',
                sizes: '180x180',
                type: 'image/png',
            },
        ],
    },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-43N120Q5GW";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${geist.variable} ${manrope.variable}`}>
            <head>
                <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="" />
                <link rel="dns-prefetch" href="https://res.cloudinary.com" />
                <link rel="preconnect" href="https://www.googletagmanager.com" />
                <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
                <meta
                    name="google-site-verification"
                    content="FYgdAmWULb4nRgIMS8lGbU1F7-3muEXQMJLDPIOACIA"
                />
                {GA_ID && (
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());

                                // DEFAULT: deny everything until user consents
                                gtag('consent', 'default', {
                                    analytics_storage: 'denied',
                                    ad_storage: 'denied',
                                    functionality_storage: 'denied',
                                    personalization_storage: 'denied',
                                    wait_for_update: 2000
                                });
                            `,
                        }}
                    />
                )}
            </head>
            <body className="font-body text-ink">
                <a
                    href="#main-content"
                    className="absolute -top-full left-0 z-9999 bg-ink text-bg px-4 py-2 focus:top-0"
                >
                    Skip to main content
                </a>
                <SmoothScroll>
                    <Navbar />
                    <PageTransition>{children}</PageTransition>
                    <Footer />
                    <WhatsAppButton />
                </SmoothScroll>
                {GA_ID && (
                    <>
                        <Script
                            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                            strategy="afterInteractive"
                        />
                        <Script id="google-analytics-config" strategy="afterInteractive">
                            {`
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('config', '${GA_ID}');
                            `}
                        </Script>
                    </>
                )}
                <SpeedInsights />
                <Analytics />
                <CookieConsent />
            </body>
        </html>
    );
}
