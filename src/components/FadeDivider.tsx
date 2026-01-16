export default function FadeDivider() {
  return (
    <div className="relative w-full h-px my-5">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </div>
  );
}
