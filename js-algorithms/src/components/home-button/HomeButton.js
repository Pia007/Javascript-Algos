import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons'
import './HomeButton.css'

const HomeButton = ({buttonStyles, homeIconStyle}) => {


    return (
        <div className="d-flex w-100 justify-content-end">
            <button className={`btn-home ${buttonStyles}`}>
                <Link to="/" className="link-home" >
                    <FontAwesomeIcon icon={faHome} className={`icon-home ${homeIconStyle}`}/>
                </Link>
            </button>
        </div>
    )
}

export default HomeButton