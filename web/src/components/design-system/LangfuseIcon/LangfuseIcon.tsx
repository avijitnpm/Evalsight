import { env } from "@/src/env.mjs";

type LangfuseIconProps = {
  size?: 14 | 16 | 28 | 32 | 42;
  /** Pass `""` when a visible heading next to the icon already names it. */
  alt?: string;
};

export const BrandIcon = ({
  size = 32,
  alt = "EvalSight",
}: LangfuseIconProps) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={`${env.NEXT_PUBLIC_BASE_PATH ?? ""}/assets/icon.svg`}
    width={size}
    height={size}
    alt={alt}
  />
);

export const LangfuseIcon = BrandIcon;
