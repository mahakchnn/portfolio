import SectionLabel from './SectionLabel';

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="relative z-[1] max-w-[1200px] mx-auto px-7 md:px-12 pt-[100px] pb-[120px] grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 md:gap-[60px] items-start">
        <div className="pt-2">
          <SectionLabel>About</SectionLabel>
        </div>
        <div className="max-w-[680px]">
          <h2 className="font-display font-extrabold leading-[1.1] tracking-tight text-navy mb-7 text-[clamp(2rem,3.8vw,3.2rem)]">
            Building where strategy meets execution.
          </h2>
          <p className="text-[1.25rem] leading-[1.75] text-navy mb-5">
            I've spent five years sitting at the intersection of technical and commercial — building
            AI-powered channels, owning enterprise customer success, and launching go-to-market motions
            from scratch across global markets.
          </p>
          <p className="text-[1.25rem] leading-[1.75] text-navy">
            I'm drawn to problems that live at the crossroads of people, product, and process. I do my
            best work in fast-moving, ambiguous environments — the kind where the path isn't clear yet,
            and figuring it out is half the job.
          </p>
        </div>
      </div>
    </section>
  );
}