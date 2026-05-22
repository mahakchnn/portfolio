import { useState } from 'react';
import SectionLabel from './SectionLabel';

interface Achievement {
  org: string;
  title: string;
  subtitle?: string;
  description: string;
  bg: string;
  span?: number;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    org: 'HSBC Bank · 2025',
    title: 'Stakeholder Recognition Award',
    description:
      "Recognised by senior stakeholders across APAC and EMEA for exceptional cross-functional delivery and leadership on HSBC's digital transformation programme.",
    bg: '#F0F2F5',
  },
  {
    org: 'HSBC · 2024',
    title: 'Peer Unicorn Award',
    description:
      'Voted by peers for going above and beyond — recognised for collaborative spirit and consistent impact across teams.',
    bg: '#F0F2F5',
  },
  {
    org: 'HSBC · 2023',
    title: 'Runner-up, HSBC Hackathon',
    subtitle: 'Amongst 20+ teams',
    description:
      'Competed against 20+ cross-functional teams, building an AI-powered solution to improve customer service resolution times.',
    bg: '#F0F2F5',
  },
  {
    org: 'Zyla Health · 2022',
    title: 'Best Internship Project Award',
    description:
      'Awarded for delivering a data-driven email campaign strategy that drove a 12% lift in CTR and a 20% improvement in NPS response rates.',
    bg: '#FFF8D6',
  },
  {
    org: 'Mercer Mettl · 2019–2021',
    title: 'Spot Award — Three consecutive years',
    description:
      'Awarded three years in a row for outstanding client delivery, consistently exceeding KPIs across a $2M enterprise account portfolio.',
    bg: '#FFF8D6',
    span: 2,
  },
  {
    org: 'IMT Ghaziabad · 2024',
    title: 'President, Cultural Committee',
    description:
      "Led a 50+ member cultural committee, organising IMT's flagship annual fest and representing the student body in cross-campus events.",
    bg: '#FFF0E8',
  },
  {
    org: 'Manipal University Jaipur · 2019',
    title: 'President, Dance Committee',
    description:
      'Headed the university dance committee, choreographing and performing in inter-college competitions across India.',
    bg: '#FFF0E8',
  },
  {
    org: 'Manipal University Jaipur · 2019',
    title: 'Winner, Inter-College Dance',
    description:
      "Won the inter-college competition in Indian classical Kathak, and placed runner-up at the national level — a discipline I've trained in for over a decade.",
    bg: '#FFF0E8',
  },
];

export default function Achievements() {
  const [flipped, setFlipped] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section id="achievements">
      <div className="max-w-[1200px] mx-auto px-7 md:px-12 pt-[100px] pb-[120px]">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 mb-[52px]">
          <SectionLabel>Highlights</SectionLabel>
          <h2 className="font-display font-extrabold text-navy leading-[1.1] text-[clamp(1.8rem,3vw,2.6rem)]">
            Things I'm <em>proud of.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ACHIEVEMENTS.map((item, i) => (
            <div
              key={i}
              className={`flip-card ${flipped.has(i) ? 'flipped' : ''} ${
                item.span === 2 ? 'lg:col-span-2' : ''
              }`}
              style={{ minHeight: 200 }}
              onClick={() => toggle(i)}
            >
              <div className="flip-inner" style={{ minHeight: 200 }}>
                <div className="flip-front" style={{ background: item.bg }}>
                  <div>
                    <div className="font-sans text-[11px] font-semibold text-navy/40 tracking-[0.08em] uppercase mb-1.5">
                      {item.org}
                    </div>
                  </div>
                  <div className="mt-auto">
                    <h3 className="font-display font-bold text-navy text-[1.1rem] leading-[1.25]">
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <p className="font-sans text-[0.78rem] text-navy/45 mt-0.5">{item.subtitle}</p>
                    )}
                    <span className="font-sans text-[0.72rem] font-medium text-navy/40 mt-4 block">
                      View →
                    </span>
                  </div>
                </div>
                <div className="flip-back" style={{ background: item.bg }}>
                  <p className="font-sans text-[0.95rem] text-navy leading-[1.7] text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}