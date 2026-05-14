export default function Hero() {
  return (
    <section className="relative z-[1] max-w-[1200px] mx-auto px-7 md:px-10 pt-10 pb-20 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-[60px] min-h-[calc(100vh-100px)]">
      {/* LEFT: visual */}
      <div className="relative flex-shrink-0 w-[320px] h-[320px] md:w-[420px] md:h-[420px]">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 420 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 4-pointed star */}
          <path
            d="M405,210 L343,187 L320,125 L297,187 L235,210 L297,233 L320,295 L343,233 Z"
            fill="#FFCF44"
          />
          {/* yellow circle on top */}
          <circle cx="210" cy="210" r="152" fill="#FFCF44" />
          {/* arc decorations */}
          <path
            d="M55 148 Q18 210 55 272"
            stroke="#FFCF44"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M74 163 Q46 210 74 258"
            stroke="#FFCF44"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />
          <rect x="84" y="130" width="9" height="9" rx="1.5" fill="#FFCF44" />
          <rect x="70" y="278" width="9" height="9" rx="1.5" fill="#FFCF44" />
        </svg>

        {/* Portrait placeholder */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden bg-white border-4 border-white shadow-lg flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="w-16 h-16 rounded-full bg-navy/10 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-navy/40">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M4 20c0-4 4-6 8-6s8 2 8 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className="font-sans text-[11px] font-medium text-navy/50 tracking-wider uppercase">
              Photo Placeholder
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT: text */}
      <div className="max-w-[600px] text-center md:text-left">
        <h1 className="font-display font-black leading-[1.05] tracking-tight text-navy mb-3 text-[clamp(3rem,5vw,4.8rem)]">
          Hello! <span className="inline-block animate-wave origin-[70%_80%]">👋</span>
          <br />
          I'm <span className="inline">Mahak</span>.
        </h1>

        <p className="text-[1.25rem] leading-[1.7] text-[#111] mb-5 font-normal">
          I turn product capability into customer outcomes through strategy, delivery and messy work of making change stick.
        </p>

        <div className="flex gap-4 flex-wrap justify-center md:justify-start">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-[0.95rem] bg-coral text-white transition-all hover:bg-coral-hover hover:-translate-y-0.5 hover:shadow-lg"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="1" y="3" width="14" height="10" rx="2" stroke="white" strokeWidth="1.5" />
              <path d="M1 5l7 5 7-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Connect
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-[0.95rem] bg-transparent text-navy border-2 border-navy transition-all hover:bg-navy hover:text-cream hover:-translate-y-0.5 hover:shadow-lg"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2.5" y="1" width="9" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M9.5 1v4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M9.5 1l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M5 8h6M5 11h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}