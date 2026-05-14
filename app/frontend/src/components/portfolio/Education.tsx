import SectionLabel from './SectionLabel';

interface EducationItem {
  school: string;
  degree: string;
  period: string;
  location: string;
  logoInitials: string;
  logoBg: string;
}

const EDUCATION: EducationItem[] = [
  {
    school: 'Cornell Tech · SC Johnson College of Business',
    degree: 'Master of Business Administration (MBA)',
    period: '2025 – 2026',
    location: 'New York, USA',
    logoInitials: 'C',
    logoBg: '#B31B1B',
  },
  {
    school: 'Institute of Management Technology',
    degree: 'Post Graduate Diploma in Management (PGDM)',
    period: '2021 – 2023',
    location: 'Ghaziabad, India',
    logoInitials: 'IMT',
    logoBg: '#1E3A8A',
  },
  {
    school: 'Manipal University Jaipur',
    degree: 'Bachelor of Technology in Information Technology (B.Tech)',
    period: '2015 – 2019',
    location: 'Jaipur, India',
    logoInitials: 'M',
    logoBg: '#EA580C',
  },
];

export default function Education() {
  return (
    <section id="education">
      <div className="max-w-[1200px] mx-auto px-7 md:px-12 pt-[100px] pb-[120px] grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 md:gap-[60px] items-start">
        <div className="md:sticky md:top-24 pt-2">
          <SectionLabel>Education</SectionLabel>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-2 bottom-2 w-[1.5px] bg-navy/10" />

          {EDUCATION.map((item, i) => (
            <div
              key={i}
              className={`relative pl-8 py-7 ${
                i !== EDUCATION.length - 1 ? 'border-b border-navy/10' : ''
              }`}
            >
              <div className="absolute -left-[5px] top-[34px] w-[11px] h-[11px] rounded-full bg-teal border-2 border-cream" />
              <div className="flex items-start justify-between mb-2.5 gap-3 flex-wrap">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-md flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                    style={{ background: item.logoBg }}
                  >
                    {item.logoInitials}
                  </div>
                  <h3 className="font-display font-bold text-lg md:text-xl text-navy leading-tight">
                    {item.school}
                  </h3>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="font-sans text-xs text-navy/40">{item.period}</span>
                  <div className="font-sans text-xs text-navy/40 mt-0.5">📍 {item.location}</div>
                </div>
              </div>
              <div className="font-sans text-sm font-semibold text-coral">{item.degree}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}