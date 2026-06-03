'use client';

import { useState, useEffect, useCallback } from 'react';

const MIN = 200_000;
const FALLBACK_RATE = 320;

// Return rates by year and plan type
const RETURN_RATES = {
  annual: { 1: 60, 2: 70, 3: 80, 4: 90, 5: 100 },
  monthly: { 1: 40, 2: 41, 3: 42, 4: 43, 5: 45 },
};

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
    <div className="flex items-center justify-between py-4 border-b border-ink/10 last:border-0 last:pb-0">
      <span className="text-[13px] xs:text-[14px] text-mute font-light">{label}</span>
      <div className="text-right">
        <p className="font-display text-[18px] xs:text-[20px] text-ink m-0">{rs}</p>
        {usd && <p className="text-[11px] xs:text-[12px] text-mute/60 mt-1 font-light">{usd}</p>}
      </div>
    </div>
  );
}

export default function CalculatorSection() {
  const [plan, setPlan]       = useState('annual');
  const [year, setYear]       = useState(1);
  const [raw, setRaw]         = useState('200,000');
  const [rate, setRate]       = useState<number | null>(null);
  const [rateLabel, setLabel] = useState('Fetching rate…');
  const [dataSource, setDataSource] = useState<'loading' | 'fresh' | 'stale' | 'offline'>('loading');

  useEffect(() => {
    let cancel = false;
    (async () => {
      const today = new Date();
      const todayVersion = `${today.getFullYear()}.${today.getMonth() + 1}.${today.getDate()}`;
      const sources = [
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${todayVersion}/v1/currencies/usd.json`,
        (() => {
          const yesterday = new Date(today);
          yesterday.setDate(yesterday.getDate() - 1);
          return `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${yesterday.getFullYear()}.${yesterday.getMonth() + 1}.${yesterday.getDate()}/v1/currencies/usd.json`;
        })(),
        'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json',
      ];

      for (const url of sources) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 5000);
          const res = await fetch(url, { signal: controller.signal });
          clearTimeout(timeoutId);
          const data = await res.json();
          if (!cancel && data?.usd?.lkr) {
            setRate(data.usd.lkr);
            setLabel(`1 USD = Rs. ${data.usd.lkr.toFixed(2)}`);
            setDataSource('fresh');
            return;
          }
        } catch { /* next source */ }
      }
      if (!cancel) {
        setRate(FALLBACK_RATE);
        setLabel(`1 USD ≈ Rs. ${FALLBACK_RATE}`);
        setDataSource('offline');
      }
    })();
    return () => { cancel = true; };
  }, []);

  const amount  = parseFloat(raw.replace(/,/g, '')) || 0;
  const isValid = amount >= MIN;
  const n       = isValid ? amount : MIN;

  // Get return rate based on plan and year
  const returnRate = plan === 'annual'
    ? RETURN_RATES.annual[year as keyof typeof RETURN_RATES.annual]
    : RETURN_RATES.monthly[year as keyof typeof RETURN_RATES.monthly];

  const returnPercent = returnRate / 100;

  const annualProfit    = n * returnPercent;
  const annualTotal     = n + annualProfit;
  const monthlyPayout  = (n * returnPercent) / 12;
  const monthlyAnnual  = n * returnPercent;
  const monthlyTotal   = n + monthlyAnnual;

  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/,/g, '');
    if (val === '') { setRaw(''); return; }
    const num = parseInt(val, 10);
    if (!isNaN(num)) { setRaw(num.toLocaleString('en-US')); }
  }, []);

  return (
    <section className="py-16 xs:py-20 sm:py-24 lg:py-32 xl:py-40 bg-[rgba(241,236,224,0.3)] overflow-hidden">
      <div className="max-w-content mx-auto px-4 xs:px-6 lg:px-10">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24 items-start justify-between">
          
          {/* Text block */}
          <div className="w-full lg:w-5/12 reveal">
            <div className="flex items-center gap-2 xs:gap-3 mb-5 sm:mb-6">
              <span className="num text-[10px] xs:text-[11px]">[ 04 ]</span>
              <span className="hairline-strong w-16 xs:w-20 sm:w-24"></span>
              <span className="eyebrow text-[10px] xs:text-xs">Investment Calculator</span>
            </div>
            <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl leading-[0.98] tracking-tightish mb-6 text-ink">
              Project your <br className="hidden sm:block" />
              <em className="serif-em text-accent">returns</em>.
            </h2>
            <p className="text-mute text-[14px] xs:text-[15.5px] leading-relaxed font-light max-w-full sm:max-w-[420px]">
              Minimum Rs. 200,000 for Sri Lankan operations. Play with the numbers and see our dual-plan payout model in action.
            </p>

            {/* Live rate badge */}
            <div className="mt-8 xs:mt-10 flex items-center gap-3 bg-white border border-ink/5 rounded-full px-5 py-2.5 text-[11px] xs:text-[12px] text-mute w-fit shadow-sm">
              <span className={`w-2 h-2 rounded-full shrink-0 ${dataSource === 'fresh' ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`} />
              <span className="num tracking-normal font-medium">{rateLabel}</span>
            </div>
          </div>

          {/* Calculator block */}
          <div className="w-full lg:w-7/12 max-w-full sm:max-w-[540px] reveal">
            
            {/* Plan Toggle */}
            <div className="flex gap-1.5 bg-white/50 p-1.5 rounded-2xl border border-ink/10 shadow-sm mb-6 xs:mb-8 backdrop-blur-sm">
              {[
                { key: 'annual',  label: 'Annual',  sub: '60% / year' },
                { key: 'monthly', label: 'Monthly', sub: '40% / year' },
              ].map(({ key, label, sub }) => (
                <button
                  key={key}
                  onClick={() => setPlan(key)}
                  className={`flex-1 py-4 px-4 rounded-xl text-[14px] font-semibold transition-all duration-300 flex flex-col items-center justify-center gap-0.5 ${
                    plan === key
                      ? 'bg-ink text-bg shadow-xl scale-[1.02]'
                      : 'text-mute hover:text-ink hover:bg-white'
                  }`}
                >
                  <span>{label}</span>
                  <span className={`text-[10px] xs:text-[11px] ${plan === key ? 'text-accent' : 'opacity-60'}`}>
                    {sub}
                  </span>
                </button>
              ))}
            </div>

            {/* Year Toggle */}
            <div className="grid grid-cols-5 gap-1.5 bg-white/50 p-1.5 rounded-2xl border border-ink/10 shadow-sm mb-6 xs:mb-8 backdrop-blur-sm">
              {[1, 2, 3, 4, 5].map((y) => (
                <button
                  key={y}
                  onClick={() => setYear(y)}
                  className={`py-3 px-2 xs:px-3 rounded-xl text-[13px] xs:text-[14px] font-semibold transition-all duration-300 flex flex-col items-center justify-center gap-0.5 ${
                    year === y
                      ? 'bg-accent text-white shadow-xl scale-[1.02]'
                      : 'text-mute hover:text-ink hover:bg-white'
                  }`}
                >
                  <span className="font-display text-[13px] xs:text-[14px]">{y}Y</span>
                  <span className={`text-[9px] xs:text-[10px] ${year === y ? 'text-white/80' : 'opacity-60'}`}>
                    {plan === 'annual' ? `${RETURN_RATES.annual[y as keyof typeof RETURN_RATES.annual]}%` : `${RETURN_RATES.monthly[y as keyof typeof RETURN_RATES.monthly]}%`}
                  </span>
                </button>
              ))}
            </div>

            {/* Input & Results Card */}
            <div className="bg-white rounded-3xl border border-ink/5 p-6 xs:p-8 sm:p-10 shadow-2xl space-y-8 xs:space-y-10">
              {/* Amount Input */}
              <div className="space-y-4">
                <p className="eyebrow text-[10px] xs:text-[11px] text-mute font-bold">Investment amount</p>
                <div className="flex items-baseline gap-3 border-b-2 border-ink/10 focus-within:border-accent pb-3 transition-colors duration-500">
                  <span className="font-display text-2xl xs:text-3xl text-mute/40">Rs.</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={raw}
                    onChange={handleInput}
                    className="flex-1 font-display text-4xl xs:text-5xl sm:text-6xl text-ink bg-transparent border-none outline-none p-0 focus:ring-0 leading-none"
                  />
                </div>
                <div className="flex items-center justify-between">
                  {!isValid && amount > 0 ? (
                    <p className="text-[11px] xs:text-[12px] text-red-500 font-medium">Min. Rs. 200,000</p>
                  ) : <span />}
                  <p className="text-[12px] xs:text-[13px] font-medium text-mute num tracking-normal">
                    {rate ? `≈ $${(n / rate).toLocaleString('en-US', { maximumFractionDigits: 0 })} USD` : '≈ $… USD'}
                  </p>
                </div>
              </div>

              {/* Payout Details */}
              <div className="space-y-6">
                <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-4">
                   <h3 className="font-display text-2xl xs:text-3xl text-ink">
                    {plan === 'annual' ? 'Annual Payout' : 'Monthly Distribution'}
                   </h3>
                   <span className="px-4 py-1.5 rounded-full bg-accent/10 text-accent text-[10px] xs:text-[11px] font-bold uppercase tracking-widest whitespace-nowrap">
                    {plan === 'annual' ? `${returnRate}% Net Yield` : `${returnRate}% Annualized`}
                   </span>
                </div>
                <div className="bg-bg/40 rounded-2xl p-6 xs:p-8 space-y-2">
                  {plan === 'annual' ? (
                    <>
                      <ResultRow label="Projected profit" rs={fmtRs(annualProfit)} usd={fmtUSD(annualProfit, rate)} />
                      <ResultRow label="Total at maturity" rs={fmtRs(annualTotal)} usd={fmtUSD(annualTotal, rate)} />
                    </>
                  ) : (
                    <>
                      <ResultRow label="Monthly distribution" rs={`${fmtRs(monthlyPayout)}`} usd={fmtUSD(monthlyPayout, rate)} />
                      <ResultRow label="Total annual profit" rs={fmtRs(monthlyAnnual)} usd={fmtUSD(monthlyAnnual, rate)} />
                      <ResultRow label="Total return" rs={fmtRs(monthlyTotal)} usd={fmtUSD(monthlyTotal, rate)} />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
