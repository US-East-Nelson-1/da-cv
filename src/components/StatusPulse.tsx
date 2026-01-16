import deltaLogo from '../assets/delta-logo.png';

interface StatusPulseProps {
  label?: string;
}

export default function StatusPulse({ label = "Open" }: StatusPulseProps) {
  return (
    <div className="status-pulse mt-10">
      <div className="status-pulse__circle"></div>
      <span className="text-xs text-light text-gray-600">{label}</span>
      {/* <img 
        src={deltaLogo.src} 
        alt="Delta Logo" 
        className="ml-1"
        style={{ height: '0.75rem', width: 'auto' }}
      /> */}
      <span className="text-xs text-light text-gray-600 ml-1">Delta Air Lines</span>
    </div>
  );
}
