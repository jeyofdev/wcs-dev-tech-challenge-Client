import React from 'react';
import H1 from '../../Text/Title/H1/H1';
import './Header.css';

const Header = () => {
  return (
    <header>
      <H1>
        <img
          src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
          alt="Wild Code School logo"
        />
        Les Argonautes
      </H1>
    </header>
  );
};

export default Header;
