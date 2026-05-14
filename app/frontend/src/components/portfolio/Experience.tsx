import SectionLabel from './SectionLabel';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  logoInitials: string;
  logoBg: string;
}

const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Kennar Health',
    role: 'Strategy Intern',
    period: 'Feb 2026 – May 2026',
    location: 'New York, USA',
    description: 'First business hire — building GTM from zero at an early-stage AI healthtech.',
    logoInitials: 'KH',
    logoBg: '#3BBFB2',
  },
  {
    company: 'HSBC',
    role: 'Product Delivery Manager',
    period: '2023 – 2025',
    location: 'Bangalore, India',
    description:
      "Led AI-powered channel transformation across APAC & EMEA at one of the world's largest banks.",
    logoInitials: 'H',
    logoBg: '#DB0011',
  },
  {
    company: 'Zyla Health',
    role: 'Marketing Intern',
    period: '2022',
    location: 'Gurgaon, India',
    description: 'Drove user engagement through data-led campaigns at a digital chronic care platform.',
    logoInitials: 'Z',
    logoBg: '#7C3AED',
  },
  {
    company: 'Mercer Mettl',
    role: 'Delivery Lead',
    period: '2019 – 2021',
    location: 'Gurgaon, India',
    description: 'Owned a $2M enterprise portfolio, delivering SaaS implementations across APAC.',
    logoInitials: 'M',
    logoBg: '#F97316',
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="max-w-[1200px] mx-auto px-7 md:px-12 pt-[100px] pb-[120px] grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 md:gap-[60px] items-start">
        <div className="md:sticky md:top-24 pt-2">
          <SectionLabel>Experience</SectionLabel>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-2 bottom-2 w-[1.5px] bg-navy/10" />

          {EXPERIENCE.map((item, i) => (
            <div
              key={i}
              className={`relative pl-8 py-7 ${
                i !== EXPERIENCE.length - 1 ? 'border-b border-navy/10' : ''
              }`}
            >
              <div className="absolute -left-[5px] top-[34px] w-[11px] h-[11px] rounded-full bg-teal border-2 border-cream" />
              <div className="flex items-start justify-between mb-2.5 gap-3 flex-wrap">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-md flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ background: item.logoBg }}
                  >
                    {item.logoInitials}
                  </div>
                  <h3 className="font-display font-bold text-lg md:text-xl text-navy">
                    {item.company}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="font-sans text-xs text-navy/40">{item.period}</span>
                  <div className="font-sans text-xs text-navy/40 mt-0.5">📍 {item.location}</div>
                </div>
              </div>
              <div className="font-sans text-sm font-semibold text-coral mb-2">{item.role}</div>
              <p className="font-sans text-[0.95rem] text-navy/65 leading-[1.7]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}