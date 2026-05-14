const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Highlights', href: '#achievements' },
];

export default function Navbar() {
  return (
    <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-5 border-b border-navy/10 bg-cream/80 backdrop-blur-sm">
      <ul className="flex items-center gap-2 flex-wrap">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="text-[0.82rem] font-medium text-navy border-2 border-navy rounded-full px-5 py-[9px] transition-colors hover:bg-teal hover:text-white hover:border-teal"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <span className="hidden md:inline text-[0.72rem] font-semibold text-navy/85 uppercase tracking-[0.1em]">
        Mahak Sharma &nbsp;//&nbsp; Contact
      </span>
    </nav>
  );
}