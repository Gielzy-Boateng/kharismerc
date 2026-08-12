import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { BlurFade } from "@/components/velora/blur-fade";
import { ShimmerButton } from "@/components/velora/shimmer-button";
import { services, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Kharismerc services: job recruitment, business registration, cleaning, surveying, real estate, travel, advertisement, design & printing, and more.",
};

const visuals: Record<string, string> = {
  "job-recruitment": "/brand/recruitment.png",
  cleaning: "/brand/cleaning.png",
  "real-estate": "/brand/real-estate.png",
  "land-surveying": "/brand/surveying.png",
  "design-printing": "/brand/design-print.png",
  "business-registration": "/brand/registration.png",
  advertisement: "/brand/surveying.png",
  "property-management": "/brand/services-overview.png",
  "travel-passport": "/brand/services-overview.png",
  "mobile-money": "/brand/registration.png",
};

export default function ServicesPage() {
  return (
    <main className="relative">
      <SiteHeader />

      <PageHeader
        eyebrow="What we do"
        title={
          <>
            Services that move{" "}
            <span className="text-primary">people and businesses</span> forward
          </>
        }
        description="Browse every Kharismerc offering — written clearly so you know exactly who to call and what we can deliver."
      />

      <section className="pb-28">
        <div className="mx-auto max-w-6xl space-y-20 px-4 lg:px-8">
          {services.map((service, index) => {
            const image = visuals[service.slug] ?? "/brand/logo.png";
            const reverse = index % 2 === 1;

            return (
              <BlurFade key={service.slug} delay={0.05}>
                <article
                  id={service.slug}
                  className="scroll-mt-28 grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
                >
                  <div className={reverse ? "lg:order-2" : undefined}>
                    <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                      {service.short}
                    </p>
                    <h2 className="mt-2 font-[family-name:var(--font-heading)] text-2xl font-bold tracking-tight lg:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-6">
                      <Link href="/contact">
                        <ShimmerButton className="rounded-full bg-foreground text-background shadow-foreground/20">
                          {service.cta}
                        </ShimmerButton>
                      </Link>
                    </div>
                  </div>
                  <div
                    className={`relative aspect-[5/4] overflow-hidden rounded-3xl bg-muted ${
                      reverse ? "lg:order-1" : ""
                    }`}
                  >
                    <Image
                      src={image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </article>
              </BlurFade>
            );
          })}
        </div>

        <div className="mx-auto mt-20 max-w-3xl px-4 text-center lg:px-8">
          <p className="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-tight">
            Not sure which service you need?
          </p>
          <p className="mt-3 text-muted-foreground">
            Tell us your goal — we&apos;ll point you to the right team. Call{" "}
            {siteConfig.phones[0]} or email {siteConfig.email}.
          </p>
          <div className="mt-6 flex justify-center">
            <Link href="/contact">
              <ShimmerButton className="rounded-full">
                Contact us today
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
