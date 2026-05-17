export const HEADER_TAGLINE =
  'Premium Landscaping And Yard Services in Gainesville, Cumming, Alpharetta (and surrounding areas)';

export const BUSINESS_HOURS = [
  { day: 'Saturday', hours: '7 AM – 7 PM' },
  { day: 'Sunday', hours: '7 AM – 7 PM' },
  { day: 'Monday', hours: '7 AM – 7 PM' },
  { day: 'Tuesday', hours: '7 AM – 7 PM' },
  { day: 'Wednesday', hours: '7 AM – 7 PM' },
  { day: 'Thursday', hours: '7 AM – 7 PM' },
  { day: 'Friday', hours: '7 AM – 7 PM' },
] as const;

// Company Information
export const COMPANY = {
  name: 'Kingstone Landscaping',
  formerName: 'Lawn Pups',
  phone: '770-330-9282',
  /** E.164 — required for reliable tel:/sms: links on iOS and Android */
  phoneE164: '+17703309282',
  phoneDisplay: '+1 (770) 330-9282',
  /** Shorter label for tight mobile headers and buttons */
  phoneDisplayShort: '(770) 330-9282',
  email: 'info@lawnpups.com',
  domain: 'kingstonelandscaping.com',
  url: 'https://www.kingstonelandscaping.com',
  address: 'Georgia, United States',
  hours: 'Open 7 days · 7 AM – 7 PM',
  hoursDetail: BUSINESS_HOURS,
  description:
    'Kingstone Landscaping (formerly Lawn Pups) is a trusted local landscaping company in Georgia. Expert lawn care, landscape design, hardscaping & maintenance across Gainesville, Cumming, Alpharetta & surrounding areas.',
};

export const PHONE_TEL_HREF = `tel:${COMPANY.phoneE164}`;
export const PHONE_SMS_HREF = `sms:${COMPANY.phoneE164}`;

// Service Areas
export const SERVICE_AREAS = [
  'Gainesville',
  'Cumming',
  'Alpharetta',
  'Roswell',
  'Sandy Springs',
  'Decatur',
  'Dunwoody',
  'Kennesaw',
  'Smyrna',
  'Atlanta',
  'Marietta',
] as const;

export const SERVICE_AREAS_LIST = SERVICE_AREAS.join(', ');

export const SERVICE_MAP_HUBS = [
  { name: 'Gainesville', lat: 34.2979, lng: -83.8247 },
  { name: 'Cumming', lat: 34.2073, lng: -84.1402 },
  { name: 'Alpharetta', lat: 34.0754, lng: -84.2941 },
] as const;

export const SERVICE_MAP_RADIUS_MILES = 18;

/** Centroid of hub cities — used for map default center and schema.org GeoCircle */
export const SERVICE_MAP_CENTER = {
  lat:
    SERVICE_MAP_HUBS.reduce((sum, hub) => sum + hub.lat, 0) / SERVICE_MAP_HUBS.length,
  lng:
    SERVICE_MAP_HUBS.reduce((sum, hub) => sum + hub.lng, 0) / SERVICE_MAP_HUBS.length,
};

/** ~35 km covers Gainesville–Cumming–Alpharetta triangle plus suburbs */
export const SERVICE_MAP_GEO_RADIUS_METERS = 35000;

export const CALENDLY_URL =
  'https://calendly.com/kingstonelandscaping-proton/30min?hide_event_type_details=1&hide_gdpr_banner=1';

export const BOOK_HREF = '/#calendly';
export const BOOK_CTA = 'Book Free Estimate';

export const BRAND_LOGO = '/images/brand/logo.png';
export const BRAND_LOGO_CREST = '/images/brand/logo-crest.png';

/** Lawn Pups → Kingstone rebrand graphic — canonical image for search & social previews */
export const SEO_REBRAND_IMAGE_PATH = '/images/brand/kingstone-rebrand-seo.png';
export const SEO_REBRAND_IMAGE_WIDTH = 1312;
export const SEO_REBRAND_IMAGE_HEIGHT = 1199;
export const SEO_REBRAND_IMAGE_ALT =
  'Kingstone Landscaping rebrand from Lawn Pups — kingstonelandscaping.com';

/** Absolute URL on production domain — used in OG, Twitter, and JSON-LD regardless of deploy host */
export const SEO_REBRAND_IMAGE_URL = `https://www.kingstonelandscaping.com${SEO_REBRAND_IMAGE_PATH}`;

