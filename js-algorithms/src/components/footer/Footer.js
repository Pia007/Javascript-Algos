import React, { useState } from 'react';
import './Footer.css';

const Footer = ({ color }) => {
    const [year, setYear] = useState(new Date().getFullYear());
    console.log(year);

    return (

        <footer className="footer" style={{ color: color }}>
            <div className="social-holder">
                <div className="social-list">
                    <button className="social-btn-item linked" id="linkedin" aria-label="linkedin logo">
                        <a href="https://www.linkedin.com/in/pia-torain-dev/" target="_blank" rel="noopener noreferrer" className="social-links" alt="developer's linkedIn profile link" aria-label="linkedin">
                            <i className="fa-brands fa-linkedin f-icon f-linkedin"></i>
                        </a>
                    </button>
                    <button className="social-btn-item gh" id="github" aria-label="github logo">
                        <a href="https://github.com/Pia007/Pia007" target="_blank" rel="noopener noreferrer" className="social-links" alt="develper's github profile link" aria-label="github">
                            <i className="fa-brands fa-github f-icon f-github"></i>
                        </a>
                    </button>
                </div>
                <div className="copyright" id="c-right">
                    <p className="copy" id="cp">&copy; <span id="year">{year}</span> Pia Torain</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
