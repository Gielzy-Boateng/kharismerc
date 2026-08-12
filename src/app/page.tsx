import Image from "next/image";
import Link from "next/link";
import {
  BriefcaseIcon,
  Building2Icon,
  CheckIcon,
  ClipboardPenIcon,
  HomeIcon,
  MapPinnedIcon,
  MegaphoneIcon,
  PlaneIcon,
  PrinterIcon,
  SparklesIcon,
  StarIcon,
  WalletIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AnimatedGradientText } from "@/components/velora/animated-gradient-text";
import { AvatarCircles } from "@/components/velora/avatar-circles";
import { BlurFade } from "@/components/velora/blur-fade";
import { Marquee } from "@/components/velora/marquee";
import { Particles } from "@/components/velora/particles";
import { ScrollProgress } from "@/components/velora/scroll-progress";
import { ShimmerButton } from "@/components/velora/shimmer-button";
import { TextReveal } from "@/components/velora/text-reveal";
import { TiltCard } from "@/components/velora/tilt-card";
import { Typewriter } from "@/components/velora/typewriter";
import { services, siteConfig, testimonials } from "@/lib/site-config";

const serviceIcons = {
  "job-recruitment": BriefcaseIcon,
  "business-registration": ClipboardPenIcon,
  cleaning: SparklesIcon,
  "land-surveying": MapPinnedIcon,
  "real-estate": HomeIcon,
  "property-management": Building2Icon,
  "travel-passport": PlaneIcon,
  advertisement: MegaphoneIcon,
  "design-printing": PrinterIcon,
  "mobile-money": WalletIcon,
} as const;

const highlights = [
  "Recruitment & job placement",
  "Business registration assist",
  "Cleaning for offices & homes",
  "Land surveying & documentation",
  "Real estate & construction",
  "Travel, passport & advertising",
];

