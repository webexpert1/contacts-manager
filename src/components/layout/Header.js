import React from 'react'
import PropTypes from 'prop-types';


const Header = ({branding}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Contacts Manager</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
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