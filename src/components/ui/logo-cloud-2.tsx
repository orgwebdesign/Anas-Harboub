import React from "react";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

import qualyxLogo from "@/assets/images/qualix logo.png";
import gonzagueHavetLogo from "@/assets/images/Gonzague Havet logo.png";
import lmYachtsLogo from "@/assets/images/logo lm yacht ibiza.png";
import mtcHolistiqueLogo from "@/assets/images/logo mtc holistique.png";
import jeremieBLogo from "@/assets/images/logo jeremieb.png";
import minglerAiLogo from "@/assets/images/logo mingler ai.png";
import placesDesAvocatsLogo from "@/assets/images/logo places des avocats.png";
import coeurNanterreLogo from "@/assets/images/logo coeur nanterre.png";

export type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos?: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  const defaultLogos: Logo[] = [
    { src: qualyxLogo, alt: "Qualyx AI Logo" },
    { src: gonzagueHavetLogo, alt: "Gonzague Havet Logo" },
    { src: lmYachtsLogo, alt: "LM Luxe Yachts Ibiza Logo" },
    { src: mtcHolistiqueLogo, alt: "MTC Holistique Logo" },
    { src: jeremieBLogo, alt: "Jérémie Boulaire Logo" },
    { src: minglerAiLogo, alt: "Mingler AI Logo" },
    { src: placesDesAvocatsLogo, alt: "Place des Avocats Logo" },
    { src: coeurNanterreLogo, alt: "Coeur Nanterre Logo" },
  ];

  const activeLogos = logos && logos.length >= 8 ? logos : defaultLogos;

  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border-x border-border md:grid-cols-4",
        className
      )}
      {...props}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-border" />

      {/* Row 1 / Col 1 */}
      <LogoCard
        className="relative border-r border-b border-border bg-secondary dark:bg-secondary/30"
        logo={activeLogos[0]}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-muted-foreground/60"
          strokeWidth={1}
        />
      </LogoCard>

      {/* Row 1 / Col 2 */}
      <LogoCard
        className="border-b border-border md:border-r"
        logo={activeLogos[1]}
      />

      {/* Row 1 / Col 3 */}
      <LogoCard
        className="relative border-r border-b border-border md:bg-secondary dark:md:bg-secondary/30"
        logo={activeLogos[2]}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-muted-foreground/60"
          strokeWidth={1}
        />
        <PlusIcon
          className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block text-muted-foreground/60"
          strokeWidth={1}
        />
      </LogoCard>

      {/* Row 1 / Col 4 */}
      <LogoCard
        className="relative border-b border-border bg-secondary md:bg-background dark:bg-secondary/30 md:dark:bg-background"
        logo={activeLogos[3]}
      />

      {/* Row 2 / Col 1 */}
      <LogoCard
        className="relative border-r border-b border-border bg-secondary md:border-b-0 md:bg-background dark:bg-secondary/30 md:dark:bg-background"
        logo={activeLogos[4]}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] md:-left-[12.5px] absolute z-10 size-6 md:hidden text-muted-foreground/60"
          strokeWidth={1}
        />
      </LogoCard>

      {/* Row 2 / Col 2 */}
      <LogoCard
        className="border-b border-border bg-background md:border-r md:border-b-0 md:bg-secondary dark:md:bg-secondary/30"
        logo={activeLogos[5]}
      />

      {/* Row 2 / Col 3 */}
      <LogoCard
        className="border-r border-border"
        logo={activeLogos[6]}
      />

      {/* Row 2 / Col 4 */}
      <LogoCard
        className="bg-secondary dark:bg-secondary/30"
        logo={activeLogos[7]}
      />

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-border" />
    </div>
  );
}

type LogoCardProps = React.ComponentProps<"div"> & {
  logo: Logo;
};

function LogoCard({ logo, className, children, ...props }: LogoCardProps) {
  return (
    <div
      className={cn(
        "group relative flex items-center justify-center bg-background px-4 py-8 md:p-8 transition-colors duration-300 hover:bg-white/[0.04]",
        className
      )}
      {...props}
    >
      <img
        alt={logo.alt}
        className="pointer-events-none h-6 sm:h-7 md:h-8 max-w-[130px] sm:max-w-[150px] w-auto object-contain select-none opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105 dark:brightness-0 dark:invert"
        height={logo.height || "auto"}
        src={logo.src}
        width={logo.width || "auto"}
      />
      {children}
    </div>
  );
}
