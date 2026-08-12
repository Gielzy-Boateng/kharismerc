import Image from "next/image";
import Link from "next/link";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

import { siteConfig, services } from "@/lib/site-config";

const companyLinks = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Services", href: "/services" },
  { text: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="flex size-12 items-center justify-center rounded-full bg-white p-1.5">
              <Image
                src={siteConfig.logo}
                alt="Kharismerc logo"
                width={40}
                height={40}
                className="size-9 object-contain"
              />
            </span>
            <span>
              <span className="block font-[family-name:var(--font-heading)] text-sm font-extrabold tracking-[0.1em] uppercase">
                Kharismerc
              </span>
              <span className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                Business Solutions
              </span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-white/70">
            Accra&apos;s one-stop partner for recruitment, registration,
            cleaning, surveying, real estate, travel, and creative services.
          </p>
          <p className="mt-4 text-sm font-medium italic text-primary">
            “{siteConfig.motto}”
          </p>
        </div>

        <nav aria-label="Company">
          <h3 className="text-sm font-semibold tracking-wide text-primary uppercase">
            Company
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            {companyLinks.map((link) => (
              <li key={link.text}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-primary uppercase">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2.5">
              <MapPinIcon className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>
                {siteConfig.address}
                <br />
                {siteConfig.addressDetail}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <MailIcon className="size-4 shrink-0 text-primary" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors hover:text-white"
              >
                {siteConfig.email}
              </a>
            </li>
            {siteConfig.phones.map((phone) => (
              <li key={phone} className="flex items-center gap-2.5">
                <PhoneIcon className="size-4 shrink-0 text-primary" />
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-white/50 md:flex-row md:items-center md:justify-between lg:px-8">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </span>
          <span className="truncate">
            {services
              .slice(0, 4)
              .map((s) => s.title.split("&")[0].trim())
              .join(" · ")}
            …
          </span>
        </div>
      </div>
    </footer>
  );
}
