import '../css/Footer.css'

import {
  FaLinkedin,
  FaGithub
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>GamingHub</h3>
        <p>Check my profile:</p>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/%C5%82ukasz-rydwa%C5%84ski-237469173/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Rydwan94?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} 
          GamingHub. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
