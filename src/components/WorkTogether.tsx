import FadeDivider from './FadeDivider'


export default function WorkTogether() {
  return (
    <section id="work-together" className="py-10">
      <div className="content-container">
      <FadeDivider />
        <h1 className="text-section-title text-gray-900 mb-8">
          Let's Chat
        </h1>
        <div className="text-gray-600 text-md mb-8">
          Looking for technical leadership, engineering guidance, or someone who documents their thinking? Let's connect!
        </div>
        <a 
          href="mailto:nelsonguerra.tech@outlook.com"
          className="inline-block px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}
