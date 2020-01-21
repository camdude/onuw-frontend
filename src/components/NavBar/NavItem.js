import React from 'react';
import { NavLink } from 'react-router-dom';

const navItem = props => {
    return (
        <li className="navItem">
            <NavLink className="navItem__link" to={props.link} exact={props.exact}>{props.children}</NavLink>
        </li>
    );
}

export default navItem;
