import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import { container, navContainer, link } from './styles.css';

export default function Nav (props) {
  return (
    <div className={container}>
      <nav className={navContainer}>
        <ul>
          <li><NavLink className={link} activeClassName='active' to='/'>{'Home'}</NavLink></li>
        </ul>
        <ul>
          <li><Link to='/template' className={link}>{'Temp Page'}</Link></li>
        </ul>
      </nav>
    </div>
  );
}

Nav.propTypes = {};
