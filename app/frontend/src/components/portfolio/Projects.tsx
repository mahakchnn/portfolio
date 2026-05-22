import { useState, useRef, useEffect } from 'react';
import SectionLabel from './SectionLabel';

interface Project {
  title: string;
  description: string;
  tags: { label: string; variant: 'coral' | 'muted' }[];
  isPlaceholder: boolean;
  logoInitials?: string;
  href?: string;
}

const PROJECTS: Project[] = [
  {
    title: 'IHG Fraud Prevention',
    description:
      "Redesigning fraud detection for IHG's loyalty program — balancing security, guest trust, and operational efficiency.",
    tags: [
      { label: 'Strategy', variant: 'coral' },
      { label: 'Product', variant: 'muted' },
    ],
    isPlaceholder: false,
    logoInitials: 'IHG',
    href: '/case-studies/ihg.html',
  },
  {
    title: 'Credit Lite',
    description:
      'A lightweight credit product designed for thin-file customers — turning alternative data into fair access to credit.',
    tags: [
      { label: 'Product', variant: 'coral' },
      { label: 'Fintech', variant: 'muted' },
    ],
    isPlaceholder: false,
    logoInitials: 'CL',
    href: '/case-studies/credit-lite.html',
  },
  {
    title: 'Project Title',
    description: 'A short description of the project will go here once ready to publish.',
    tags: [{ label: 'Placeholder', variant: 'muted' }],
    isPlaceholder: true,
  },
  {
    title: 'Project Title',
    description: 'A short description of the project will go here once ready to publish.',
    tags: [{ label: 'Placeholder', variant: 'muted' }],
    isPlaceholder: true,
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(3);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCardsVisible(1);
      else if (window.innerWidth < 1024) setCardsVisible(2);
      else setCardsVisible(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxIndex = Math.max(0, PROJECTS.length - cardsVisible);

  const slide = (dir: number) => {
    setIndex((prev) => Math.max(0, Math.min(prev + dir, maxIndex)));
  };

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [maxIndex, index]);

  const cardWidthPct = 100 / cardsVisible;

  return (
    <section id="projects" className="relative overflow-hidden">
      <div className="relative z-[1] max-w-[1200px] mx-auto px-7 md:px-12 pt-[100px] pb-[120px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-[52px]">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <SectionLabel>Projects</SectionLabel>
            <h2 className="font-display font-extrabold leading-[1.1] text-navy text-[clamp(2rem,3.5vw,3rem)]">
              Work I'm <em>proud of.</em>
            </h2>
          </div>
          <div className="flex gap-2.5">
            <button
              onClick={() => slide(-1)}
              aria-label="Previous"
              disabled={index === 0}
              className="w-11 h-11 rounded-full border-2 border-navy bg-transparent flex items-center justify-center transition-colors hover:bg-navy hover:text-cream disabled:opacity-30 disabled:cursor-not-allowed group"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="stroke-current">
                <path d="M10 3L5 8l5 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => slide(1)}
              aria-label="Next"
              disabled={index >= maxIndex}
              className="w-11 h-11 rounded-full border-2 border-navy bg-transparent flex items-center justify-center transition-colors hover:bg-navy hover:text-cream disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="stroke-current">
                <path d="M6 3l5 5-5 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-7 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ transform: `translateX(calc(-${index * cardWidthPct}% - ${index * 28}px))` }}
          >
            {PROJECTS.map((proj, i) => {
              const CardTag = proj.href ? 'a' : 'div';
              const cardProps = proj.href
                ? { href: proj.href, target: '_blank', rel: 'noopener noreferrer' }
                : {};
              return (
              <CardTag
                key={i}
                {...cardProps}
                className="proj-card flex-shrink-0 bg-white rounded-2xl overflow-hidden border border-navy/10 cursor-pointer block no-underline"
                style={{ flex: `0 0 calc((100% - ${(cardsVisible - 1) * 28}px) / ${cardsVisible})` }}
              >
                <div
                  className={`h-[180px] flex items-center justify-center relative overflow-hidden ${
                    proj.isPlaceholder ? 'bg-cream' : 'bg-white'
                  }`}
                >
                  {proj.isPlaceholder ? (
                    <>
                      <div className="absolute -top-8 -right-8 w-[120px] h-[120px] rounded-full bg-teal opacity-[0.18]" />
                      <div className="absolute -bottom-5 -left-5 w-[80px] h-[80px] rounded-full bg-brandYellow opacity-25" />
                      <span className="font-display italic text-sm text-navy/30">Coming Soon</span>
                    </>
                  ) : (
                    <div className="flex items-center justify-center w-full h-full p-7">
                      <div className="w-24 h-24 rounded-full bg-navy text-white font-display font-extrabold text-2xl flex items-center justify-center">
                        {proj.logoInitials}
                      </div>
                    </div>
                  )}
                </div>
                <div className="proj-card-body px-6 py-5 border-t border-navy/10 transition-colors">
                  <div className="flex items-center gap-2 mb-2.5 flex-wrap">
                    {proj.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`font-sans text-[11px] font-semibold px-2.5 py-[3px] rounded-full tracking-wider ${
                          tag.variant === 'coral'
                            ? 'bg-coral text-white'
                            : proj.isPlaceholder
                            ? 'bg-navy/5 text-navy/35'
                            : 'bg-navy/10 text-navy'
                        }`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                  <h3
                    className={`font-serifDisplay text-lg leading-tight mb-2 ${
                      proj.isPlaceholder ? 'text-navy' : 'text-navy'
                    }`}
                  >
                    {proj.title}
                  </h3>
                  <p
                    className={`font-sans text-sm leading-relaxed mb-4 ${
                      proj.isPlaceholder ? 'text-navy/35' : 'text-navy/55'
                    }`}
                  >
                    {proj.description}
                  </p>
                  <span
                    className={`font-sans text-sm font-semibold flex items-center gap-1.5 ${
                      proj.isPlaceholder
                        ? 'text-navy/30'
                        : 'text-navy underline underline-offset-[3px]'
                    }`}
                  >
                    {proj.isPlaceholder ? 'Coming soon →' : 'View  →'}
                  </span>
                </div>
              </CardTag>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}