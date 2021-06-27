import React from 'react';
import LinkTo from './LinkTo';

const NavBar = () => (
  <nav className="nav">
    <h1>Math Magicians</h1>
    <div>
      <LinkTo name="Home" path="/" />
      <LinkTo name="Calculator" path="/calc" />
      <LinkTo name="Quote" path="/quote" />
    </div>
  </nav>
);

export default NavBar;
