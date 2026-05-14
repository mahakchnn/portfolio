interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="inline-block bg-teal text-white font-sans text-[0.85rem] font-semibold tracking-[0.1em] uppercase px-7 py-[11px] rounded-full whitespace-nowrap">
      {children}
    </span>
  );
}