/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactNode } from 'react';
import './Style.css';
import '../assets/styles/Card.css';

function MainLayout(props: { children: ReactNode }) {
  const { children } = props;
  return (
    <>
      <div className="topnav">
        <a href="/">Tezos KT</a>
        <a href="/dashboard">Dashboard</a>
      </div>
      <div className="page-container">
        <div className="content-wrap">{children}</div>
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
