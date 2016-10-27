import React, {PropTypes} from 'react';
import {Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
            {" |             "}
            <Link to="/tester" activeClassName="active">Product list Mockup page</Link>
            {" |             "}
            <Link to="/tester-detail" activeClassName="active">Product detail Mockup page</Link>
        </nav>
    );
};

export default Header;