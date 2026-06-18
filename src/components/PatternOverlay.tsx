export function PatternOverlay({ opacity = 0.06 }: { opacity?: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="adire" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
            <circle cx="30" cy="30" r="8" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
            <circle cx="0" cy="0" r="4" fill="none" stroke="#C9A84C" strokeWidth="0.3" />
            <circle cx="60" cy="0" r="4" fill="none" stroke="#C9A84C" strokeWidth="0.3" />
            <circle cx="0" cy="60" r="4" fill="none" stroke="#C9A84C" strokeWidth="0.3" />
            <circle cx="60" cy="60" r="4" fill="none" stroke="#C9A84C" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#adire)" />
      </svg>
    </div>
  )
}
