import React from 'react';

const Footer = ({ color }) => (
    <footer style={{ color: color }}>
        <div className="social-holder">
            <div className="social-list">
                <button className="social-btn-item linked" id="linkedin" aria-label="linkedin logo">
                    <a href="https://www.linkedin.com/in/pia-torain-dev/" className="social-links" alt="developer's linkedIn profile link" aria-label="linkedin">
                        <i className='bx bxl-linkedin-square f-icon f-linkedin' ></i>
                    </a>
                </button>
                <button className="social-btn-item gh" id="github" aria-label="github logo">
                    <a href="https://github.com/Pia007/Pia007" className="social-links" alt="develper's github profile link" aria-label="github">
                        <i className='bx bxl-github f-icon f-github' ></i>
                    </a>
                </button>
                <button className="social-btn-item x" id="twitter" aria-label="twitter logo">
                    <a href="https://twitter.com/FeenixRizn" className="social-links" alt="developer's twitter profile link" aria-label="twitter">
                        <i className='bx bxl-twitter f-icon f-twitter'></i>
                    </a>
                </button>
                <button className="social-btn-item py" id="polywork" aria-label="polywork logo">
                    <a href="https://www.polywork.com/feenixrizn" className="social-links" alt="developer's polywork profile link" aria-label="polywork">
                        <img className="poly f-icon" id="p-work" src="assets/images/polywork-rubix-icon-color.svg" alt="polywork logo"/>
                    </a>
                </button>
              </div>
              <div className="copyright" id="c-right">
                  <p className="copy" id="cp">&copy; <span id="year">{new Date().getFullYear()}</span> Pia Torain</p>
              </div>
        </div>
    </footer>
);

export default Footer;
