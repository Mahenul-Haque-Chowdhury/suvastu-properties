export type ProjectStat = {
  label: string;
  value: string;
};

export type BuyerIntentCard = {
  title: string;
  description: string;
};

export type ProjectRecord = {
  slug: string;
  title: string;
  location: string;
  status: 'Ongoing' | 'Upcoming' | 'Completed';
  heroImage: string;
  gallery: [string, string, string, string];
  overview: string;
  positioning: string;
  metaTitle: string;
  metaDescription: string;
  projectDesc: string;
  stats: ProjectStat[];
  features: string[];
  uspTitle: string;
  uspPoints: string[];
  lifestyleTitle: string;
  lifestyleBody: string[];
  buyerIntentTitle: string;
  buyerIntentCards: BuyerIntentCard[];
  seoKeywords: string[];
};

const fallbackGallery: [string, string, string, string] = ['/about-us-2048x855.jpg', '/Shoptorshi.png', '/florentina.png', '/Mirambeena.png'];

export const projectRecords: Record<string, ProjectRecord> = {
  'suvastu-shaptarshi': {
    slug: 'suvastu-shaptarshi',
    title: 'Suvastu Shaptarshi',
    location: 'Banani, Dhaka',
    status: 'Ongoing',
    heroImage: '/Shoptorshi.png',
    gallery: ['/Shoptorshi.png', '/shaptarshi.png', '/about-us-2048x855.jpg', '/florentina.png'],
    overview: 'Suvastu Shaptarshi is a wellness-led residential address shaped for calm, clarity, and everyday renewal in one of Dhaka’s most connected neighborhoods.',
    positioning: 'A premium Banani residence designed around wellness, emotional ease, and the idea of returning to yourself.',
    metaTitle: 'Suvastu Shaptarshi | Wellness and Luxury in Banani',
    metaDescription: 'Discover Suvastu Shaptarshi in Banani, a premium residence blending wellness, luxury, and thoughtful city living in Dhaka.',
    projectDesc: 'A wholesome blend of wellness and luxury.',
    stats: [
      { label: 'Floors', value: '14' },
      { label: 'Units', value: '26' },
      { label: 'Size', value: '4500 - 6200 sqft' }
    ],
    features: ['Double-height Lobby', 'Wellness-focused Spatial Planning', 'Premium Materials', 'Smart Home Readiness', '24/7 Security', 'Private Resident Amenities'],
    uspTitle: 'Why this address stands apart',
    uspPoints: [
      'Wellness-first positioning rare in Dhaka’s premium residential market.',
      'Banani location with strong long-term lifestyle and resale value.',
      'Calm, refined architecture that feels restorative rather than overstated.'
    ],
    lifestyleTitle: 'Living here means coming home to reset',
    lifestyleBody: [
      'Shaptarshi is designed for buyers who want more than an impressive address. It frames home as a place to recover from urban intensity, reconnect with routine, and live with greater intentionality.',
      'From the location to the tone of the spaces, the project supports a slower, more considered lifestyle while keeping Dhaka’s best connections close at hand.'
    ],
    buyerIntentTitle: 'Who this project is ideal for',
    buyerIntentCards: [
      { title: 'End Users', description: 'For families and homeowners seeking a premium Banani home with a calmer daily rhythm.' },
      { title: 'Wellness-led Buyers', description: 'For buyers who value emotional comfort, natural ease, and a more restorative living environment.' },
      { title: 'Long-term Investors', description: 'For investors looking for a strong premium address with brand-backed value retention.' }
    ],
    seoKeywords: ['Banani apartments', 'luxury apartments in Banani', 'wellness residence Dhaka']
  },
  'suvastu-florentina': {
    slug: 'suvastu-florentina',
    title: 'Suvastu Florentina',
    location: 'Baridhara, Dhaka',
    status: 'Ongoing',
    heroImage: '/florentina.jpg',
    gallery: ['/florentina.jpg', '/florentina.png', '/about-us-2048x855.jpg', '/rialto.png'],
    overview: 'Suvastu Florentina brings together harmony, grace, and wellness in a residence inspired by careful design rather than excess.',
    positioning: 'A premium residence for buyers seeking elegance, warmth, and a more graceful life of wellness.',
    metaTitle: 'Suvastu Florentina | Life of Wellness in Baridhara',
    metaDescription: 'Explore Suvastu Florentina, a premium Baridhara residence designed around harmony, wellness, and refined everyday living.',
    projectDesc: 'Inviting you to a life of wellness.',
    stats: [
      { label: 'Floors', value: '12' },
      { label: 'Units', value: '20' },
      { label: 'Size', value: '3200 - 4800 sqft' }
    ],
    features: ['Elegant Arrival Experience', 'Light-filled Residences', 'Private Family-focused Layouts', 'Premium Finishes', 'Concierge-ready Services', 'Secure Parking'],
    uspTitle: 'A more graceful residential proposition',
    uspPoints: [
      'A softer, more harmonious design language than typical luxury projects.',
      'Baridhara positioning for premium residential demand and everyday convenience.',
      'A distinctive wellness narrative supported by refined spatial planning.'
    ],
    lifestyleTitle: 'A residence built around harmony',
    lifestyleBody: [
      'Florentina speaks to buyers who want elegance to feel lived in, not performative. The project pairs warmth, proportion, and comfort to support a more welcoming domestic life.',
      'Its appeal lies in balance: premium enough to feel elevated, but calm enough to support family routines, hospitality, and emotional ease.'
    ],
    buyerIntentTitle: 'Best suited for buyers who value',
    buyerIntentCards: [
      { title: 'Family Comfort', description: 'For buyers prioritizing warmth, grace, and day-to-day comfort over flashier luxury cues.' },
      { title: 'Design Sensitivity', description: 'For those drawn to meticulous detailing, light, and a cohesive aesthetic language.' },
      { title: 'Lifestyle Buyers', description: 'For purchasers who want a home that feels uplifting, polished, and easy to live in.' }
    ],
    seoKeywords: ['Baridhara apartments', 'luxury flats in Baridhara', 'wellness apartment Dhaka']
  },
  'suvastu-mirambeena': {
    slug: 'suvastu-mirambeena',
    title: 'Suvastu Mirambeena',
    location: 'Banani, Dhaka',
    status: 'Upcoming',
    heroImage: '/mirambeenacover.png',
    gallery: ['/mirambeenacover.png', '/Mirambeena.png', '/mirambeena.jpg', '/about-us-2048x855.jpg'],
    overview: 'Suvastu Mirambeena is a premium urban address where luxury, convenience, and investment value come together in a highly desirable Banani setting.',
    positioning: 'A high-value Banani address that balances modern city convenience with premium residential appeal.',
    metaTitle: 'Suvastu Mirambeena | Premium Banani Residence and Investment Opportunity',
    metaDescription: 'Discover Suvastu Mirambeena, a Banani residence where luxury, convenience, and investment potential meet modern urban living.',
    projectDesc: 'A symphony of welcome.',
    stats: [
      { label: 'Floors', value: '15' },
      { label: 'Units', value: '30' },
      { label: 'Size', value: '3600 - 5400 sqft' }
    ],
    features: ['High-visibility Banani Address', 'Contemporary Exterior Presence', 'Premium Common Areas', 'Flexible Family Layouts', 'Secure Access Control', 'Investment-friendly Positioning'],
    uspTitle: 'A project with both lifestyle and value upside',
    uspPoints: [
      'Strong Banani address with immediate recognition and convenience.',
      'Positioned for both end-user desirability and long-term real estate value.',
      'A more investment-conscious luxury proposition within the portfolio.'
    ],
    lifestyleTitle: 'Urban living with a stronger practical edge',
    lifestyleBody: [
      'Mirambeena is meant for buyers who want an elevated city life without sacrificing daily convenience. It places premium living inside an address that feels active, connected, and relevant.',
      'The project pairs visual appeal with a clearer value story, making it particularly compelling for buyers who want both lifestyle confidence and financial rationale.'
    ],
    buyerIntentTitle: 'A strong fit for',
    buyerIntentCards: [
      { title: 'City-facing Buyers', description: 'For those who want a prime Banani lifestyle close to key daily destinations.' },
      { title: 'Investment-minded Purchasers', description: 'For buyers evaluating both liveability and appreciation potential.' },
      { title: 'Status-conscious Families', description: 'For families who want a premium address with immediate social credibility.' }
    ],
    seoKeywords: ['Banani luxury apartments', 'Dhaka investment property', 'premium flats in Banani']
  },
  'saleha-suvastu': {
    slug: 'saleha-suvastu',
    title: 'Saleha Suvastu',
    location: 'Gulshan, Dhaka',
    status: 'Completed',
    heroImage: '/saleha.jpg',
    gallery: ['/saleha.jpg', '/saleha.png', '/about-us-2048x855.jpg', '/Shoptorshi.png'],
    overview: 'Saleha Suvastu delivers an eco-conscious premium home in Gulshan, combining modern comfort, strong location value, and a more celebratory everyday lifestyle.',
    positioning: 'A completed Gulshan residence for buyers who want a premium, eco-conscious city home with proven delivery confidence.',
    metaTitle: 'Saleha Suvastu | Completed Premium Residence in Gulshan',
    metaDescription: 'Explore Saleha Suvastu, a completed premium residence in Gulshan offering eco-conscious living, modern facilities, and trusted delivery.',
    projectDesc: 'Your dream home where life is celebrated.',
    stats: [
      { label: 'Floors', value: '13' },
      { label: 'Units', value: '24' },
      { label: 'Size', value: '3400 - 5000 sqft' }
    ],
    features: ['Completed and Ready Confidence', 'Eco-conscious Design Direction', 'Prime Gulshan Positioning', 'Premium Lifestyle Facilities', 'Efficient Family Planning', 'Trusted Brand Delivery'],
    uspTitle: 'Why buyers choose this completed address',
    uspPoints: [
      'Completed project status reduces delivery uncertainty for buyers.',
      'Gulshan location supports premium lifestyle access and long-term value.',
      'Eco-conscious positioning adds relevance for modern homeowners.'
    ],
    lifestyleTitle: 'A city home that feels established and complete',
    lifestyleBody: [
      'Saleha Suvastu is for buyers who want confidence in what they are purchasing today, not only what is promised tomorrow. Its completed nature makes the lifestyle proposition tangible and immediate.',
      'The Gulshan setting, contemporary amenities, and eco-conscious tone make it especially appealing to buyers who want premium living with fewer unknowns.'
    ],
    buyerIntentTitle: 'Designed to appeal to',
    buyerIntentCards: [
      { title: 'Ready-home Buyers', description: 'For purchasers who prefer completed inventory and immediate clarity on the delivered experience.' },
      { title: 'Gulshan-focused Families', description: 'For families seeking a prime urban location with strong premium positioning.' },
      { title: 'Confidence-driven Purchasers', description: 'For buyers who prioritize trust, delivery history, and lower execution risk.' }
    ],
    seoKeywords: ['Gulshan apartments', 'completed luxury apartment Dhaka', 'eco friendly residence Gulshan']
  }
};

