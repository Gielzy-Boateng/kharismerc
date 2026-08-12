import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HandshakeIcon, HeartIcon, ShieldCheckIcon, UsersIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { BlurFade } from "@/components/velora/blur-fade";
import { NumberTicker } from "@/components/velora/number-ticker";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Kharismerc Business Solutions — Accra’s multi-service partner for recruitment, registration, cleaning, property, travel, and creative work.",
};

const principles = [
  {
    icon: <UsersIcon className="size-6" />,
    title: "People first",
    body: "Whether you are looking for work or growing a company, we treat every request with respect, clarity, and follow-through.",
  },
  {
    icon: <ShieldCheckIcon className="size-6" />,
    title: "Reliable delivery",
    body: "From field surveys to cleaning crews and print jobs, we show up prepared and finish what we start.",
  },
  {
    icon: <HandshakeIcon className="size-6" />,
    title: "One trusted desk",
    body: "Instead of juggling many vendors, you get one Accra-based partner for careers, compliance, property, and creative needs.",
  },
  {
    icon: <HeartIcon className="size-6" />,
    title: "Purpose with pride",
    body: `Our motto — “${siteConfig.motto}” — keeps service at the center of every engagement.`,
  },
];

const stats = [
  { value: 10, suffix: "+", label: "Service lines under one brand" },
  { value: 2, suffix: "", label: "Direct phone lines for clients" },
  { value: 100, suffix: "%", label: "Local Accra focus" },
  { value: 1, suffix: "", label: "Partner for every business need" },
];

export default function AboutPage() {
  return (
    <main className="relative">
      <SiteHeader />

      <PageHeader
        eyebrow="About us"
        title={
          <>
            Built to serve —{" "}
            <span className="text-primary">career to company</span>
          </>
        }
        description="Kharismerc Business Solutions helps individuals find work and helps businesses register, clean, document, build, advertise, and grow — with practical support across Accra."
      />

      <section className="pb-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <BlurFade>
            <div className="space-y-5 text-muted-foreground">
              <p className="leading-7">
                Kharismerc started as a hands-on business solutions company —
                the kind of partner you call when you need a job placed, a
                company registered, a space cleaned, a plot surveyed, or a
                campaign designed and printed.
              </p>
              <p className="leading-7">
                Today we operate across recruitment, registration, cleaning,
                land surveying and documentation, real estate and construction,
                property management, travel and passport support, advertisement,
                graphic design and printing, and mobile money assistance. One
                brand. Many capable teams.
              </p>
              <p className="leading-7 font-medium text-foreground italic">
                “{siteConfig.motto}”
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={0.12}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-muted">
              <Image
                src={siteConfig.logo}
                alt="Kharismerc Business Solutions logo"
                fill
                className="object-contain p-10"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </BlurFade>
        </div>
      </section>

      <section className="border-y border-border/40 bg-foreground py-14 text-background">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-4 lg:grid-cols-4 lg:px-8">
          {stats.map((stat, i) => (
            <BlurFade key={stat.label} delay={i * 0.08}>
              <div className="flex flex-col items-center gap-1 text-center">
                <span className="font-[family-name:var(--font-heading)] text-4xl font-extrabold tracking-tight text-primary">
                  <NumberTicker value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-sm text-background/65">{stat.label}</span>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <h2 className="text-center font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight">
              What we stand for
            </h2>
          </BlurFade>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {principles.map((p, i) => (
              <BlurFade key={p.title} delay={i * 0.08}>
                <div className="border-b border-border/60 pb-8">
                  <div className="mb-4 w-fit rounded-full bg-foreground p-3 text-primary">
                    {p.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
          <BlurFade delay={0.2}>
            <div className="mt-12 text-center">
              <Button
                size="lg"
                className="rounded-full bg-foreground text-background hover:bg-foreground/90"
                asChild
              >
                <Link href="/contact">Work with us</Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
