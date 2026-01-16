import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
  return (
    <nav className="content-container py-6">
      <div className="container-custom">
        <div className="flex items-center justify-start">
          <div className="flex items-center gap-2 text-gray-900">
            <a 
              href="https://www.linkedin.com/in/nelson-guerra-7075b413a/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors text-xl"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a 
              href="https://github.com/US-East-Nelson-1" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors text-xl"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