/** Domains and mirrors that should resolve to the same brand + SEO image */
export const SEO_SITE_URLS = [
  'https://www.kingstonelandscaping.com',
  'https://kingstonelandscaping.com',
  'http://www.kingstonelandscaping.com',
  'http://kingstonelandscaping.com',
  'https://kingstone-landscaping.vercel.app',
] as const;

export const siteMetadata = {
  title: 'Kingstone Landscaping | Lawn Care & Landscaping in Georgia',
  description:
    'Book a free estimate with Kingstone Landscaping (formerly Lawn Pups). Expert lawn care, edging, mulching, and landscape services across Atlanta, Gainesville, Cumming, and North Georgia.',
  keywords:
    'Kingstone Landscaping, kingstonelandscaping, kingstonelandscaping.com, KingstoneLandscaping.com, landscaping Georgia, lawn care Georgia, Atlanta landscaping, Lawn Pups, hardscaping Georgia, lawn maintenance Atlanta, book lawn care estimate',
  ogImage: SEO_REBRAND_IMAGE_URL,
  ogImageWidth: SEO_REBRAND_IMAGE_WIDTH,
  ogImageHeight: SEO_REBRAND_IMAGE_HEIGHT,
  ogImageAlt: SEO_REBRAND_IMAGE_ALT,
};

/** @deprecated Use siteMetadata */
export const DEFAULT_META = siteMetadata;

const GALLERY_MULCH =
  '/images/gallery/a pile of black mulch zoomed out on a fresh cut lawn with bushes in the back.avif';
const GALLERY_TRIM = '/images/gallery/close-up-cutting-plant-leaves.avif';
const GALLERY_CLEANUP = '/images/gallery/male-feet-lawn-rake-near-leaves.avif';
const GALLERY_EDGING_SERVICE = '/images/gallery/man-uniform-glasses-gloves-pruning-bushes-garden.avif';
const LAWN_MOWING_IMAGE = '/images/services/lawn-mowing.avif';

export const GALLERY_IMAGES = [
  { src: GALLERY_MULCH, alt: 'Professional mulching on a fresh cut lawn in Georgia' },
  { src: GALLERY_TRIM, alt: 'Bush trimming and plant care in Atlanta Georgia' },
  { src: GALLERY_EDGING_SERVICE, alt: 'Edging and bed maintenance Georgia' },
  { src: GALLERY_CLEANUP, alt: 'Yard cleanup and leaf removal Georgia' },
];

export const GOOGLE_MAPS_REVIEWS_URL =
  'https://www.google.com/maps/place/Lawnpups/@32.67853,-83.1940624,17z/data=!4m8!3m7!1s0x636f1dcab4259fc7:0xcbbd40d522e1a6ba';

/** Real Google review share links + customer project photos — no fabricated quotes */
export const REVIEWS = [
  {
    image: '/images/reviews/2026-02-06.webp',
    alt: 'Before and after lawn mowing by Kingstone Landscaping',
    shareUrl: 'https://share.google/sdLhqJ3lakhsla8uq',
  },
  {
    image: '/images/reviews/2026-03-13.webp',
    alt: 'Mulched garden bed landscaping project Georgia',
    shareUrl: 'https://share.google/81qNCbmWZz7J2odeg',
  },
  {
    image: '/images/reviews/2026-03-13--1-.webp',
    alt: 'Spiral topiary and mulch landscaping project',
    shareUrl: 'https://share.google/8rCNvdlulsaopqZ8U',
  },
  {
    image: '/images/reviews/2026-03-13--2-.webp',
    alt: 'Residential lawn maintenance project Georgia',
    shareUrl: 'https://share.google/NysCMphPNdTzrVf32',
  },
  {
    image: '/images/reviews/2026-03-15.webp',
    alt: 'Spring mulch installation and lawn care project',
    shareUrl: 'https://share.google/KrW22qTfHyygqSwit',
  },
  {
    image: '/images/reviews/unnamed.webp',
    alt: 'Garden bed with river stone edging and mulch',
    shareUrl: 'https://share.google/9XwDHNFTd7MiDivBT',
  },
  {
    image: '/images/reviews/IMG_1634.jpg',
    alt: 'Professionally maintained suburban lawn Georgia',
    shareUrl: 'https://share.google/EoFCMItkmt8MYBdI3',
  },
];

