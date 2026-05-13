import logoSrc from "@/assets/logo.svg";

const LOGO_TEXT_COLOR = { color: "#131621" } as const;

interface LogoProps {
  withText?: boolean;
  className?: string;
}

export const Logo = ({ withText = true, className }: LogoProps) => (
  <div className={`flex items-center gap-2 ${className ?? ""}`}>
    <div className="relative shrink-0 w-8 h-8">
      <img src={logoSrc} alt="PartyWitty" className="w-8 h-8" width={32} height={32} />
    </div>
    {withText && (
      <span
        className="text-[18px] font-semibold tracking-tight whitespace-nowrap"
        style={LOGO_TEXT_COLOR}
      >
        partywitty
      </span>
    )}
  </div>
);
