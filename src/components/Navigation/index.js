import React from 'react';
import './style.css';

function Nav(props) {
  const tabs = ['About Me', 'Projects', 'Resume'];
  return (
    <ul className="nav nav-tabs">
      {tabs.map(tab => (
        <li className="nav-item" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => props.setCurrentPage(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
      <span id="nameL">Obinna</span>
    </ul>
  );
}

export default Nav;