export const GOOGLE_REVIEW_SHARE_LINKS = [
  'https://share.google/sdLhqJ3lakhsla8uq',
  'https://share.google/81qNCbmWZz7J2odeg',
  'https://share.google/8rCNvdlulsaopqZ8U',
  'https://share.google/NysCMphPNdTzrVf32',
  'https://share.google/KrW22qTfHyygqSwit',
  'https://share.google/9XwDHNFTd7MiDivBT',
  'https://share.google/EoFCMItkmt8MYBdI3',
  'https://share.google/cAaglvLFaEwTojTXB',
  'https://share.google/TOrQFKPzVXvB7aAdQ',
  'https://share.google/tG8eMCtgGE07jUMbr',
  'https://share.google/IrhZUZyEMsd2HWkxd',
  'https://share.google/31bJknNJeyDGAazEo',
  'https://share.google/vwtBoV9rQLrV3aBFm',
  'https://share.google/ax82RAe2jlgRDffCl',
];

export const PAIN_POINTS = [
  {
    quote: 'My yard is overgrown and I never have time to catch up between work and family.',
    label: 'Overwhelmed homeowner',
  },
  {
    quote: 'I am on a job site all day — callers go to voicemail and I lose the lead.',
    label: 'Busy contractor schedule',
  },
  {
    quote: 'The neighbor\'s lawn always looks sharper. Mine never stays edged or clean.',
    label: 'Curb appeal gap',
  },
  {
    quote: 'I paid someone before and still do not know what I am getting for the money.',
    label: 'Unclear pricing',
  },
];

export const SERVICE_LANDING_PAGES = [
  { slug: 'lawn-care-atlanta-georgia', title: 'Lawn Care & Maintenance in Atlanta, Georgia', serviceId: 'lawn-mowing', keyword: 'lawn care Atlanta Georgia' },
  { slug: 'hardscaping-georgia', title: 'Hardscaping Services in Georgia', serviceId: 'hardscaping', keyword: 'hardscaping Georgia' },
  { slug: 'landscape-design-atlanta', title: 'Landscape Design in Atlanta', serviceId: 'landscape-design', keyword: 'landscape design Atlanta' },
  { slug: 'irrigation-georgia', title: 'Irrigation Installation & Repair in Georgia', serviceId: 'irrigation', keyword: 'lawn irrigation Georgia' },
  { slug: 'sod-installation-georgia', title: 'Sod Installation in Georgia', serviceId: 'sod', keyword: 'sod installation Georgia' },
  { slug: 'seasonal-cleanup-georgia', title: 'Seasonal Yard Cleanups in Georgia', serviceId: 'yard-cleanup', keyword: 'seasonal yard cleanup Georgia' },
  { slug: 'commercial-landscaping-georgia', title: 'Commercial Landscaping in Georgia', serviceId: 'commercial', keyword: 'commercial landscaping Georgia' },
  { slug: 'tree-shrub-trimming-georgia', title: 'Tree & Shrub Trimming in Georgia', serviceId: 'bush-trimming', keyword: 'tree shrub trimming Georgia' },
];

