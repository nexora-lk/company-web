import Link from "next/link";
import Photo from "@/components/ui/Photo";
export default function Page() {
  return (
    <>


<section className="relative overflow-hidden">
  <div className="max-w-content mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-12 lg:pb-16">
    <div className="flex items-center gap-3 mb-8">
      <Link href="/" className="num ulink">[ Home ]</Link>
      <span className="num">/</span>
      <span className="num">Corporate Information</span>
      <span className="hairline-strong flex-1 max-w-[120px] ml-2"></span>
      <span className="eyebrow">Governance · Compliance</span>
    </div>

    <h1 className="font-display text-[56px] sm:text-[78px] lg:text-[112px] leading-[0.95] tracking-tightish max-w-[1100px]">
      Corporate <em className="serif-em">Information</em>,<br />
      and the ledger behind it.
    </h1>

    <div className="mt-10 grid grid-cols-12 gap-8 lg:gap-12 items-end">
      <p className="col-span-12 lg:col-span-7 text-mute text-[15.5px] leading-[1.7] max-w-[640px]">
        Learn about our legal structure, leadership, regulatory compliance, and the strategic
        partnerships that drive the operations of Prestige Glamour Group of Company across
        multiple sectors in Sri Lanka.
      </p>
      <div className="col-span-12 lg:col-span-5">
        <div className="hairline mb-6"></div>
        <div className="grid grid-cols-3 gap-6 text-[12.5px]">
          <div>
            <div className="num mb-2">Incorporated</div>
            <div className="font-display text-[28px] leading-none">1998</div>
            <div className="text-mute mt-2">Colombo 07</div>
          </div>
          <div>
            <div className="num mb-2">Auditors</div>
            <div className="font-display text-[28px] leading-none">KPMG</div>
            <div className="text-mute mt-2">Big-Four signed</div>
          </div>
          <div>
            <div className="num mb-2">Compliance</div>
            <div className="font-display text-[28px] leading-none">100%</div>
            <div className="text-mute mt-2">FY 2025 audit</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="pb-24 lg:pb-36">
  <div className="max-w-content mx-auto px-6 lg:px-10">
    <div className="grid grid-cols-12 gap-6 lg:gap-10 items-start">

      
      <div className="col-span-12 lg:col-span-8 space-y-8">

        <div className="info-card p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="num">[ 01 ]</span>
            <span className="hairline-strong w-[80px]"></span>
            <span className="eyebrow">Corporate Information</span>
          </div>
          <h2 className="font-display text-[36px] lg:text-[48px] leading-[1] tracking-tightish">
            Registered under <em className="serif-em">Sri Lanka</em> business law.
          </h2>

          <div className="mt-8">
            <div className="info-row">
              <span className="k">Registered name</span>
              <span className="v">Prestige Glamour Group (Pvt) Ltd</span>
            </div>
            <div className="info-row">
              <span className="k">Company number</span>
              <span className="v">PV 00112233</span>
            </div>
            <div className="info-row">
              <span className="k">VAT / Tax ID</span>
              <span className="v">114-555-789-7000</span>
            </div>
            <div className="info-row">
              <span className="k">Registered office</span>
              <span className="v">No. 42, Bauddhaloka Mawatha,<br />Colombo 07, Sri Lanka</span>
            </div>
            <div className="info-row">
              <span className="k">Auditors</span>
              <span className="v">KPMG Sri Lanka</span>
            </div>
            <div className="info-row">
              <span className="k">Primary bankers</span>
              <span className="v">Commercial Bank of Ceylon · HNB</span>
            </div>
            <div className="info-row">
              <span className="k">Regulatory bodies</span>
              <span className="v">SEC SL · CBSL Micro-finance · NGOS</span>
            </div>
          </div>
        </div>

        
        <div className="info-card p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="num">[ 02 ]</span>
            <span className="hairline-strong w-[80px]"></span>
            <span className="eyebrow">Governance &amp; Compliance</span>
          </div>
          <h2 className="font-display text-[32px] lg:text-[44px] leading-[1.02] tracking-tightish">
            How we hold ourselves <em className="serif-em">to account</em>.
          </h2>

          <ul className="check mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-4 text-[14.5px] leading-[1.6]">
            <li>Licensed under the Companies Act No. 07 of 2007</li>
            <li>Independent board of directors with quarterly review</li>
            <li>Big-Four audited financial statements, every fiscal year</li>
            <li>SEC and CBSL regulatory filings kept current</li>
            <li>Anti-Money Laundering &amp; KYC policy enforced group-wide</li>
            <li>Internal audit reports tabled monthly with the Chairman</li>
            <li>Whistle-blower channel routed to an external trustee</li>
            <li>Data-protection compliance aligned to PDPA 2022</li>
          </ul>
        </div>

        
        <div className="info-card p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="num">[ 03 ]</span>
            <span className="hairline-strong w-[80px]"></span>
            <span className="eyebrow">CSR Policy &amp; NGO Involvement</span>
          </div>
          <h2 className="font-display text-[32px] lg:text-[44px] leading-[1.02] tracking-tightish">
            The work outside <em className="serif-em">the ledger</em>.
          </h2>

          <p className="mt-6 text-mute text-[15px] leading-[1.75] max-w-[640px]">
            Our NGO programmes focus on early-childhood development and on emerging a new
            generation of entrepreneurs from agriculture in the lowest-income rural
            corners of the island. Each programme is funded directly from group profits
            and reported in the annual impact statement.
          </p>

          <ul className="check mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-4 text-[14.5px] leading-[1.6]">
            <li>Early-childhood centres in 12 rural districts</li>
            <li>Drug rehabilitation &amp; reintegration partnership with the Ministry of Health</li>
            <li>Women's empowerment co-operatives across nine provinces</li>
            <li>Agricultural micro-grants for first-generation growers</li>
            <li>Annual impact statement, independently verified</li>
            <li>Volunteer days for every group employee, quarterly</li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#" className="btn btn-primary">Download Annual Report 2025 <span className="arrow">↓</span></a>
            <a href="#" className="btn btn-ghost">View NGO Partners <span className="arrow">→</span></a>
          </div>
        </div>

      </div>

      
      <aside className="col-span-12 lg:col-span-4 lg:sticky lg:top-24 space-y-6">

        <div className="sidebar-dark p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="num text-ondark/70!">[ Contact ]</span>
            <span className="hairline-strong w-[60px] bg-[rgba(241,236,224,0.32)]!"></span>
          </div>
          <h3 className="font-display text-[32px] leading-[1.02] tracking-tightish">
            Connect with our <em className="serif-em">Investment</em> Team Today
          </h3>
          <p className="mt-4 text-[14px] leading-[1.7] opacity-80">
            Speak to a director directly. We respond to investor enquiries within one
            working day, in person from the Colombo head office.
          </p>

          <div className="mt-8 space-y-4 text-[14px]">
            <div className="flex items-start gap-3">
              <span className="grid place-items-center w-7 h-7 rounded-full bg-ondark/10 text-ondark text-xs">✆</span>
              <div>
                <div className="opacity-60 text-[11px] uppercase tracking-[0.18em]">Phone</div>
                <div>+94 11 250 8800</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="grid place-items-center w-7 h-7 rounded-full bg-ondark/10 text-ondark text-xs">@</span>
              <div>
                <div className="opacity-60 text-[11px] uppercase tracking-[0.18em]">Email</div>
                <div>invest@prestigeglamour.lk</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="grid place-items-center w-7 h-7 rounded-full bg-ondark/10 text-ondark text-xs">⌖</span>
              <div>
                <div className="opacity-60 text-[11px] uppercase tracking-[0.18em]">Address</div>
                <div>No. 42, Bauddhaloka Mawatha,<br />Colombo 07, Sri Lanka</div>
              </div>
            </div>
          </div>

          <Link href="/#contact" className="btn bg-bg! text-ink! hover:bg-accent! hover:text-ondark! mt-8 w-full justify-center">
            Schedule a meeting <span className="arrow">→</span>
          </Link>
        </div>

        <div className="info-card p-6">
          <div className="num mb-3">Quick facts</div>
          <div className="font-display text-[22px] leading-tight">Six businesses.<br /><em className="serif-em">One</em> island.</div>
          <div className="hairline my-4"></div>
          <div className="grid grid-cols-2 gap-4 text-[12.5px]">
            <div>
              <div className="num">Founded</div>
              <div className="font-display text-[18px]">1998</div>
            </div>
            <div>
              <div className="num">Branches</div>
              <div className="font-display text-[18px]">29</div>
            </div>
            <div>
              <div className="num">Headcount</div>
              <div className="font-display text-[18px]">8,400</div>
            </div>
            <div>
              <div className="num">Provinces</div>
              <div className="font-display text-[18px]">9</div>
            </div>
          </div>
        </div>

      </aside>
    </div>
  </div>
</section>


<section className="pb-24 lg:pb-36">
  <div className="max-w-content mx-auto px-6 lg:px-10">
    <div className="relative rounded-[24px] overflow-hidden min-h-[320px] flex items-end">
      <Photo src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1800&q=80&auto=format&fit=crop" alt="" priority className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-linear-to-tr from-ink/85 via-ink/55 to-ink/30"></div>

      <div className="relative w-full p-8 lg:p-14 text-ondark">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-8">
            <span className="num text-ondark/80!">[ Disclosure ]</span>
            <h3 className="font-display text-[40px] lg:text-[56px] leading-[0.98] tracking-tightish mt-4">
              Full disclosure, on <em className="serif-em">request</em>.
            </h3>
            <p className="mt-5 max-w-[520px] text-[14.5px] opacity-85">
              Audited statements, board minutes and regulatory filings are available to
              shareholders and accredited investors under NDA.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-3 lg:items-end">
            <Link href="/#contact" className="btn bg-bg! text-ink! hover:bg-accent! hover:text-ondark!">Request documents <span className="arrow">→</span></Link>
            <Link href="/about" className="text-ondark text-sm ulink">Or read about our leadership</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  );
}
