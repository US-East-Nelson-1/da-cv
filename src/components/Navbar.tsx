export default function Navbar() {
  return (
    <nav className="content-container py-6">
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="text-gray-900 font-medium">
            NG | Data Analyst
          </div>
          <div className="flex items-center gap-8">
            <a 
              href="#projects" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
