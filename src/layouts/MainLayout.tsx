/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactNode } from 'react';
import './Style.css';

function MainLayout(props: { children: ReactNode }) {
  const { children } = props;
  return (
    <>
      <div className="topnav">
        <a href="#">Tezos KT</a>
        <a href="#">Home</a>
      </div>
      <div className="content">
        {children}
        <div className="footer">
          Copyright © Tezos KT {new Date().getFullYear()}
          <br />
          <a
            href="https://github.com/luazhizhan/tezos-kt"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
