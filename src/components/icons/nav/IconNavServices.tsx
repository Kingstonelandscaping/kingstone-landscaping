export default function IconNavServices({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 20c2-8 4-12 8-14s6-2 8 0"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path d="M6 20h12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path
        d="M10 14l1.5-4M14 12l1-3M17 13l.5-2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
