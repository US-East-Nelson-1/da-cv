export default function Navbar() {
  return (
    <nav className="content-container py-6">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="text-gray-900 text-section-title text-sm">
            NG | Data Analyst
          </div>
          <div className="flex items-center gap-8 text-sm text-gray-500">
            <a 
              href="#projects" 
              className="hover:text-gray-900 transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
