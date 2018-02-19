import React from 'react';
import PropTypes from "prop-types";

import './header.css';

export default function Header(props) {
    return (
        <div className="header">
            <span>Help</span>
            <span onClick={() => props.onRestart()} className="restart">Restart</span>
        </div>
    );
}

Header.propTypes = {
    onRestart: PropTypes.func.isRequired
};