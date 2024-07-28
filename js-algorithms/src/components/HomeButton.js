import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons'
import { changeStyles } from '../utlities/functions'

const HomeButton = ({  styles, setStyles} ) => {

    return (
        <Link to="/" className="navbar-brand" >
            <button onClick={() => changeStyles(styles, setStyles)} >
                <FontAwesomeIcon icon={faHome} />
            </button>
        </Link>
    )
}

export default HomeButton