// Services with Pricing
export const SERVICES = [
  {
    id: 'lawn-mowing',
    name: 'Lawn Mowing & Maintenance',
    description: 'Professional lawn mowing, edging, and trimming. Weekly or bi-weekly service to keep your lawn healthy and looking its best.',
    price: '$45–$90',
    icon: 'Leaf',
    image: LAWN_MOWING_IMAGE,
    pricing: [
      { size: 'Small Lawn', price: '$45–$55' },
      { size: 'Medium Lawn', price: '$55–$70' },
      { size: 'Large Lawn', price: '$70–$90' },
    ],
  },
  {
    id: 'edging',
    name: 'Edging',
    description: 'Clean, defined edges along driveways, sidewalks, and walkways for sharp curb appeal.',
    price: '$15–$30',
    icon: 'Scissors',
    image: GALLERY_EDGING_SERVICE,
    pricing: [{ size: 'Stand-alone or Add-on', price: '$15–$30' }],
  },
  {
    id: 'bush-trimming',
    name: 'Bush Trimming & Removal',
    description: 'Maintain or remove overgrown bushes to improve your property\'s curb appeal and health.',
    price: '$10–$75 per bush',
    icon: 'Trees',
    image: GALLERY_TRIM,
    pricing: [
      { size: 'Bush Trimming', price: '$10–$25 per bush' },
      { size: 'Bush Removal', price: '$40–$75 per bush' },
    ],
  },
  {
    id: 'yard-cleanup',
    name: 'Yard Cleanup',
    description: 'Seasonal cleanups, overgrown yard restoration, and general debris removal for a fresh start.',
    price: '$75–$250',
    icon: 'Trash2',
    image: GALLERY_CLEANUP,
    pricing: [
      { size: 'Light Cleanup', price: '$75–$125' },
      { size: 'Heavy Cleanup', price: '$150–$250' },
    ],
  },
  {
    id: 'mulching',
    name: 'Mulching',
    description: 'Professional mulch installation to refresh beds, improve appearance, and protect plant roots.',
    price: '$150+',
    icon: 'Mountain',
    image: GALLERY_MULCH,
    pricing: [
      { size: 'Small Area', price: '$150–$250' },
      { size: 'Medium Area', price: '$250–$400' },
      { size: 'Large Area', price: '$400+' },
    ],
  },
  {
    id: 'landscape-design',
    name: 'Landscape Design',
    description: 'Custom landscape design from concept to completion — creating outdoor spaces that enhance your property.',
    price: 'Custom Quote',
    icon: 'Palette',
    pricing: [{ size: 'Full Design Consultation', price: 'Custom Quote' }],
  },
  {
    id: 'hardscaping',
    name: 'Hardscaping',
    description: 'Patios, walkways, retaining walls, and fire pits that add lasting value to Atlanta-area homes.',
    price: 'Custom Quote',
    icon: 'Hammer',
    pricing: [{ size: 'Project-Based', price: 'Free Estimate' }],
  },
  {
    id: 'irrigation',
    name: 'Irrigation Installation & Repair',
    description: 'Efficient irrigation systems designed for Georgia lawns — installation, repair, and seasonal adjustments.',
    price: 'Custom Quote',
    icon: 'Droplets',
    pricing: [{ size: 'System Install or Repair', price: 'Custom Quote' }],
  },
  {
    id: 'sod',
    name: 'Sod Installation',
    description: 'Fresh sod installation for instant curb appeal and a healthy, green lawn.',
    price: 'Custom Quote',
    icon: 'Sprout',
    pricing: [{ size: 'Per Square Foot', price: 'Custom Quote' }],
  },
  {
    id: 'commercial',
    name: 'Commercial Landscaping',
    description: 'Reliable commercial lawn care and landscape maintenance for businesses across North Georgia.',
    price: 'Custom Quote',
    icon: 'Building2',
    pricing: [{ size: 'Commercial Properties', price: 'Custom Quote' }],
  },
];

// Why Choose Us
export const WHY_CHOOSE_US = [
  {
    title: 'Locally Operated & Reliable',
    description: 'Georgia-based company with deep community roots.',
  },
  {
    title: 'Clear Communication & Pricing',
    description: 'Straightforward, transparent pricing with no hidden fees.',
  },
  {
    title: 'Consistent Scheduling',
    description: 'Dependable service schedule you can rely on.',
  },
  {
    title: 'Long-Term Relationships',
    description: 'Focused on building lasting customer partnerships.',
  },
  {
    title: 'No Contracts or Hidden Fees',
    description: 'Flexible, hassle-free service agreements.',
  },
];

// How It Works Steps
export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Book Online',
    description: 'Pick a time on our calendar for a free 30-minute on-site estimate — no phone tag required.',
  },
  {
    step: 2,
    title: 'Free On-Site Estimate',
    description: 'We visit your property, assess the work, and give you a detailed quote — no hidden fees, no pressure.',
  },
  {
    step: 3,
    title: 'We Get to Work',
    description: 'Our experienced crew gets started right away. We work efficiently and leave your property clean.',
  },
  {
    step: 4,
    title: 'Enjoy the Results',
    description: 'Sit back and enjoy your transformed outdoor space. We stand behind our work.',
  },
];

/** @deprecated Use REVIEWS — kept for any imports */
export const TESTIMONIALS = REVIEWS;