const faqs = [
  {
    q: "What services does Kharismerc offer?",
    a: "We are a multi-service business solutions company covering job recruitment, business registration, cleaning, land surveying and documentation, real estate and construction, property management, travel and passport support, advertisement, graphic design and printing, and mobile money assistance.",
  },
  {
    q: "Where are you located?",
    a: `We serve clients from ${siteConfig.address}, ${siteConfig.addressDetail}. Call or email us to book a consultation.`,
  },
  {
    q: "How do I find a job or apply?",
    a: "Reach out through our contact page, call either of our numbers, or email kharismerc@gmail.com. Share your skills and preferred roles — our recruitment team will guide you through placement.",
  },
  {
    q: "Can you help register my business in Ghana?",
    a: "Yes. We assist with business registration and related documentation so you can incorporate properly and start trading with confidence.",
  },
];

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <SiteHeader />

      {/* Hero — brand first, theme-aware */}
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-background text-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-10%,oklch(0.82_0.16_90_/_0.28),transparent_55%)] dark:bg-[radial-gradient(ellipse_80%_55%_at_50%_-10%,oklch(0.82_0.16_90_/_0.22),transparent_55%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-muted/60"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 top-24 size-[28rem] rounded-full bg-primary/25 blur-3xl dark:bg-primary/20"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-16 bottom-10 size-[22rem] rounded-full bg-primary/15 blur-3xl"
        />
        <Particles quantity={40} className="absolute inset-0 opacity-40" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pt-28 pb-16 lg:px-8 lg:pt-32">
          <BlurFade delay={0} direction="down">
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <span className="flex size-20 shrink-0 items-center justify-center rounded-full bg-card p-2 shadow-[0_0_0_4px_oklch(0.82_0.16_90_/_0.35)] ring-1 ring-border sm:size-24">
                <Image
                  src={siteConfig.logo}
                  alt="Kharismerc eagle logo"
                  width={88}
                  height={88}
                  className="size-16 object-contain sm:size-[4.5rem]"
                  priority
                />
              </span>
              <div>
                <p className="font-[family-name:var(--font-heading)] text-4xl font-extrabold tracking-[0.06em] text-balance uppercase sm:text-5xl lg:text-6xl">
                  Kharismerc
                </p>
                <p className="mt-1 text-sm font-semibold tracking-[0.28em] text-primary uppercase sm:text-base">
                  Business Solutions
                </p>
              </div>
            </div>
          </BlurFade>

          <h1 className="mt-10 max-w-4xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            <TextReveal text="One partner for" className="text-foreground" />{" "}
            <AnimatedGradientText>
              <Typewriter
                words={[
                  "every job.",
                  "every business.",
                  "every space.",
                  "every move.",
                ]}
              />
            </AnimatedGradientText>
          </h1>

          <BlurFade delay={0.35}>
            <p className="mt-5 max-w-xl text-base text-muted-foreground text-pretty sm:text-lg">
              From finding work and registering your company to cleaning,
              surveying, and building — we deliver practical solutions across
              Accra with care you can trust.
            </p>
          </BlurFade>

          <BlurFade delay={0.5}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/contact">
                <ShimmerButton className="rounded-full">
                  <BriefcaseIcon className="size-4" />
                  Find a job easily
                </ShimmerButton>
              </Link>
              <Button
                size="lg"
                className="rounded-full bg-foreground font-semibold text-background hover:bg-foreground/90"
                asChild
              >
                <Link href="/contact">Apply now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full"
                asChild
              >
                <Link href="/contact">Contact us today</Link>
              </Button>
            </div>
          </BlurFade>

          <BlurFade delay={0.6}>
            <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <AvatarCircles
                people={testimonials.slice(0, 5).map((t) => t.name)}
                extra={120}
              />
              <div className="flex flex-col gap-0.5">
                <span className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="size-4 fill-current" />
                  ))}
                </span>
                <span className="text-sm text-muted-foreground">
                  Trusted by clients across Accra &amp; beyond
                </span>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.75} offset={24}>
            <p className="mt-14 max-w-md text-sm font-medium tracking-wide text-primary italic">
              “{siteConfig.motto}”
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Service strip */}
      <section className="border-y border-border/50 bg-primary py-4">
        <Marquee pauseOnHover className="[--duration:36s]">
          {highlights.map((item) => (
            <span
              key={item}
              className="mx-6 text-sm font-bold tracking-wide text-primary-foreground uppercase"
            >
              {item}
            </span>
          ))}
        </Marquee>
      </section>

      {/* Services */}
      <section id="services" className="relative py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <p className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
              Our services
            </p>
            <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-balance lg:text-5xl">
              Everything your business — and career — needs in one place
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Polished from the work we already do every day: recruitment,
              registration, cleaning, land work, property, travel, creatives,
              and more.
            </p>
          </BlurFade>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon =
                serviceIcons[service.slug as keyof typeof serviceIcons] ??
                SparklesIcon;
              return (
                <BlurFade key={service.slug} delay={(i % 3) * 0.08}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="group flex h-full flex-col border-b border-border/60 pb-6 transition-colors hover:border-primary"
                  >
                    <span className="mb-4 inline-flex size-11 items-center justify-center rounded-full bg-foreground text-primary">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight group-hover:text-primary">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold tracking-wide text-primary uppercase">
                      {service.short}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </Link>
                </BlurFade>
              );
            })}
          </div>

          <BlurFade delay={0.2}>
            <div className="mt-12">
              <Button
                size="lg"
                className="rounded-full bg-foreground text-background hover:bg-foreground/90"
                asChild
              >
                <Link href="/services">See all services in detail</Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Visual story */}
      <section className="relative overflow-hidden bg-foreground py-24 text-background lg:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <BlurFade direction="right">
            <p className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
              Why Kharismerc
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-balance lg:text-4xl">
              Practical help. Professional delivery. People first.
            </h2>
            <p className="mt-4 text-background/70">
              Whether you need a job, a registered company, a cleaner space, a
              surveyed plot, or a printed campaign — we show up ready to get it
              done.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                "Local Accra presence with real phone support",
                "Clear next steps for jobs, registration, and property",
                "Creative and field teams under one trusted brand",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <CheckIcon className="size-3" />
                  </span>
                  <span className="text-background/85">{item}</span>
                </li>
              ))}
            </ul>
          </BlurFade>

          <BlurFade direction="left" delay={0.12}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-muted sm:aspect-[5/4]">
              <Image
                src="/brand/services-overview.png"
                alt="Kharismerc services — property, cleaning, and business support"
                fill
                className="object-cover object-left"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Featured work strips */}
      <section className="py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <p className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
              In action
            </p>
            <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight lg:text-4xl">
              The work behind the brand
            </h2>
          </BlurFade>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                src: "/brand/recruitment.png",
                label: "Jobs available",
                caption: "Recruitment & placement",
              },
              {
                src: "/brand/cleaning.png",
                label: "Be clean always",
                caption: "Offices, homes & more",
              },
              {
                src: "/brand/real-estate.png",
                label: "Build & own",
                caption: "Real estate & construction",
              },
            ].map((item, i) => (
              <BlurFade key={item.src} delay={i * 0.1}>
                <figure className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 pt-16 text-white">
                    <p className="font-[family-name:var(--font-heading)] text-lg font-bold uppercase">
                      {item.label}
                    </p>
                    <p className="text-sm text-white/75">{item.caption}</p>
                  </figcaption>
                </figure>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — keep circle heads */}
      <section className="relative border-y border-border/50 bg-muted/40 py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <p className="text-center text-sm font-semibold tracking-[0.2em] text-primary uppercase">
              Customer reviews
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl text-center font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-balance lg:text-5xl">
              People who chose{" "}
              <span className="text-primary">Kharismerc</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Real feedback from candidates, business owners, and property
              clients we serve every week.
            </p>
          </BlurFade>

          <div className="mt-16 columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6">
            {testimonials.map((t, i) => (
              <BlurFade
                key={t.name}
                delay={(i % 3) * 0.1}
                className="break-inside-avoid"
              >
                <TiltCard>
                  <figure className="rounded-2xl border bg-card p-6 shadow-sm">
                    <span className="flex gap-0.5 text-primary">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <StarIcon key={s} className="size-3.5 fill-current" />
                      ))}
                    </span>
                    <blockquote className="mt-4 text-sm leading-relaxed text-card-foreground">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-5 flex items-center gap-3">
                      <AvatarCircles
                        people={[t.name]}
                        className="[&>span]:size-9 [&>span]:text-[10px]"
                      />
                      <div>
                        <p className="text-sm font-semibold">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </figcaption>
                  </figure>
                </TiltCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <BlurFade>
            <h2 className="text-center font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight lg:text-4xl">
              Frequently asked questions
            </h2>
          </BlurFade>
          <BlurFade delay={0.12}>
            <Accordion type="single" collapsible className="mt-12">
              {faqs.map((faq) => (
                <AccordionItem key={faq.q} value={faq.q}>
                  <AccordionTrigger className="text-left text-base">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </BlurFade>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary py-20 lg:py-24">
        <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
          <BlurFade>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-extrabold tracking-tight text-balance text-primary-foreground uppercase sm:text-4xl lg:text-5xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Call us, email us, or send a message — we&apos;ll help you find
              work, register a business, clean a space, or move your next project
              forward.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                size="lg"
                className="rounded-full bg-foreground font-semibold text-background hover:bg-foreground/90"
                asChild
              >
                <Link href="/contact">Contact us today</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-primary-foreground/30 bg-transparent font-semibold text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                asChild
              >
                <a href={`tel:${siteConfig.phones[0].replace(/\s/g, "")}`}>
                  {siteConfig.phones[0]}
                </a>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
