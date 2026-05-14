import Navbar from '@/components/portfolio/Navbar';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Projects from '@/components/portfolio/Projects';
import Experience from '@/components/portfolio/Experience';
import Education from '@/components/portfolio/Education';
import Achievements from '@/components/portfolio/Achievements';

const Divider = () => <div className="h-[1.5px] bg-navy/10" />;

export default function Index() {
  return (
    <div className="relative min-h-screen bg-cream text-navy">
      {/* Dot pattern background */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-dots" aria-hidden="true" />

      <div className="relative z-[1]">
        <Navbar />
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Projects />
        <Divider />
        <Experience />
        <Divider />
        <Education />
        <Divider />
        <Achievements />

        {/* Footer */}
        <footer className="border-t border-navy/10 py-10 px-6 md:px-12">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <span className="font-sans text-xs font-semibold text-navy/70 uppercase tracking-[0.1em]">
              Mahak Sharma &nbsp;//&nbsp; Portfolio
            </span>
            <span className="font-sans text-xs text-navy/50">
              © {new Date().getFullYear()} — Built with care.
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}