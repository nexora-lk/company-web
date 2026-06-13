export interface Gemstone {
    id: string;
    name: string;
    category: string;
    description: string;
    origin: string;
    characteristics: string[];
    applications: string[];
    certifications: string[];
}

export interface GemService {
    title: string;
    description: string;
    details: string[];
}

export const gemstoneCollection = [
    {
        id: 'blue-sapphire',
        name: 'Ceylon Blue Sapphire',
        category: 'Corundum',
        description:
            'The flagship of Sri Lankan gemstones, renowned globally for their exceptional deep blue hues and transparency. Sourced from the legendary Ratnapura mines, these sapphires are prized by collectors, jewelers, and investors worldwide.',
        origin: 'Ratnapura, Sri Lanka',
        characteristics: [
            'Cornflower to deep blue hue',
            'Excellent transparency & clarity',
            'High refractive index',
            'Natural heat treatment enhancement',
            'Investment-grade specimens',
        ],
        applications: [
            'Fine jewelry settings',
            'Luxury engagement rings',
            "Collector's pieces",
            'Investment portfolio',
            'Heritage jewelry',
        ],
        certifications: ['GIA Certified', 'NGJA Certified', 'International standards'],
    },
    {
        id: 'ruby',
        name: 'Ruby & Rubellite',
        category: 'Corundum',
        description:
            "Deep crimson rubies with the prized 'pigeon's blood' red color. Exceptionally rare and among the most valuable gemstones, our rubies are ethically sourced and meticulously certified.",
        origin: 'Ratnapura & traditional mining regions, Sri Lanka',
        characteristics: [
            'Saturated red to deep crimson',
            'Exceptional clarity in premium grades',
            'Strong fluorescence',
            'Collectible quality',
            'High investment value',
        ],
        applications: [
            'Premium jewelry',
            'Investment gems',
            'Museum-quality pieces',
            'High-end commissions',
            'Heirloom jewelry',
        ],
        certifications: ['GIA Certified', 'NGJA Certified', 'Authenticity guaranteed'],
    },
    {
        id: 'padparadscha',
        name: 'Padparadscha Sapphire',
        category: 'Corundum',
        description:
            'The national gemstone of Sri Lanka, named after the lotus blossom. These rare pink-orange sapphires are increasingly difficult to find and highly sought by collectors and connoisseurs worldwide.',
        origin: 'Sri Lanka (limited production)',
        characteristics: [
            'Unique pink-orange blend',
            'National gemstone significance',
            'Exceptional rarity',
            'Often unheated',
            'High market demand',
        ],
        applications: [
            'Luxury jewelry',
            'Investment portfolio',
            "Collector's items",
            'National symbol pieces',
            'Museum quality',
        ],
        certifications: ['GIA Certified', 'NGJA Certified', 'National gem certificate'],
    },
    {
        id: 'yellow-pink',
        name: 'Yellow, Pink & Fancy Sapphires',
        category: 'Corundum',
        description:
            'A vibrant range of sapphires in yellow, pink, and other colors. Perfect for contemporary jewelry designs and increasingly popular in both traditional and modern settings.',
        origin: 'Sri Lankan highlands & mining regions',
        characteristics: [
            'Wide color range & saturation',
            'Good transparency',
            'Excellent durability',
            'Contemporary appeal',
            'Affordable luxury',
        ],
        applications: [
            'Contemporary jewelry',
            'Engagement rings',
            'Fashion jewelry',
            'Custom designs',
            'Astrology uses',
        ],
        certifications: ['GIA Certified', 'NGJA Certified', 'Color authenticated'],
    },
    {
        id: 'cats-eye',
        name: "Chrysoberyl Cat's Eye",
        category: 'Chrysoberyl',
        description:
            "Exceptional gemstones displaying the prized 'milk-and-honey' optical chatoyancy effect. Sourced from Sri Lanka's heritage mines, these stones are highly sought by collectors and astrology practitioners.",
        origin: 'Sri Lankan heritage mines (Ratnapura region)',
        characteristics: [
            'Sharp, well-defined eye effect',
            'Milk-and-honey appearance',
            'Natural chatoyancy',
            "Collector's favorite",
            'Rare with perfect effect',
        ],
        applications: [
            "Collector's pieces",
            'Astrology & numerology',
            'Fine jewelry',
            'Investment stones',
            'Museum quality',
        ],
        certifications: ['GIA Certified', 'NGJA Certified', 'Chatoyancy certified'],
    },
    {
        id: 'alexandrite',
        name: 'Alexandrite',
        category: 'Chrysoberyl',
        description:
            'Color-changing alexandrite showing green in daylight and red under incandescent light. Extremely rare and highly prized by collectors for this dramatic phenomenon.',
        origin: 'Sri Lanka (rare production)',
        characteristics: [
            'Dramatic color-change property',
            'Green to red transformation',
            'Excellent quality',
            'Investment-grade specimens',
            'Strong market demand',
        ],
        applications: [
            'Luxury jewelry',
            'Investment portfolio',
            "Collector's pieces",
            'Special occasions',
            'High-end commissions',
        ],
        certifications: ['GIA Color-Change Certificate', 'NGJA Certified'],
    },
    {
        id: 'other-gems',
        name: 'Garnets, Tourmalines & Rare Gems',
        category: 'Semi-precious',
        description:
            'A diverse collection of semi-precious gemstones including vibrant tourmalines, deep red garnets, and other rare Sri Lankan gems for collectors and jewelry enthusiasts.',
        origin: 'Various Sri Lankan mining regions',
        characteristics: [
            'Diverse color palette',
            'Good to excellent clarity',
            'Wide availability',
            'Unique beauty',
            'Collectible varieties',
        ],
        applications: [
            'Jewelry design',
            'Collection building',
            'Fashion jewelry',
            'Specialty pieces',
            'Trade market',
        ],
        certifications: ['NGJA Certified', 'Quality tested'],
    },
];

