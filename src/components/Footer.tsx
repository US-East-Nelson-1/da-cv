import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="mt-20 py-5 border-t border-gray-200">
      <div className="content-container">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2 text-gray-700">
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors text-xl"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a 
              href="https://github.com/yourusername" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors text-xl"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <p className="text-sm text-gray-700">
            Made with ♥ Powered By Astro
          </p>
        </div>
      </div>
    </footer>
  );
}
