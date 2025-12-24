
import { Service, Location, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'foundation',
    title: 'Foundation Repair',
    description: 'Specialized solutions for settling foundations, wall cracks, and structural instability using advanced piering systems.',
    icon: 'fa-solid fa-house-chimney-crack',
    image: 'https://picsum.photos/seed/foundation/800/600'
  },
  {
    id: 'waterproofing',
    title: 'Basement Waterproofing',
    description: 'Keep your basement dry with interior drainage systems, sump pumps, and moisture barriers that stop leaks at the source.',
    icon: 'fa-solid fa-faucet-drip',
    image: 'https://picsum.photos/seed/waterproofing/800/600'
  },
  {
    id: 'crawlspace',
    title: 'Crawl Space Repair',
    description: 'Encapsulation and dehumidification to prevent mold, wood rot, and sagging floors while improving home energy efficiency.',
    icon: 'fa-solid fa-door-closed',
    image: 'https://picsum.photos/seed/crawl/800/600'
  },
  {
    id: 'concrete',
    title: 'Concrete Lifting',
    description: 'PolyLevel® injection to lift and stabilize sinking driveways, sidewalks, and pool decks quickly and effectively.',
    icon: 'fa-solid fa-road',
    image: 'https://picsum.photos/seed/concrete/800/600'
  }
];

export const LOCATIONS: Location[] = [
  {
    name: 'Huntsville, AL',
    address: '123 AFS Parkway, Huntsville, AL 35801',
    phone: '256-555-0199',
    hours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-2PM',
    manager: 'Michael Thompson',
    managerPhoto: 'https://picsum.photos/seed/man1/100/100'
  },
  {
    name: 'Knoxville, TN',
    address: '456 Ridge View Dr, Knoxville, TN 37901',
    phone: '865-555-0188',
    hours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-2PM',
    manager: 'Sarah Jenkins',
    managerPhoto: 'https://picsum.photos/seed/woman1/100/100'
  },
  {
    name: 'Auburn, AL',
    address: '789 Tiger Blvd, Auburn, AL 36830',
    phone: '334-555-0177',
    hours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-2PM',
    manager: 'David Miller',
    managerPhoto: 'https://picsum.photos/seed/man2/100/100'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    author: "Robert Wilson",
    location: "Birmingham, AL",
    rating: 5,
    text: "The crew was incredibly professional. They fixed our foundation issues in two days and left the place spotless. AFS gave us our peace of mind back!",
    role: "Homeowner"
  },
  {
    author: "Amanda S.",
    location: "Chattanooga, TN",
    rating: 5,
    text: "I was worried about our crawl space mold. AFS encapsulated it and now our air quality is noticeably better. Great financing options too.",
    role: "Realtor"
  },
  {
    author: "John D.",
    location: "Huntsville, AL",
    rating: 5,
    text: "Concrete lifting saved my driveway. It's perfectly level now. Much cheaper than a full replacement!",
    role: "Homeowner"
  }
];

export const FAQS = [
  {
    q: "How much does foundation repair cost?",
    a: "Costs vary based on the severity of the issue. We offer free, comprehensive inspections to provide an exact quote tailored to your home's needs."
  },
  {
    q: "Do you offer financing?",
    a: "Yes! We provide flexible financing options including 0% interest plans for qualified homeowners."
  },
  {
    q: "Is there a warranty on your work?",
    a: "Absolutely. Most of our foundation and waterproofing solutions come with a fully transferable lifetime warranty."
  },
  {
    q: "How long does a typical repair take?",
    a: "Most projects, from waterproofing to concrete lifting, are completed in 1-3 days."
  }
];