// Blog Articles
export const BLOG_ARTICLES = [
  {
    id: 'why-rebranded-lawn-pups-kingstone-landscaping',
    title: 'Why We Rebranded from Lawn Pups to Kingstone Landscaping',
    slug: 'why-rebranded-lawn-pups-kingstone-landscaping',
    excerpt: 'Learn about our exciting rebrand from Lawn Pups to Kingstone Landscaping and what it means for our customers.',
    publishedDate: '2026-05-01',
    author: 'Kingstone Landscaping Team',
    readTime: '5 min',
    keyword: 'Lawn Pups Kingstone Landscaping rebrand',
  },
  {
    id: 'georgia-lawn-care-schedule-month-by-month',
    title: 'The Ultimate Georgia Lawn Care Schedule: Month-by-Month Guide',
    slug: 'georgia-lawn-care-schedule-month-by-month',
    excerpt: 'Complete seasonal guide for maintaining a healthy lawn in Georgia throughout the year.',
    publishedDate: '2026-04-15',
    author: 'Kingstone Landscaping Team',
    readTime: '8 min',
    keyword: 'Georgia lawn care schedule',
  },
  {
    id: 'hardscaping-ideas-atlanta-homes',
    title: '5 Hardscaping Ideas That Add Real Value to Atlanta Homes',
    slug: 'hardscaping-ideas-atlanta-homes',
    excerpt: 'Discover hardscaping designs that boost curb appeal and property value in Atlanta.',
    publishedDate: '2026-04-01',
    author: 'Kingstone Landscaping Team',
    readTime: '7 min',
    keyword: 'hardscaping Atlanta',
  },
  {
    id: 'prepare-georgia-lawn-summer-heat-drought',
    title: 'How to Prepare Your Georgia Lawn for Summer Heat & Drought',
    slug: 'prepare-georgia-lawn-summer-heat-drought',
    excerpt: 'Essential tips to protect your lawn from Georgia\'s intense summer weather.',
    publishedDate: '2026-03-20',
    author: 'Kingstone Landscaping Team',
    readTime: '6 min',
    keyword: 'summer lawn care Georgia',
  },
  {
    id: 'native-georgia-plants-landscaping',
    title: 'Best Native Georgia Plants for Low-Maintenance Curb Appeal',
    slug: 'native-georgia-plants-landscaping',
    excerpt: 'Transform your landscape with beautiful, drought-tolerant native Georgia plants.',
    publishedDate: '2026-03-05',
    author: 'Kingstone Landscaping Team',
    readTime: '7 min',
    keyword: 'native Georgia plants landscaping',
  },
  {
    id: 'irrigation-watering-schedule-georgia',
    title: 'Irrigation 101: When, How Often, and How Long to Water in Georgia',
    slug: 'irrigation-watering-schedule-georgia',
    excerpt: 'Master lawn irrigation timing and techniques optimized for Georgia\'s climate.',
    publishedDate: '2026-02-18',
    author: 'Kingstone Landscaping Team',
    readTime: '6 min',
    keyword: 'lawn irrigation Georgia',
  },
];

