import React from 'react';
import ReactSideNav from 'react-simple-sidenav';

import {
    LoginButton,
    LogoutButton
} from '../components';

const order = [LoginButton, LogoutButton];

const Sidenav = props => (
    <ReactSideNav
    showNav={props.showNav}
    onHideNav={props.onHideNav}
    navStyle={{
      background: '#242424',
      maxWidth: '220px',
    }}
  >
    {order.map(item => (
      <div key={item} onClick={props.onHideNav}>
        {/* < item={item} sidenav /> */}
      </div>
    ))}
  </ReactSideNav>
);
