import Image from "next/image";
import Link from "next/link";
import { PhoneIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
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
          <Image
            src={siteConfig.logo}
            alt="Kharismerc eagle logo"
            width={40}
            height={40}
            className="size-9 shrink-0 object-contain"
            priority
          />
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
          <Button
            size="sm"
            className="hidden rounded-full bg-foreground text-background hover:bg-foreground/90 sm:inline-flex"
            asChild
          >
            <a href={`tel:${siteConfig.phones[0].replace(/\s/g, "")}`}>
              <PhoneIcon className="size-3.5" />
              Call us
            </a>
          </Button>
          <Button
            size="sm"
            className="rounded-full font-semibold sm:hidden"
            asChild
          >
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
