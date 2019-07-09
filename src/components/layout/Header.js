import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Header = ({branding}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" href="#">Contacts Manager</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-home"></i> Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/about">
                    <i className="fas fa-question"></i>About <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/contact/add">
                    <i className="fas fa-plus"></i>Add <span className="sr-only">(current)</span></Link>
                </li>
               
                
                </ul>
            </div>
            </nav>
      
    )
}

Header.defaultProps = {
    branding : 'My App'
};
Header.propTypes = {
    branding: PropTypes.string.isRequired
};

const headingStyle = {
    color: 'red',
    fontSize: '50px'
};
export default Header;