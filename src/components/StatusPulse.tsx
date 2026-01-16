import deltaLogo from '../assets/delta-logo.png';

interface StatusPulseProps {
  label?: string;
}

export default function StatusPulse({ label = "Open" }: StatusPulseProps) {
  return (
    <div className="status-pulse mt-10 text-sm ">
      <div className="status-pulse__circle"></div>
      <span className="text-light text-gray-600">{label}</span>
      <span className="text-light text-gray-600 ml-1">Delta Air Lines</span>
    </div>
  );
}
