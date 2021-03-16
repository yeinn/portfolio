import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
        <div className="nav-name">explorer <button className="toggle-btn">v</button></div>
        <ul className="nav-list">
            <li>
                <NavLink to="/home" activeClassName="active">
                    home
                </NavLink>
            </li>
        </ul>
        <ul>
            <li>
                <address><Link to="https://github.com/yeinn">깃허브</Link></address>
            </li>
            <li>
                <address><a href="https://github.com/yeinn">링크드인</a></address>
            </li>
        </ul>

    </nav>


  );
};

export default Nav;