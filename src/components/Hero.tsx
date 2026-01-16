import StatusPulse from './StatusPulse'
import SkillsCarousel from './SkillsCarousel'
import FadeDivider from './FadeDivider'

export default function Hero() {
  return (
    <section className="pt-40">
      <div className="content-container">
        <div className="flex">
          <div className="text-left max-w-2xl">
            <p className="text-sm pb-1 text-light text-gray-500">Nelson Guerra</p>
            <h1 className="text-xl text-body md:text-body text-gray-900">
              Software Engineer & Data Analyst,
            </h1>
            <p className="text-lg text-gray-500 text-light">
              creating intuitive solutions that solve real problems.
            </p>
            <div className="pt-20">
            <StatusPulse label="Lead Software Engineer at " />
            </div>
          </div>
        </div>
            <FadeDivider />
            <SkillsCarousel />
      </div>
    </section>
  );
}
