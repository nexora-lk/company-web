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

const SIZE: Record<OrgLevel["variant"], string> = {
  feature: "w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32",
  named: "w-16 h-16 sm:w-20 sm:h-20 lg:w-[84px] lg:h-[84px]",
  team: "w-12 h-12 sm:w-14 sm:h-14",
};

function Avatar({ member, variant }: { member: OrgMember; variant: OrgLevel["variant"] }) {
  const ring =
    variant === "feature"
      ? "ring-2 ring-normal-gold/45"
      : "ring-2 ring-bg";
  const base = `${SIZE[variant]} ${ring} relative shrink-0 rounded-full overflow-hidden shadow-[0_10px_28px_-12px_rgba(7,11,41,0.45)] transition-transform duration-300 group-hover:-translate-y-1`;

  if (member.img) {
    return (
      <div className={base}>
        <Photo
          src={member.img}
          alt={member.name ?? "Team member"}
          fill
          sizes="128px"
          className="object-cover"
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
        <span className="font-display font-medium text-midnight-blue/85 text-[13px] sm:text-[15px] lg:text-base tracking-tightish">
          {initials(member.name)}
        </span>
      ) : (
        <span className="h-2 w-2 rounded-full bg-midnight-blue/25" />
      )}
    </div>
  );
}

function Node({ member, variant }: { member: OrgMember; variant: OrgLevel["variant"] }) {
  return (
    <div className="group relative flex flex-col items-center text-center">
      {/* stub connecting the node up to the bus line */}
      <span className="absolute -top-4 sm:-top-5 h-4 sm:h-5 w-px bg-sapphire-blue/20" aria-hidden />
      <Avatar member={member} variant={variant} />
      {variant !== "team" && member.name && (
        <div className="mt-3 max-w-[140px] sm:max-w-[160px]">
          <p className="font-display text-[13.5px] sm:text-[15px] leading-tight tracking-tightish text-midnight-blue">
            {member.name}
          </p>
          {member.role && (
            <p className="mt-1 text-[11px] sm:text-[12px] leading-snug text-accent">
              {member.role}
            </p>
          )}
        </div>
      )}
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
      </div>

      {/* node row — the top border acts as the branch "bus" for multi-node levels */}
      <div
        className={`mt-4 inline-flex max-w-full flex-wrap items-start justify-center gap-x-5 gap-y-8 px-4 pt-1 sm:gap-x-8 ${
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
