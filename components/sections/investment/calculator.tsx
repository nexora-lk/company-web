'use client';

import { useState, useEffect, useCallback } from 'react';

const MIN = 200_000;
const FALLBACK_RATE = 320;

function fmtRs(n: number) {
  return 'Rs. ' + Math.round(n).toLocaleString('en-US');
}
function fmtUSD(n: number, rate: number | null) {
  if (!rate) return null;
  const val = n / rate;
  return '≈ $' + val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' USD';
}

function ResultRow({ label, rs, usd }: { label: string, rs: string, usd: string | null }) {
  return (
    <div className="flex items-center justify-between py-3 sm:py-4 border-b border-ink/10 last:border-0 last:pb-0">
      <span className="text-[13px] sm:text-[14px] text-mute">{label}</span>
      <div className="text-right">
        <p className="font-display text-[18px] sm:text-[20px] text-ink m-0">{rs}</p>
        {usd && <p className="text-[11px] sm:text-[12px] text-mute mt-1">{usd}</p>}
      </div>
    </div>
  );
}

export default function CalculatorSection() {
  const [plan, setPlan]       = useState('annual');   // 'annual' | 'monthly'
  const [raw, setRaw]         = useState('200,000');
  const [rate, setRate]       = useState<number | null>(null);
  const [rateLabel, setLabel] = useState('Fetching rate…');
  const [rateLive, setLive]   = useState(false);

  useEffect(() => {
    let cancel = false;
    (async () => {
      try {
        const res  = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json');
        const data = await res.json();
        if (!cancel && data?.usd?.lkr) {
          setRate(data.usd.lkr);
          setLabel(`1 USD = Rs. ${data.usd.lkr.toFixed(2)} · Live`);
          setLive(true);
        } else throw 0;
      } catch {
        if (!cancel) {
          setRate(FALLBACK_RATE);
          setLabel(`1 USD ≈ Rs. ${FALLBACK_RATE} · Fallback`);
          setLive(false);
        }
      }
    })();
    return () => { cancel = true; };
  }, []);

  const amount  = parseFloat(raw.replace(/,/g, '')) || 0;
  const isValid = amount >= MIN;
  const n       = isValid ? amount : MIN;

  const annualProfit    = n * 0.60;
  const annualMonthlyEq = annualProfit / 12;
  const annualTotal     = n + annualProfit;

  const monthlyPayout  = (n * 0.40) / 12;
  const monthlyAnnual  = n * 0.40;
  const monthlyTotal   = n + monthlyAnnual;

  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/,/g, '');
    if (val === '') {
      setRaw('');
      return;
    }
    const num = parseInt(val, 10);
    if (!isNaN(num)) {
      setRaw(num.toLocaleString('en-US'));
    }
  }, []);

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[rgba(241,236,224,0.3)]">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24 items-start justify-between">
          
          {/* Text block */}
          <div className="w-full lg:w-5/12 pt-2">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <span className="num text-[10px] sm:text-[11px]">[ 04 ]</span>
              <span className="hairline-strong w-[80px] sm:w-[120px]"></span>
              <span className="eyebrow text-[10px] sm:text-[11px]">Investment Calculator</span>
            </div>
            <h2 className="font-display text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] leading-[0.98] tracking-tightish mb-4 sm:mb-6">
              Project your <br className="hidden sm:block" />
              <em className="serif-em">returns</em>.
            </h2>
            <p className="text-mute text-[14px] sm:text-[14.5px] leading-[1.7] max-w-[420px]">
              Minimum Rs. 200,000 for Sri Lankan operations. Play with the numbers and see our dual-plan payout model in action. Returns are estimated based on historical yields.
            </p>

            {/* Live rate badge */}
            <div className="mt-8 sm:mt-10 flex items-center gap-2 bg-white border border-ink/10 rounded-full px-4 py-2 text-[11px] sm:text-[12px] text-mute w-fit shadow-sm">
              <span
                className={`w-2 h-2 rounded-full shrink-0 ${
                  rate === null
                    ? 'bg-ink/20 animate-pulse'
                    : rateLive
                    ? 'bg-emerald-600'
                    : 'bg-amber-500'
                }`}
              />
              <span className="num tracking-normal">{rateLabel}</span>
            </div>
          </div>

          {/* Calculator block */}
          <div className="w-full lg:w-7/12 max-w-[540px] shrink-0">
            
            {/* Plan Toggle */}
            <div className="flex gap-1 bg-white p-1.5 rounded-xl border border-ink/10 shadow-sm mb-6 sm:mb-8">
              {[
                { key: 'annual',  label: 'Annual',  sub: '60% / year' },
                { key: 'monthly', label: 'Monthly', sub: '40% / year' },
              ].map(({ key, label, sub }) => (
                <button
                  key={key}
                  onClick={() => setPlan(key)}
                  className={`flex-1 py-3 px-4 rounded-lg text-[13px] sm:text-[14px] font-medium transition-all flex flex-col items-center justify-center gap-0.5 ${
                    plan === key
                      ? 'bg-ink text-bg shadow-md'
                      : 'text-mute hover:text-ink hover:bg-ink/5'
                  }`}
                >
                  <span>{label}</span>
                  <span className={`text-[10px] sm:text-[11px] ${plan === key ? 'text-bg/70' : 'text-mute/70'}`}>
                    {sub}
                  </span>
                </button>
              ))}
            </div>

            {/* Amount Input */}
            <div className="bg-white rounded-2xl border border-ink/10 p-5 sm:p-7 shadow-sm mb-6 sm:mb-8">
              <p className="eyebrow text-[10px] sm:text-[11px] text-mute mb-4">Investment amount</p>
              <div className="flex items-end gap-2 border-b-2 border-ink/20 focus-within:border-ink pb-2 transition-colors">
                <span className="font-display text-[24px] sm:text-[28px] text-mute mb-1.5">Rs.</span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={raw}
                  onChange={handleInput}
                  className="flex-1 font-display text-[40px] sm:text-[48px] text-ink bg-transparent border-none outline-none
                             p-0 focus:ring-0 leading-none h-[48px] sm:h-[56px]"
                />
              </div>
              <div className="flex items-center justify-between mt-3 min-h-[20px]">
                {!isValid && amount > 0 ? (
                  <p className="text-[11px] sm:text-[12px] text-red-500 font-medium">Min. Rs. 200,000</p>
                ) : <span />}
                <p className="text-[12px] sm:text-[13px] font-medium text-mute num tracking-normal">
                  {rate
                    ? `≈ $${(n / rate).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD`
                    : '≈ $… USD'}
                </p>
              </div>
            </div>

            {/* Results */}
            <div className="bg-white rounded-2xl border border-ink/10 p-5 sm:p-7 shadow-sm">
              {plan === 'annual' ? (
                <>
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-display text-[22px] sm:text-[26px] text-ink">Annual plan</p>
                    <span className="text-[10px] sm:text-[11px] font-medium px-3 py-1.5 rounded-full bg-ink/5 text-ink">
                      Paid year-end
                    </span>
                  </div>
                  <p className="text-[13px] sm:text-[14px] text-mute mb-6">Lump-sum profit paid at the end of the year.</p>
                  <div className="border-t border-ink/10 pt-2">
                    <ResultRow label="Annual profit"           rs={fmtRs(annualProfit)}    usd={fmtUSD(annualProfit, rate)} />
                    <ResultRow label="Total return after 1 yr" rs={fmtRs(annualTotal)}     usd={fmtUSD(annualTotal, rate)} />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-display text-[22px] sm:text-[26px] text-ink">Monthly plan</p>
                    <span className="text-[10px] sm:text-[11px] font-medium px-3 py-1.5 rounded-full bg-ink/5 text-ink">
                      Paid monthly
                    </span>
                  </div>
                  <p className="text-[13px] sm:text-[14px] text-mute mb-6">Profit distributed each month throughout the year.</p>
                  <div className="border-t border-ink/10 pt-2">
                    <ResultRow label="Monthly profit"          rs={`${fmtRs(monthlyPayout)} / mo`} usd={fmtUSD(monthlyPayout, rate)} />
                    <ResultRow label="Annual total profit"     rs={`${fmtRs(monthlyAnnual)} / yr`} usd={fmtUSD(monthlyAnnual, rate)} />
                    <ResultRow label="Total return after 1 yr" rs={fmtRs(monthlyTotal)}    usd={fmtUSD(monthlyTotal, rate)} />
                  </div>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
