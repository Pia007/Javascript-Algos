import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Clock from './Clock';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faInfo} from '@fortawesome/free-solid-svg-icons';
import './header.css';


const Header = ({ color }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);
    // change the title based on the window width
    const changeTitle = () => {
        if (windowWidth <= 992) {
            return <h1 className="hd-title">JS Algos</h1>
        } else {
            return <h1 className="hd-title"> JavaScript Algorithms</h1>
        }
    }

    return (
        <header style={{ color: color }}>
            <div className="header-info-holder">
                <div className="hd-content">
                    <div className="hd-holder hd-btn-holder">
                        <button className="header-btn" id="info-btn" aria-label="info-button">
                            <Link to='/info' className="info-btn">
                                {/* <FontAwesomeIcon icon={faInfo} size="2xl" style={{color: color}}/> */}
                                <i className="fa-solid fa-info" style={{color: color}}/>
                            </Link>
                        </button>
                    </div>
                    <div className="hd-holder hd-title-holder">
                        {changeTitle()}
                    </div>
                    <div className="hd-holder clock-holder">
                            <Clock className="hd-clock"/>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header