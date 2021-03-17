import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <ul className="nav nav-tabs mt-3">
            <NavLink to='/tracker' className="nav-link" activeClassName="active">
                <li className="nav-item">Tracker</li>
            </NavLink>
            <NavLink to='/trackedlist' className="nav-link" activeClassName="active">
                <li className="nav-item">Tracked Items</li>
            </NavLink>            
        </ul>
    )
}

export default Nav;