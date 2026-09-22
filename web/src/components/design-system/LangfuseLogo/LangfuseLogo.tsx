import { BrandIcon } from "@/src/components/design-system/LangfuseIcon/LangfuseIcon";
import { env } from "@/src/env.mjs";
import { cn } from "@/src/utils/tailwind";
import { PlusIcon } from "lucide-react";

export const BrandLogo = ({
  logoLightModeHref,
  logoDarkModeHref,
}: {
  logoLightModeHref?: string;
  logoDarkModeHref?: string;
}) => {
  if (logoLightModeHref && logoDarkModeHref) {
    // logo is a url, maximum aspect ratio of 1:3 needs to be supported according to docs
    return (
      <div className="flex items-center gap-1">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoLightModeHref}
          alt="EvalSight Logo"
          className={cn(
            "group-data-[collapsible=icon]:hidden dark:hidden",
            "max-h-4 max-w-14",
          )}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoDarkModeHref}
          alt="EvalSight Logo"
          className={cn(
            "hidden group-data-[collapsible=icon]:hidden dark:block",
            "max-h-4 max-w-14",
          )}
        />
        <PlusIcon size={8} className="group-data-[collapsible=icon]:hidden" />
        <BrandIcon size={16} />
      </div>
    );
  }

  return (
    <div className="flex items-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="-ml-1.5 h-5 max-w-22 translate-y-px group-data-[collapsible=icon]:hidden dark:hidden"
        src={`${env.NEXT_PUBLIC_BASE_PATH ?? ""}/assets/wordart-black.svg`}
        alt="EvalSight Logo"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="-ml-1.5 hidden h-5 max-w-22 translate-y-px group-data-[collapsible=icon]:hidden dark:block"
        src={`${env.NEXT_PUBLIC_BASE_PATH ?? ""}/assets/wordart-white.svg`}
        alt="EvalSight Logo"
      />
      <div className="hidden scale-120 group-data-[collapsible=icon]:block">
        <BrandIcon size={28} />
      </div>
    </div>
  );
};

export const LangfuseLogo = BrandLogo;
