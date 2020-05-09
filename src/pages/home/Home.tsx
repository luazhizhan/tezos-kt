import React from 'react';
import { Link } from 'react-router-dom';
import contractImg from '../../assets/images/contract.svg';

function Home() {
  return (
    <>
      <div className="card" style={{ display: 'flex' }}>
        <span style={{ width: '65%' }}>
          <h2>Tezos KT</h2>
          <p>Deploy and interact with your tezos contract here.</p>
          <Link to="/dashboard">
            <button type="button">Go To Dashboard</button>
          </Link>
        </span>
        <img src={contractImg} alt="Contract" style={{ maxWidth: '30%', minWidth: '80px' }} />
      </div>
    </>
  );
}

export default Home;
