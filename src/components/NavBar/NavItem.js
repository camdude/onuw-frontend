import React from 'react';
import { NavLink } from 'react-router-dom';

const navItem = props => {
    return (
        <li className="navItem">
            <NavLink className="navItem__link" to={props.link}>{props.children}</NavLink>
        </li>
    );
}

export default navItem;
