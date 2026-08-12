import Link from "next/link";
import { HomeIcon, PhoneIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BlurFade } from "@/components/velora/blur-fade";
import { siteConfig } from "@/lib/site-config";

export default function NotFound() {
  return (
    <main className="relative">
      <SiteHeader />
      <section className="relative flex min-h-[70svh] items-center justify-center overflow-hidden bg-background text-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,oklch(0.82_0.16_90_/_0.25),transparent_60%)]"
        />
        <div className="relative mx-auto max-w-2xl px-4 py-32 text-center">
          <BlurFade>
            <p className="font-[family-name:var(--font-heading)] text-8xl font-extrabold tracking-tight text-primary lg:text-9xl">
              404
            </p>
            <h1 className="mt-6 text-2xl font-semibold tracking-tight lg:text-3xl">
              This page isn&apos;t available
            </h1>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">
              The link may be outdated. Head home or contact the Kharismerc team
              and we&apos;ll point you the right way.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                className="rounded-full bg-foreground font-semibold text-background hover:bg-foreground/90"
                asChild
              >
                <Link href="/">
                  <HomeIcon className="size-4" />
                  Back home
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <Link href="/contact">
                  <PhoneIcon className="size-4" />
                  Contact us
                </Link>
              </Button>
            </div>
            <p className="mt-8 text-sm text-primary italic">
              “{siteConfig.motto}”
            </p>
          </BlurFade>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
