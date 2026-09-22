/* eslint-disable no-nested-ternary */
/* eslint-disable @repo/no-style-props */
import { cn } from "@/src/utils/tailwind";
import Link from "next/link";
import { env } from "@/src/env.mjs";
import { useUiCustomization } from "@/src/ee/features/ui-customization/useUiCustomization";
import { PlusIcon } from "lucide-react";
import { LangfuseIcon } from "@/src/components/design-system/LangfuseIcon/LangfuseIcon";

/**
 * Compact Langfuse brand mark for the top bar.
 *
 * The primary brand lives in the sidebar header. Once the sidebar goes
 * off-canvas (below `md`, where it collapses into a Sheet) nothing brands the
 * app, so the page header renders this compact mark instead — mirroring the
 * icon the sidebar itself shows when collapsed.
 *
 * `variant="icon"` (default) renders just the Langfuse mark; `variant="wordmark"`
 * renders the full logotype, for the centered brand in the mobile top bar.
 *
 * Respects the self-host UI-customization logo entitlement, same as
 * `LangfuseLogo`, and links to `/` like the sidebar logo.
 */
export const TopbarBrand = ({
  className,
  variant = "icon",
}: {
  className?: string;
  variant?: "icon" | "wordmark";
}) => {
  const uiCustomization = useUiCustomization();
  const logoLight = uiCustomization?.logoLightModeHref;
  const logoDark = uiCustomization?.logoDarkModeHref;

  return (
    <Link
      href="/"
      aria-label="EvalSight home"
      className={cn("flex shrink-0 items-center gap-1", className)}
    >
      {logoLight && logoDark ? (
        // Custom logo (max aspect ratio 1:3 per docs) + the EvalSight mark,
        // matching BrandLogo's customized layout.
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoLight}
            alt="Logo"
            className="max-h-5 max-w-16 dark:hidden"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoDark}
            alt="Logo"
            className="hidden max-h-5 max-w-16 dark:block"
          />
          <PlusIcon size={8} className="text-muted-foreground" />
          <LangfuseIcon size={16} />
        </>
      ) : variant === "wordmark" ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="max-h-5 max-w-24 dark:hidden"
            src={`${env.NEXT_PUBLIC_BASE_PATH ?? ""}/assets/wordart-black.svg`}
            alt="EvalSight Logo"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="hidden max-h-5 max-w-24 dark:block"
            src={`${env.NEXT_PUBLIC_BASE_PATH ?? ""}/assets/wordart-white.svg`}
            alt="EvalSight Logo"
          />
        </>
      ) : (
        <LangfuseIcon size={28} />
      )}
    </Link>
  );
};
