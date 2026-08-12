/**
 * Single source of truth for Kharismerc Business Solutions.
 */
export const siteConfig = {
  name: "Kharismerc Business Solutions",
  shortName: "Kharismerc",
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://kharismerc.com"
  ).replace(/\/$/, ""),
  tagline: "A service to man, a service to God",
  description:
    "Kharismerc Business Solutions is Accra’s trusted partner for job recruitment, business registration, cleaning, land surveying, real estate, travel, and more — one team for every business need.",
  motto: "A service to man, a service to God",
  email: "kharismerc@gmail.com",
  phones: ["0240 882 644", "0272 625 689"],
  whatsapp: "233240882644",
  address: "Galilea–Accra",
  addressDetail: "Box 77, Nima Accra, Ghana",
  logo: "/brand/logo.png",
} as const;

export const services = [
  {
    slug: "job-recruitment",
    title: "Job Recruitment & Placement",
    short: "Find a job easily",
    description:
      "We connect skilled talent with employers across Accra and beyond — from hospitality and healthcare to construction, cleaning, and corporate roles.",
    cta: "Find a job",
  },
  {
    slug: "business-registration",
    title: "Business Registration",
    short: "Register with confidence",
    description:
      "We assist you through company incorporation and documentation so you can launch legally, quickly, and without the paperwork headaches.",
    cta: "Register your business",
  },
  {
    slug: "cleaning",
    title: "Cleaning Services",
    short: "Be clean always",
    description:
      "Professional cleaning for offices, homes, workshops, hospitals, and more — reliable teams, quality supplies, and spaces that stay ready.",
    cta: "Book a clean",
  },
  {
    slug: "land-surveying",
    title: "Land Surveying & Documentation",
    short: "Measure. Document. Protect.",
    description:
      "Accurate field surveys and proper documentation for property decisions, boundary clarity, and lasting peace of mind.",
    cta: "Request a survey",
  },
  {
    slug: "real-estate",
    title: "Real Estate & Construction",
    short: "Build and own with us",
    description:
      "From modern homes and townhouses to active construction sites — we help you find, build, and manage property that lasts.",
    cta: "Explore properties",
  },
  {
    slug: "property-management",
    title: "Property Management",
    short: "Care for what you own",
    description:
      "Hands-on management so your properties stay maintained, occupied, and working for you while you focus on growth.",
    cta: "Talk management",
  },
  {
    slug: "travel-passport",
    title: "Travel, Tour & Passport",
    short: "Go further, prepared",
    description:
      "Travel planning, tour support, and passport assistance — so your next trip starts organized and ends memorable.",
    cta: "Plan a trip",
  },
  {
    slug: "advertisement",
    title: "Advertisement",
    short: "Advertise here",
    description:
      "Get your brand in front of the right audience with clear messaging, bold creatives, and placement that drives calls.",
    cta: "Advertise with us",
  },
  {
    slug: "design-printing",
    title: "Graphic Design & Printing",
    short: "Design that prints well",
    description:
      "Flyers, business cards, brochures, passport photos, and full print runs — creative work that looks sharp on screen and on paper.",
    cta: "Start a design",
  },
  {
    slug: "mobile-money",
    title: "Mobile Money",
    short: "Pay and get paid easily",
    description:
      "Convenient mobile money support with major networks so everyday transactions stay simple for you and your customers.",
    cta: "Get support",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Kharismerc helped me land a placement within weeks. Clear communication, real follow-up, and a team that treated my search seriously.",
    name: "Ama Mensah",
    role: "Placed candidate · Accra",
  },
  {
    quote:
      "They walked us through business registration end to end. What felt overwhelming became a finished certificate and a company we could trade under.",
    name: "Kwame Asante",
    role: "Business owner · Nima",
  },
  {
    quote:
      "Our office cleaning is consistent and thorough. The team shows up on time and leaves the space ready for clients every morning.",
    name: "Efua Boateng",
    role: "Office manager · East Legon",
  },
  {
    quote:
      "The surveying work was precise and the documentation was easy to understand. Exactly what we needed before we closed on the land.",
    name: "Yaw Owusu",
    role: "Property buyer · Accra",
  },
  {
    quote:
      "From flyers to business cards, their design and printing made our brand look established. Fast turnaround and quality we can rely on.",
    name: "Akosua Darko",
    role: "Boutique founder · Osu",
  },
  {
    quote:
      "Property management without the stress. They handle tenants and maintenance so we can focus on growing the rest of the business.",
    name: "Kofi Adjei",
    role: "Landlord · Galilea",
  },
] as const;