export function getProjectRecord(slug: string): ProjectRecord {
  return projectRecords[slug] ?? {
    slug,
    title: slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
    location: 'Dhaka',
    status: 'Ongoing',
    heroImage: fallbackGallery[0],
    gallery: fallbackGallery,
    overview: 'A premium Suvastu address shaped for thoughtful city living, premium design standards, and long-term value.',
    positioning: 'A premium Dhaka residence from Suvastu Properties.',
    metaTitle: 'Suvastu Project | Premium Residence in Dhaka',
    metaDescription: 'Explore this Suvastu Properties project in Dhaka, designed for premium living, strong construction standards, and long-term confidence.',
    projectDesc: 'Premium residential address.',
    stats: [
      { label: 'Floors', value: '14' },
      { label: 'Units', value: '26' },
      { label: 'Size', value: '3200 - 5200 sqft' }
    ],
    features: ['Premium Lobby', 'Family-oriented Planning', 'Secure Access', 'Quality Finishes', 'Resident Amenities', 'Brand-backed Delivery'],
    uspTitle: 'Why consider this project',
    uspPoints: [
      'Premium residential positioning in Dhaka.',
      'Thoughtful planning shaped around liveability and value.',
      'A project backed by Suvastu’s design and delivery focus.'
    ],
    lifestyleTitle: 'A more considered residential life',
    lifestyleBody: [
      'This address is designed to support a premium city lifestyle with stronger comfort, convenience, and everyday confidence.',
      'It brings together location, design, and trust to create a clearer residential proposition for serious buyers.'
    ],
    buyerIntentTitle: 'Suitable for',
    buyerIntentCards: [
      { title: 'Home Buyers', description: 'For families and individuals looking for a premium city address.' },
      { title: 'Investors', description: 'For buyers seeking a branded residential asset with long-term value.' },
      { title: 'Lifestyle Purchasers', description: 'For those who want design quality, convenience, and trust in one proposition.' }
    ],
    seoKeywords: ['Dhaka apartments', 'premium real estate Dhaka', 'Suvastu Properties project']
  };
}

export const allProjects = Object.values(projectRecords).map((project) => ({
  id: project.slug,
  title: project.title,
  location: project.location,
  status: project.status,
  image: project.gallery[1] ?? project.heroImage,
  description: project.projectDesc,
}));
