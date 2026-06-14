'use client';

import { useState, useEffect, useCallback } from 'react';
import Leaf from "@/components/ui/Leaf";

const MIN = 200_000;
const SLIDER_MAX = 10_000_000;
const FALLBACK_RATE = 320;

// Return rates by year and plan type
const RETURN_RATES = {
  annual: { 1: 60, 2: 70, 3: 80, 4: 90, 5: 100 },
  monthly: { 1: 40, 2: 41, 3: 42, 4: 43, 5: 45 },
};

const QUICK_AMOUNTS = [
  { value: 200_000, label: '200K' },
  { value: 500_000, label: '500K' },
  { value: 1_000_000, label: '1M' },
  { value: 2_500_000, label: '2.5M' },
  { value: 5_000_000, label: '5M' },
];

function fmtRs(n: number) {
  return 'Rs. ' + Math.round(n).toLocaleString('en-US');
}
function fmtUSD(n: number, rate: number | null) {
  if (!rate) return null;
  const val = n / rate;
  return '≈ $' + val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' USD';
}

function Stat({ label, rs, usd }: { label: string; rs: string; usd: string | null }) {
  return (
    <div>
      <div className="eyebrow text-white/45 text-[9px] mb-1.5">{label}</div>
      <div className="font-display text-[18px] sm:text-[20px] text-white leading-none">{rs}</div>
      {usd && <div className="num text-white/40 text-[10px] mt-1.5">{usd}</div>}
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

  const setAmount = useCallback((v: number) => {
    setRaw(v.toLocaleString('en-US'));
  }, []);

  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/,/g, '');
    if (val === '') { setRaw(''); return; }
    const num = parseInt(val, 10);
    if (!isNaN(num)) { setRaw(num.toLocaleString('en-US')); }
  }, []);

  const sliderVal = Math.min(Math.max(n, MIN), SLIDER_MAX);
  const sliderPct = ((sliderVal - MIN) / (SLIDER_MAX - MIN)) * 100;

  return (
    <section
      id="calculator"
      className="py-12 sm:py-16 md:py-12 lg:py-13 xl:py-14 bg-bg relative overflow-hidden"
    >
      <Leaf variant="tr" />
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24 items-start justify-between">

          {/* Text block */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-24 reveal">
            <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
              <span className="hairline-strong w-16 sm:w-24"></span>
              <span className="eyebrow text-[10px] sm:text-[11px] uppercase tracking-widest text-mute">Investment Calculator</span>
            </div>
            <h2 className="font-display text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] leading-[0.98] tracking-tightish mb-6 text-midnight-blue">
              Project your <br className="hidden sm:block" />
              <em className="serif-em text-sapphire-blue">returns</em>.
            </h2>
            <p className="text-mute text-[14px] sm:text-[15px] leading-[1.7] max-w-full sm:max-w-[420px]">
              Minimum Rs. 200,000 for Sri Lankan operations. Slide, tap a preset, or type your own
              amount and watch our dual-plan payout model update in real time.
            </p>

            {/* Live rate badge */}
            <div className="mt-8 sm:mt-10 flex items-center gap-3 bg-surface border border-line rounded-full px-5 py-2.5 text-[11px] sm:text-[12px] text-mute w-fit">
              <span className={`w-2 h-2 rounded-full shrink-0 ${dataSource === 'fresh' ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`} />
              <span className="num tracking-normal font-medium">{rateLabel}</span>
            </div>
          </div>

          {/* Calculator block */}
          <div className="w-full lg:w-7/12 max-w-full sm:max-w-[540px] lg:max-w-none lg:ml-auto reveal delay-100">

            {/* Plan Toggle */}
            <div className="flex gap-1.5 bg-surface p-1.5 rounded-[18px] border border-line mb-3.5 shadow-sm">
              {[
                { key: 'annual', label: 'Annual', sub: 'Paid once at maturity' },
                { key: 'monthly', label: 'Monthly', sub: 'Paid every month' },
              ].map(({ key, label, sub }) => (
                <button
                  key={key}
                  onClick={() => setPlan(key)}
                  className={`flex-1 py-3.5 px-4 rounded-[14px] text-[14px] sm:text-[15px] transition-all duration-300 flex flex-col items-center justify-center gap-1 ${plan === key
                    ? 'bg-royal-blue text-white shadow-md'
                    : 'text-mute hover:text-midnight-blue hover:bg-bg'
                    }`}
                >
                  <span className="font-medium">{label}</span>
                  <span className={`text-[10px] sm:text-[11px] ${plan === key ? 'text-light-gold' : 'opacity-60'}`}>
                    {sub}
                  </span>
                </button>
              ))}
            </div>

            {/* Year Toggle */}
            <div className="grid grid-cols-5 gap-1.5 bg-surface p-1.5 rounded-[18px] border border-line mb-6 sm:mb-8 shadow-sm">
              {[1, 2, 3, 4, 5].map((y) => (
                <button
                  key={y}
                  onClick={() => setYear(y)}
                  className={`py-3 sm:py-4 px-2 sm:px-3 rounded-[14px] transition-all duration-300 flex flex-col items-center justify-center gap-1 ${year === y
                    ? 'bg-sapphire-blue text-white shadow-md'
                    : 'text-mute hover:text-midnight-blue hover:bg-bg'
                    }`}
                >
                  <span className="font-display text-[14px] sm:text-[16px]">{y}Y</span>
                  <span className={`num text-[9px] sm:text-[10px] ${year === y ? 'text-white/80' : 'opacity-60'}`}>
                    {plan === 'annual' ? `${RETURN_RATES.annual[y as keyof typeof RETURN_RATES.annual]}%` : `${RETURN_RATES.monthly[y as keyof typeof RETURN_RATES.monthly]}%`}
                  </span>
                </button>
              ))}
            </div>

            {/* Input & Results Card */}
            <div className="bg-surface rounded-[24px] sm:rounded-[32px] border border-line p-6 sm:p-8 lg:p-10 shadow-lg space-y-7 sm:space-y-8">

              {/* Amount Input */}
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <label htmlFor="investment-amount" className="eyebrow text-[10px] sm:text-[11px] uppercase tracking-widest text-mute block">Investment amount</label>
                  <p className="num text-[11px] sm:text-[12px] text-mute">
                    {rate ? `≈ $${(n / rate).toLocaleString('en-US', { maximumFractionDigits: 0 })} USD` : '≈ $… USD'}
                  </p>
                </div>

                <div className="flex items-baseline gap-3 border-b border-line focus-within:border-sapphire-blue pb-3 sm:pb-4 transition-colors duration-500">
                  <span className="font-display text-[24px] sm:text-[32px] text-mute/50">Rs.</span>
                  <input
                    id="investment-amount"
                    type="text"
                    inputMode="numeric"
                    value={raw}
                    onChange={handleInput}
                    className="flex-1 w-full font-display text-[34px] sm:text-[46px] lg:text-[52px] text-midnight-blue bg-transparent border-none outline-none p-0 focus:ring-0 leading-none"
                  />
                </div>

                {!isValid && amount > 0 && (
                  <p className="text-[11px] sm:text-[12px] text-red-500/80 font-medium">Minimum investment is Rs. 200,000</p>
                )}

                {/* Slider */}
                <input
                  type="range"
                  min={MIN}
                  max={SLIDER_MAX}
                  step={50_000}
                  value={sliderVal}
                  onChange={(e) => setAmount(parseInt(e.target.value, 10))}
                  aria-label="Investment amount slider"
                  className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-sapphire-blue"
                  style={{ background: `linear-gradient(to right, var(--c-sapphire-blue) ${sliderPct}%, var(--c-line) ${sliderPct}%)` }}
                />
                <div className="flex justify-between num text-[10px] text-mute/60">
                  <span>Rs. 200K</span>
                  <span>Rs. 10M</span>
                </div>

                {/* Quick amounts */}
                <div className="flex flex-wrap gap-2">
                  {QUICK_AMOUNTS.map((q) => {
                    const active = n === q.value;
                    return (
                      <button
                        key={q.value}
                        onClick={() => setAmount(q.value)}
                        className={`px-3.5 py-1.5 rounded-full text-[12px] font-medium border transition-all duration-200 ${active
                          ? 'bg-sapphire-blue text-white border-sapphire-blue'
                          : 'bg-bg text-mute border-line hover:border-sapphire-blue/40 hover:text-midnight-blue'
                          }`}
                      >
                        {q.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Hero result */}
              <div className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] bg-royal-blue p-6 sm:p-8 text-white">
                <span aria-hidden className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-normal-gold/20 blur-3xl" />

                <div className="relative flex items-center justify-between gap-3 mb-4">
                  <span className="eyebrow text-light-gold text-[10px] sm:text-[11px]">
                    {plan === 'annual' ? 'Projected profit' : 'You receive each month'}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
                    {plan === 'annual' ? `${returnRate}% net yield` : `${returnRate}% annualized`}
                  </span>
                </div>

                <div className="relative font-display text-[40px] sm:text-[52px] lg:text-[58px] leading-[0.9] tracking-tightish">
                  {fmtRs(plan === 'annual' ? annualProfit : monthlyPayout)}
                </div>
                {rate && (
                  <div className="relative num text-white/55 text-[11px] sm:text-[12px] mt-2.5">
                    {fmtUSD(plan === 'annual' ? annualProfit : monthlyPayout, rate)}
                  </div>
                )}

                <div className="relative mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-5 sm:gap-6">
                  {plan === 'annual' ? (
                    <>
                      <Stat label="Capital invested" rs={fmtRs(n)} usd={fmtUSD(n, rate)} />
                      <Stat label="Total at maturity" rs={fmtRs(annualTotal)} usd={fmtUSD(annualTotal, rate)} />
                    </>
                  ) : (
                    <>
                      <Stat label="Total annual profit" rs={fmtRs(monthlyAnnual)} usd={fmtUSD(monthlyAnnual, rate)} />
                      <Stat label="Total return (yr 1)" rs={fmtRs(monthlyTotal)} usd={fmtUSD(monthlyTotal, rate)} />
                    </>
                  )}
                </div>
              </div>

              <p className="num text-[10px] text-mute/60 text-center">
                Illustrative projection based on the selected plan & term. Not a guarantee of future returns.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
