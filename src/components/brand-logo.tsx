import Image from "next/image";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

interface BrandLogoProps {
  className?: string;
  /** Outer container size classes, e.g. size-9 */
  sizeClassName?: string;
  priority?: boolean;
}

export function BrandLogo({
  className,
  sizeClassName = "size-9",
  priority = false,
}: BrandLogoProps) {
  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-border/60",
        sizeClassName,
        className
      )}
    >
      <Image
        src={siteConfig.logo}
        alt="Kharismerc eagle logo"
        fill
        className="object-cover"
        sizes="96px"
        priority={priority}
      />
    </span>
  );
}
