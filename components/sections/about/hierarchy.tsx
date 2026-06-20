import Photo from "@/components/ui/Photo";
import Leaf from "@/components/ui/Leaf";
import { orgHierarchy, type OrgLevel, type OrgMember } from "@/data/hierarchy";

/** Initials for the gold placeholder, e.g. "Nilanga Amunugama" → "NA". */
function initials(name?: string): string {
  if (!name) return "";
  const words = name.split(/\s+/).filter((w) => /[A-Za-z]/.test(w));
  if (words.length === 0) return "";
  const first = words[0][0];
  const last = words.length > 1 ? words[words.length - 1][0] : "";
  return (first + last).toUpperCase();
}

// Rounded-square photo cards (portrait aspect) so the full face stays visible.
// Enlarged across the board so every employee — especially the field staff —
// reads clearly.
const SIZE: Record<OrgLevel["variant"], string> = {
  feature: "w-32 sm:w-36 lg:w-40",
  named: "w-28 sm:w-32 lg:w-34",
  team: "w-24 sm:w-28 lg:w-30",
};

const RADIUS: Record<OrgLevel["variant"], string> = {
  feature: "rounded-2xl",
  named: "rounded-2xl",
  team: "rounded-xl",
};

// How wide the surrounding name/role card may grow per variant.
const CARD_W: Record<OrgLevel["variant"], string> = {
  feature: "w-40 sm:w-44 lg:w-48",
  named: "w-36 sm:w-40 lg:w-42",
  team: "w-32 sm:w-36 lg:w-38",
};

function Avatar({ member, variant }: { member: OrgMember; variant: OrgLevel["variant"] }) {
  const ring =
    variant === "feature"
      ? "ring-1 ring-normal-gold/55"
      : "ring-1 ring-sapphire-blue/15";
  const base = `${SIZE[variant]} ${RADIUS[variant]} ${ring} relative aspect-[4/5] shrink-0 overflow-hidden bg-bg-alt`;

  if (member.img) {
    return (
      <div className={base}>
        <Photo
          src={member.img}
          alt={member.name ?? "Team member"}
          fill
          sizes="180px"
          className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.04]"
        />
      </div>
    );
  }

  // On-brand gold placeholder — initials for named people, plain marker for field staff.
  return (
    <div
      className={`${base} grid place-items-center bg-linear-to-br from-light-gold to-antique-gold`}
      title={member.name}
    >
      {initials(member.name) ? (
        <span className="font-display font-medium text-midnight-blue/85 text-lg sm:text-xl lg:text-2xl tracking-tightish">
          {initials(member.name)}
        </span>
      ) : (
        <span className="h-2.5 w-2.5 rounded-full bg-midnight-blue/25" />
      )}
    </div>
  );
}

function Node({ member, variant }: { member: OrgMember; variant: OrgLevel["variant"] }) {
  const featured = variant === "feature";
  return (
    <div className="group relative flex flex-col items-center text-center">
      {/* stub connecting the node up to the bus line */}
      <span className="absolute -top-4 sm:-top-5 h-4 sm:h-5 w-px bg-sapphire-blue/20" aria-hidden />

      {/* Each employee sits in a soft card so name + face stay legible and pop. */}
      <div
        className={`${CARD_W[variant]} flex flex-col items-center gap-3 rounded-2xl bg-surface px-3 pt-3 pb-3.5 ring-1 shadow-[0_12px_30px_-16px_rgba(7,11,41,0.45)] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_22px_44px_-16px_rgba(7,11,41,0.5)] ${
          featured ? "ring-normal-gold/35 group-hover:ring-normal-gold/60" : "ring-sapphire-blue/10 group-hover:ring-sapphire-blue/30"
        }`}
      >
        <Avatar member={member} variant={variant} />
        {member.name && (
          <div className="w-full">
            <p className={`font-display leading-tight tracking-tightish text-midnight-blue ${variant === "team" ? "text-[12.5px] sm:text-[13.5px]" : "text-[14px] sm:text-[15.5px]"}`}>
              {member.name}
            </p>
            {member.role && (
              <p className={`mt-1.5 inline-block rounded-full bg-accent2 px-2.5 py-0.5 font-medium leading-snug text-accent ${variant === "team" ? "text-[9.5px] sm:text-[10.5px]" : "text-[10.5px] sm:text-[11.5px]"}`}>
                {member.role}
              </p>
            )}
            {member.region && (
              <p className={`mt-1.5 flex items-center justify-center gap-1 font-medium leading-snug text-sapphire-blue ${variant === "team" ? "text-[9.5px] sm:text-[10.5px]" : "text-[10.5px] sm:text-[11.5px]"}`}>
                <span className="h-1 w-1 rounded-full bg-sapphire-blue/50" aria-hidden />
                {member.region}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function Level({ level, index }: { level: OrgLevel; index: number }) {
  const multi = level.members.length > 1;
  return (
    <div className="reveal flex w-full flex-col items-center">
      {/* trunk from the level above */}
      {index > 0 && (
        <div className="flex flex-col items-center" aria-hidden>
          <span className="h-7 sm:h-9 w-px bg-sapphire-blue/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        </div>
      )}

      {/* level label */}
      <div className="mt-3 mb-1 flex items-center gap-2">
        <span className="num text-[10px] text-mute/70">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="eyebrow text-[10px] sm:text-[11px]">{level.label}</span>
        {multi && (
          <span className="rounded-full bg-sapphire-blue/10 px-2 py-0.5 text-[9.5px] font-medium text-sapphire-blue">
            {level.members.length}
          </span>
        )}
      </div>

      {/* node row — the top border acts as the branch "bus" for multi-node levels */}
      <div
        className={`mt-5 inline-flex max-w-full flex-wrap items-start justify-center gap-x-5 gap-y-9 px-4 pt-5 sm:gap-x-7 ${
          multi ? "border-t border-sapphire-blue/15" : ""
        }`}
      >
        {level.members.map((member, i) => (
          <Node key={`${level.id}-${i}`} member={member} variant={level.variant} />
        ))}
      </div>
    </div>
  );
}

export default function HierarchySection() {
  return (
    <section className="relative overflow-hidden bg-bg py-10 xs:py-12 md:py-12 lg:py-13 xl:py-14">
      <Leaf variant="bl" />
      <div className="max-w-content mx-auto px-4 xs:px-6 lg:px-10">
        {/* ── Header ── */}
        <div className="reveal mx-auto mb-12 max-w-[760px] text-center sm:mb-16">
          <div className="mb-5 flex items-center justify-center gap-3 sm:mb-6">
            <span className="hairline-strong w-12 sm:w-[60px]" />
            <span className="eyebrow text-[10px] xs:text-xs">How we are organised</span>
            <span className="hairline-strong w-12 sm:w-[60px]" />
          </div>
          <h2 className="font-display text-3xl leading-[0.98] tracking-tightish text-midnight-blue xs:text-4xl sm:text-5xl lg:text-6xl">
            One group, one <em className="serif-em">chain</em> of accountability.
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[14px] font-light leading-[1.7] text-mute xs:mt-6 xs:text-[15px]">
            From the Chairman to every field officer, each role reports up a single, transparent
            line — so investors always know exactly who owns each decision.
          </p>
        </div>

        {/* ── Tree ── */}
        <div className="flex flex-col items-center">
          {orgHierarchy.map((level, i) => (
            <Level key={level.id} level={level} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
