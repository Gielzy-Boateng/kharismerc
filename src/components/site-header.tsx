import Link from "next/link";
import { PhoneIcon } from "lucide-react";

import { BrandLogo } from "@/components/brand-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { ShimmerButton } from "@/components/velora/shimmer-button";
import { siteConfig } from "@/lib/site-config";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-2.5">
          <BrandLogo sizeClassName="size-9" priority />
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-[family-name:var(--font-heading)] text-sm font-extrabold tracking-[0.08em] uppercase sm:text-[0.95rem]">
              Kharismerc
            </span>
            <span className="hidden text-[10px] font-semibold tracking-[0.18em] text-primary uppercase sm:block">
              Business Solutions
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={`tel:${siteConfig.phones[0].replace(/\s/g, "")}`}
            className="hidden sm:inline-flex"
          >
            <ShimmerButton className="h-9 rounded-full bg-foreground px-4 text-xs text-background shadow-foreground/20">
              <PhoneIcon className="size-3.5" />
              Call us
            </ShimmerButton>
          </a>
          <Link href="/contact" className="sm:hidden">
            <ShimmerButton className="h-9 rounded-full px-4 text-xs">
              Contact
            </ShimmerButton>
          </Link>
        </div>
      </div>
    </header>
  );
}
