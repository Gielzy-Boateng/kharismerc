import type { Metadata } from "next";
import {
  MailIcon,
  MapPinIcon,
  MessageCircleIcon,
  PhoneIcon,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { BlurFade } from "@/components/velora/blur-fade";
import { ContactForm } from "@/components/template/contact-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Kharismerc Business Solutions in Accra — call, email, or send a message for jobs, registration, cleaning, property, and more.",
};

const channels = [
  {
    icon: <PhoneIcon className="size-5" />,
    title: "Call us",
    body: "Speak with our team about jobs, services, or bookings.",
    detail: siteConfig.phones.join(" / "),
    href: `tel:${siteConfig.phones[0].replace(/\s/g, "")}`,
  },
  {
    icon: <MailIcon className="size-5" />,
    title: "Email",
    body: "Send details and we will follow up promptly.",
    detail: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: <MessageCircleIcon className="size-5" />,
    title: "WhatsApp",
    body: "Message us for quick questions and scheduling.",
    detail: siteConfig.phones[0],
    href: `https://wa.me/${siteConfig.whatsapp}`,
  },
  {
    icon: <MapPinIcon className="size-5" />,
    title: "Visit / post",
    body: "We serve clients across Accra from Galilea.",
    detail: `${siteConfig.address} · ${siteConfig.addressDetail}`,
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <main className="relative">
      <SiteHeader />

      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s get your{" "}
            <span className="text-primary">next step</span> moving
          </>
        }
        description="Looking for a job, registering a business, booking a clean, or starting a property or design project? Reach out — we are ready to help."
      />

      <section className="pb-28">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 lg:grid-cols-[1fr_1.25fr] lg:gap-16 lg:px-8">
          <BlurFade direction="right">
            <div className="space-y-4">
              {channels.map((channel) => {
                const content = (
                  <>
                    <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-foreground text-primary">
                      {channel.icon}
                    </span>
                    <div>
                      <h2 className="font-semibold">{channel.title}</h2>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {channel.body}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-primary">
                        {channel.detail}
                      </p>
                    </div>
                  </>
                );

                return channel.href ? (
                  <a
                    key={channel.title}
                    href={channel.href}
                    className="flex items-start gap-4 rounded-2xl border bg-card p-6 transition-colors hover:border-primary"
                    {...(channel.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={channel.title}
                    className="flex items-start gap-4 rounded-2xl border bg-card p-6"
                  >
                    {content}
                  </div>
                );
              })}
              <p className="pt-2 text-sm text-muted-foreground italic">
                “{siteConfig.motto}”
              </p>
            </div>
          </BlurFade>
          <BlurFade direction="left" delay={0.12}>
            <ContactForm />
          </BlurFade>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
