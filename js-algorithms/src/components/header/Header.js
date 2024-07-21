import { NavLink } from 'react-router-dom';
import Clock from './Clock';
// import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <NavLink to='/info'>Info Icon</NavLink>
                {/* <NavLink className="navbar-brand" to="/">React App</NavLink> */}
                <Clock />
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                
                {/* <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" exact>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/info">Info</NavLink>
                        </li>
                    </ul>
                </div> */}
            </div>
        </nav>
    )
}

export default Header