export const gemServices = [
    {
        title: 'Genuine Gemstone Supply',
        description:
            'Wide range of natural Sri Lankan gemstones carefully handpicked and certified for authenticity, beauty, and value.',
        details: [
            'Direct sourcing from trusted miners',
            'Hand-selected for quality standards',
            'International certifications',
            'Complete traceability',
            'Transparent pricing',
            'Worldwide availability',
        ],
    },
    {
        title: 'Rough Gem Buying',
        description:
            'We source high-quality rough stones directly from trusted miners, ensuring transparency and reliability in every purchase.',
        details: [
            'Direct-from-mine sourcing',
            'High-quality rough stones',
            'Ideal for cutting & polishing',
            'Perfect for jewelers',
            'Investment opportunities',
            'Bulk ordering available',
        ],
    },
    {
        title: 'Mine-to-Market Cycles',
        description:
            'Deploy capital into gem mining extraction cycles.From pit to certified stones ready for global export.Fast 90-180 day returns on completed mining cycles.',
        details: [
            'Active mining operations across 10+ locations',
            '90-180 day extraction cycles'
        ],
    },
    {
        title: 'Custom Gemstone Sourcing',
        description:
            'Looking for a rare size, color, or type? We help you find the perfect gemstone tailored to your specifications.',
        details: [
            'Personalized sourcing',
            'Specific requirements met',
            'Rare & unique pieces',
            'Expert consultation',
            'Quality assurance',
            'Fast turnaround',
        ],
    },
    {
        title: 'Gem Certification & Testing',
        description:
            'All gemstones are tested and certified through recognized gemological laboratories to guarantee authenticity and quality.',
        details: [
            'GIA certification available',
            'NGJA authentication',
            'Laboratory testing',
            'Complete documentation',
            'Authenticity guaranteed',
            'International standards',
        ],
    },
    {
        title: 'Worldwide Shipping',
        description:
            'We securely package and ship gemstones to customers across the globe, ensuring safe and timely delivery with full insurance.',
        details: [
            'Secure packaging',
            'International shipping',
            'Full insurance coverage',
            'Tracking system',
            'Customs assistance',
            'Express options available',
        ],
    },
];

export const heritageInfo = {
    title: "Sri Lanka's Gem Heritage",
    subtitle: 'Ratnadweepa - Island of Gems',
    history:
        "Sri Lanka's gem history spans over 2,500 years. Ancient texts and foreign traders, from Romans to Arabs, chronicled the island's wealth in sapphires, rubies, and cat's eyes. These 'Ratnadweepa' (Island of Gems) stones adorned royal crowns globally, creating a legendary trade that defined the island's identity and economy for centuries.",
    mining: "Traditional mining methods using simple pits called 'illam' have persisted for generations. Today, Sri Lanka remains a premier global source for fine blue sapphires, padparadscha, and its unique blue moonstone. This enduring legacy, blending ancient skill with modern gemology, solidifies its status as a true treasure island.",
    commitment:
        'Our mining operations follow ethical and sustainable practices, ensuring every gemstone is sourced responsibly. With years of expertise and a trusted network of miners, we bring you gems that are not only rare and beautiful but also traceable from the very ground they came from.',
};

export const whyChooseUs = [
    {
        title: 'Authentic, Certified Gems',
        description:
            'Every gemstone is ethically sourced and comes with complete certification for quality and authenticity.',
    },
    {
        title: 'Sri Lankan Heritage & Expertise',
        description:
            "We celebrate Sri Lanka's rich gem legacy with expert craftsmanship and industry knowledge spanning decades.",
    },
    {
        title: 'Wide Range of Rare Gems',
        description:
            "From vibrant Sapphires to stunning Rubies, Alexandrites, and more - our collection showcases nature's finest creations.",
    },
    {
        title: 'Transparent & Fair Pricing',
        description:
            'We believe in honest pricing with no hidden costs, ensuring complete transparency in every transaction.',
    },
    {
        title: 'Ethical & Sustainable Sourcing',
        description:
            'Our mining operations follow ethical practices, ensuring every gemstone is sourced responsibly and sustainably.',
    },
    {
        title: 'Expert Consultation & Support',
        description:
            'Our team provides professional guidance in selecting the perfect gemstone for your needs and requirements.',
    },
];