export const CUSTOMER_REVIEWS = [
  {
    name: 'Kobe Rea (Call Sign Samson)',
    text: 'Amazing service! Very professional and great customer service! Thank you Lawnpups!',
    rating: 5,
  },
  {
    name: 'Hermanda Sierra',
    text: 'Lawn-pups did an awesome job on my yard. I will definitely be referring them to others. Will be doing weekly lawn care for me.',
    rating: 5,
  },
  {
    name: 'Russ Owen',
    text: 'They were very professional and friendly and answered any questions that I needed',
    rating: 5,
  },
  {
    name: 'Eileen Henderson',
    text: 'Lawnpups did an absolutely amazing job trimming our shrubs and bushes and installing pine straw. The attention to detail and quality of their work truly exceeded our expectations. Not only was their service outstanding, but their customer service was exceptional.',
    rating: 5,
  },
  {
    name: 'Nancy',
    text: 'They did a great job in the front and back yard. Even ask them to go back and do something and they did without a problem. Will definitely be using their lawn service from here on out. They show up when they say they will. They put me in their rotation and will be back in two weeks.',
    rating: 5,
  },
  {
    name: 'Glenda Strickland',
    text: 'Juan did a great job with the lawn care at my house!',
    rating: 5,
  },
  {
    name: 'Gemma Hernandez',
    text: 'Great company! Our work / parent schedule keeps us pretty busy and Lawnpups has helped us keep our yard looking great, so that on our free time we have time to be outside enjoying with our kids instead of still using time for yard work. Great communication in following up with what we need done and letting us know what the plan is for their next visit. Definitely recommend!',
    rating: 5,
  },
  {
    name: 'Scott Kaplan',
    text: 'I highly recommend Juan and Lawnpups for all your lawn service needs. He gives a fair price, shows up on time, communicates, and does great work. Thanks Juan!',
    rating: 5,
  },
  {
    name: 'Brandon Hamilton',
    text: 'LawnPups does amazing work! He spent time getting our yard looking great, would recommend to anyone! He is dedicated to his craft and is a hard worker, happy he\'s taking care of our yard',
    rating: 5,
  },
  {
    name: 'Carolyn Canouse',
    text: 'Lawn Pups did an amazing job with our courtyard gardening projects. The work was done with great attention to detail, and everything was left clean and tidy when they finished. They were polite, friendly, and very reliable throughout the entire process. It\'s not always easy to find someone who takes this much pride in their work, and it really shows. Highly recommend Lawn Pups to anyone looking for quality service!',
    rating: 5,
  },
  {
    name: 'Samantha Bise',
    text: 'I had a great experience with this landscaping company. They showed up on time, worked hard, and did an amazing job on my yard. The attention to detail really stood out, and everything looked neat and professionally done when they finished. My lawn and landscaping look better than they have in a long time. The team was friendly, respectful, and clearly knew what they were doing. They made the whole process easy and stress-free. I highly recommend them to anyone looking for dependable landscaping services. If you want your yard to look great, this is the company to call!',
    rating: 5,
  },
  {
    name: 'Samantha Bise',
    subtitle: 'Repeat customer',
    text: 'I recently had landscaping work done by this company, and I couldn\'t be happier with the results. From start to finish, the team was professional, punctual, and clearly cared about the quality of their work. They paid attention to every detail and made sure everything looked clean, neat, and well-done. My yard looks completely transformed. The lawn is perfectly cut, the edges are sharp, and the whole property looks much more polished and maintained. They worked efficiently and left everything tidy when they finished. It\'s clear they take pride in what they do, and it shows in the final result. I would absolutely recommend them to anyone looking for reliable, high-quality landscaping services. I\'ll definitely be using them again in the future',
    rating: 5,
  },
  {
    name: 'Carlos Sierra',
    text: 'A great landscaping business brings beauty, value, and care to every outdoor space it touches. With a skilled team that understands both design and maintenance, they transform ordinary yards into welcoming environments where people can relax, entertain, and enjoy nature. From lush green lawns and vibrant flower beds to carefully trimmed hedges and well-planned hardscapes, a professional landscaping company combines creativity with attention to detail. Reliable service, clear communication, and a genuine commitment to customer satisfaction make clients feel confident that their property is in good hands. By using quality materials and thoughtful techniques, a dependable landscaping business helps homes and businesses look their best all year long while creating outdoor spaces that people truly love.',
    rating: 5,
  },
  {
    name: 'Susan Burtch',
    text: 'LP was in our neighborhood so we asked for quote on mulch removal & refresh, tree trimming around house & weeding of dry creek bed in our back yard. After taking measurements & discussing job I was texted an estimate. They were prompt, efficient & cleaned up all debris. Excellent work, professional & personable!',
    rating: 5,
  },
] as const;

// FAQs
export const FAQS = [
  {
    question: 'Is Kingstone Landscaping the same as Lawn Pups?',
    answer: 'Yes! Kingstone Landscaping is the rebranded name of Lawn Pups. We\'re the same Georgia team with the same commitment to quality, now with an elevated brand identity and expanded service offerings.',
  },
  {
    question: 'What areas do you serve?',
    answer: `We proudly serve ${SERVICE_AREAS_LIST}, and surrounding Georgia communities. Not sure if we service your area? Just ask!`,
  },
  {
    question: 'Do you require contracts?',
    answer: 'No contracts or hidden fees! We believe in building long-term relationships based on trust and excellent service. You can cancel anytime.',
  },
  {
    question: 'How do I schedule a free estimate?',
    answer: 'Simply call us at (770) 330-9282 or use our online Calendly booking system to schedule a convenient time. Our team will visit your property and provide a detailed, obligation-free quote.',
  },
  {
    question: 'What\'s your typical response time?',
    answer: 'We respond to inquiries within 24 hours. We\'re open 7 days a week, 7 AM – 7 PM. For urgent requests, call us directly at (770) 330-9282.',
  },
];
