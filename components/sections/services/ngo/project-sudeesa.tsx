import Photo from '@/components/ui/Photo';
import Leaf from "@/components/ui/Leaf";

const DETAILS = [
    { k: 'Legal residence', v: 'Sri Lanka' },
    { k: 'Organization type', v: 'NGO' },
    { k: 'Funding agencies', v: 'Other' },
    { k: 'Sectors', v: 'Community Development & NGOs, Disaster Reduction & Others' },
    { k: 'Nr. of employees', v: '51–200' },
    { k: 'Last update', v: 'Dec 6, 2024' },
];

export default function ProjectSudeesaSection() {
    return (
        <section id="featured-project" className="py-10 xs:py-12 md:py-12 lg:py-13 xl:py-14 bg-bg-alt">
            <Leaf variant="bl" />
            <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
                <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                    <span className="num text-[11px] sm:text-xs md:text-sm">Featured Project</span>
                    <span className="hairline-strong w-20 sm:w-25 md:w-30"></span>
                    <span className="eyebrow text-[10px] sm:text-[11px] md:text-sm">Partner Organization</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                    <div className="lg:col-span-8 reveal">
                        <div className="mb-6 reveal">
                            <Photo
                                src="https://res.cloudinary.com/ddxvnb0nk/image/upload/q_auto/f_auto/v1780278268/ngo-ag-logo_nczhjo.png"
                                alt="Sudeesa Logo"
                                className="w-24 sm:w-28 md:w-32 rounded-lg object-contain"
                            />
                        </div>
                        <h2 className="font-display text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[0.98] tracking-tightish mb-6 text-midnight-blue reveal">
                            Small Fishers Federation of Lanka <em className="serif-em text-sapphire-blue">(Sudeesa)</em>
                        </h2>

                        <div className="space-y-4 text-[14px] sm:text-[15px] md:text-[16px] text-mute leading-[1.6] sm:leading-[1.7] md:leading-[1.8] reveal">
                            <p>
                                The Small Fishers Federation (Sudeesa) was set up in 1992 as a development network of
                                small-scale fishing and farming community organizations in Sri Lanka. Its headquarters
                                are situated in Pambala fishing village in Puttlam District.
                            </p>
                            <p>
                                Small scale fisher folk and small farmers, as one of the most socially and economically
                                vulnerable groups, are engaged in fishing in shallow waters of the sea and also inland
                                fishing and farming areas using very primitive fishing gear and farming methods. Their
                                average income is US $16 per month. According to Government statistics, 62% of members
                                of fishing and farming communities are living below the poverty line due to lack of
                                technical knowhow, lack of capital and market facilities, and lack of organizational
                                strength.
                            </p>
                            <p>
                                Sudeesa is an approved charity and non-profit non-governmental organization, incorporated
                                under the regulations for the Monitoring of Receipts and Disbursement of Funds by NGOs
                                under the NGO Secretariat of the Sri Lanka Government.
                            </p>
                            <p>
                                As an umbrella organization, Sudeesa conducts advocacy, economic, social and educational
                                programmes to strengthen and empower its member communities in self-reliance. Sudeesa is
                                a grassroots level membership organization giving special reference to destitute women,
                                widows, youngsters and children in the member communities.
                            </p>
                            <p>
                                During the last three years, the organization membership of Sudeesa has been increased
                                from 459 to 1,500 members&apos; organizations. The activities of Sudeesa are managed by a 12
                                members&apos; board of Governors and of them 6 are beneficiary women leaders from member
                                communities.
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-4 reveal">
                        <div className="sticky top-24 bg-bg rounded-[20px] p-6 sm:p-8 border border-line reveal">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-display text-[22px] sm:text-[24px] text-midnight-blue">Project Details</h3>
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-medium text-accent">
                                    <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-accent" />
                                    Active
                                </span>
                            </div>
                            <dl className="space-y-4 text-[13px] sm:text-[14px]">
                                {DETAILS.map((d) => (
                                    <div key={d.k} className="border-b border-line pb-4 last:border-0 last:pb-0">
                                        <dt className="num text-mute mb-1">{d.k}</dt>
                                        <dd className="font-medium leading-relaxed text-midnight-blue">{d.v}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
