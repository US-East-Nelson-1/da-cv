import StatusPulse from './StatusPulse'

export default function Hero() {
  return (
    <section className="pt-40">
      <div className="content-container">
        <div className="flex">
          <div className="text-left max-w-2xl">
            <h1 className="text-body md:text-body text-gray-900">
              Software Engineer turned Data Analyst,
            </h1>
            <p className="text-gray-500 text-light">
              creating intuitive solutions that solve real problems.
            </p>
            <div>
            <StatusPulse label="Lead Software Engineer · " />
            </div>
          </div>
        </div>
          <div className="mt-4 border-t border-gray-300 w-full">
            </div>
      </div>
    </section>
  );
}
