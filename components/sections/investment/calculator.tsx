'use client';

import { useState, useEffect, useCallback } from 'react';
import Leaf from "@/components/ui/Leaf";

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
    <div className="flex items-center justify-between py-4 sm:py-5 border-b border-line last:border-0 last:pb-0">
      <span className="text-[13.5px] sm:text-[14.5px] text-mute">{label}</span>
      <div className="text-right">
        <p className="font-display text-[18px] sm:text-[22px] text-ink m-0 leading-none">{rs}</p>
        {usd && <p className="num text-[10px] sm:text-[11px] text-mute/70 mt-1.5">{usd}</p>}
      </div>
    </div>
  );
}

export default function CalculatorSection() {
  const [plan, setPlan] = useState('annual');
  const [year, setYear] = useState(1);
  const [raw, setRaw] = useState('200,000');
  const [rate, setRate] = useState<number | null>(null);
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

  const amount = parseFloat(raw.replace(/,/g, '')) || 0;
  const isValid = amount >= MIN;
  const n = isValid ? amount : MIN;

  // Get return rate based on plan and year
  const returnRate = plan === 'annual'
    ? RETURN_RATES.annual[year as keyof typeof RETURN_RATES.annual]
    : RETURN_RATES.monthly[year as keyof typeof RETURN_RATES.monthly];

  const returnPercent = returnRate / 100;

  const annualProfit = n * returnPercent;
  const annualTotal = n + annualProfit;
  const monthlyPayout = (n * returnPercent) / 12;
  const monthlyAnnual = n * returnPercent;
  const monthlyTotal = n + monthlyAnnual;

  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/,/g, '');
    if (val === '') { setRaw(''); return; }
    const num = parseInt(val, 10);
    if (!isNaN(num)) { setRaw(num.toLocaleString('en-US')); }
  }, []);

  return (
    <section id="calculator" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-surface relative overflow-hidden">
      <Leaf variant="tr" />
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24 items-start justify-between">

          {/* Text block */}
          <div className="w-full lg:w-5/12 reveal">
            <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
              <span className="hairline-strong w-16 sm:w-24"></span>
              <span className="eyebrow text-[10px] sm:text-[11px] uppercase tracking-widest text-mute">Investment Calculator</span>
            </div>
            <h2 className="font-display text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] leading-[0.98] tracking-tightish mb-6">
              Project your <br className="hidden sm:block" />
              <em className="serif-em text-accent">returns</em>.
            </h2>
            <p className="text-mute text-[14px] sm:text-[15px] leading-[1.7] max-w-full sm:max-w-[420px]">
              Minimum Rs. 200,000 for Sri Lankan operations. Play with the numbers and see our dual-plan payout model in action.
            </p>

            {/* Live rate badge */}
            <div className="mt-8 sm:mt-10 flex items-center gap-3 bg-bg border border-line rounded-full px-5 py-2.5 text-[11px] sm:text-[12px] text-mute w-fit">
              <span className={`w-2 h-2 rounded-full shrink-0 ${dataSource === 'fresh' ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`} />
              <span className="num tracking-normal font-medium">{rateLabel}</span>
            </div>
          </div>

          {/* Calculator block */}
          <div className="w-full lg:w-7/12 max-w-full sm:max-w-[540px] lg:max-w-none lg:ml-auto reveal delay-100">

            {/* Plan Toggle */}
            <div className="flex gap-1.5 bg-bg p-1.5 rounded-[18px] border border-line mb-6 sm:mb-8 shadow-sm">
              {[
                { key: 'annual', label: 'Annual', sub: '60% / year' },
                { key: 'monthly', label: 'Monthly', sub: '40% / year' },
              ].map(({ key, label, sub }) => (
                <button
                  key={key}
                  onClick={() => setPlan(key)}
                  className={`flex-1 py-4 px-4 rounded-[14px] text-[14px] sm:text-[15px] transition-all duration-300 flex flex-col items-center justify-center gap-1 ${plan === key
                    ? 'bg-ink text-bg shadow-md'
                    : 'text-mute hover:text-ink hover:bg-surface'
                    }`}
                >
                  <span className="font-medium">{label}</span>
                  <span className={`text-[10px] sm:text-[11px] ${plan === key ? 'text-accent' : 'opacity-60'}`}>
                    {sub}
                  </span>
                </button>
              ))}
            </div>

            {/* Year Toggle */}
            <div className="grid grid-cols-5 gap-1.5 bg-bg p-1.5 rounded-[18px] border border-line mb-6 sm:mb-8 shadow-sm">
              {[1, 2, 3, 4, 5].map((y) => (
                <button
                  key={y}
                  onClick={() => setYear(y)}
                  className={`py-3 sm:py-4 px-2 sm:px-3 rounded-[14px] transition-all duration-300 flex flex-col items-center justify-center gap-1 ${year === y
                    ? 'bg-accent text-bg shadow-md'
                    : 'text-mute hover:text-ink hover:bg-surface'
                    }`}
                >
                  <span className="font-display text-[14px] sm:text-[16px]">{y}Y</span>
                  <span className={`num text-[9px] sm:text-[10px] ${year === y ? 'text-bg/80' : 'opacity-60'}`}>
                    {plan === 'annual' ? `${RETURN_RATES.annual[y as keyof typeof RETURN_RATES.annual]}%` : `${RETURN_RATES.monthly[y as keyof typeof RETURN_RATES.monthly]}%`}
                  </span>
                </button>
              ))}
            </div>

            {/* Input & Results Card */}
            <div className="bg-bg rounded-[24px] sm:rounded-[32px] border border-line p-6 sm:p-8 lg:p-10 shadow-lg space-y-8 sm:space-y-10">
              
              {/* Amount Input */}
              <div className="space-y-5">
                <label htmlFor="investment-amount" className="eyebrow text-[10px] sm:text-[11px] uppercase tracking-widest text-mute block">Investment amount</label>
                <div className="flex items-baseline gap-3 border-b border-line focus-within:border-accent pb-3 sm:pb-4 transition-colors duration-500">
                  <span className="font-display text-[24px] sm:text-[32px] text-mute/50">Rs.</span>
                  <input
                    id="investment-amount"
                    type="text"
                    inputMode="numeric"
                    value={raw}
                    onChange={handleInput}
                    className="flex-1 font-display text-[36px] sm:text-[48px] lg:text-[56px] text-ink bg-transparent border-none outline-none p-0 focus:ring-0 leading-none"
                  />
                </div>
                <div className="flex items-center justify-between">
                  {!isValid && amount > 0 ? (
                    <p className="text-[11px] sm:text-[12px] text-red-500/80 font-medium">Min. Rs. 200,000</p>
                  ) : <span />}
                  <p className="num text-[11px] sm:text-[12px] text-mute">
                    {rate ? `≈ $${(n / rate).toLocaleString('en-US', { maximumFractionDigits: 0 })} USD` : '≈ $… USD'}
                  </p>
                </div>
              </div>

              {/* Payout Details */}
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <h3 className="font-display text-[22px] sm:text-[26px] text-ink">
                    {plan === 'annual' ? 'Annual Payout' : 'Monthly Distribution'}
                  </h3>
                  <span className="px-3.5 py-1.5 rounded-full bg-accent/10 text-accent text-[10px] sm:text-[11px] font-bold uppercase tracking-widest whitespace-nowrap">
                    {plan === 'annual' ? `${returnRate}% Net Yield` : `${returnRate}% Annualized`}
                  </span>
                </div>
                
                <div className="bg-surface rounded-[20px] p-6 sm:p-8 space-y-1 sm:space-y-2 border border-line/50">
                  {plan === 'annual' ? (
                    <>
                      <ResultRow label="Projected profit" rs={fmtRs(annualProfit)} usd={fmtUSD(annualProfit, rate)} />
                      <ResultRow label="Total at maturity" rs={fmtRs(annualTotal)} usd={fmtUSD(annualTotal, rate)} />
                    </>
                  ) : (
                    <>
                      <ResultRow label="Monthly distribution" rs={fmtRs(monthlyPayout)} usd={fmtUSD(monthlyPayout, rate)} />
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
