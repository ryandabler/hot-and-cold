import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { restartGame } from "../action";

import './header.css';

export function Header(props) {
    return (
        <div className="header">
            <span>Help</span>
            <span onClick={() => props.dispatch(restartGame())} className="restart">Restart</span>
        </div>
    );
}

Header.defaultProps = {
    dispatch: () => {}
};

Header.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default connect()(Header);