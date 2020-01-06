import React from 'react';

const navigation = props => {
    return (
        <nav className="navigation">
            <ul className="navigation__list">
                {props.children}
            </ul>
        </nav>
    );
}

export default navigation;
