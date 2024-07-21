import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons'

const HomeButton = () => {
    return (
        <Link to="/" className="navbar-brand" >
            {/* <NavLink className="navbar-brand" to="/">React App</NavLink> */}
            <FontAwesomeIcon icon={faHome} />
        </Link>
    )
}

export default HomeButton