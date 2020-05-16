import React from 'react';
import { Link } from 'react-router-dom';
import contractImg from '../../assets/images/contract.svg';
import deployImg from '../../assets/images/deploy.svg';
import interactImg from '../../assets/images/interact.svg';
import openSrcImg from '../../assets/images/open-source.svg';
import './Style.css';
import CardTitle from '../../components/CardTitle';

function Home() {
  return (
    <>
      <div className="card flex-card">
        <span className="text-span">
          <h1>Tezos KT</h1>
          <p>Deploy and interact with your tezos contract here.</p>
          <Link to="/dashboard">
            <button type="button" className="button btn-primary">Go To Dashboard</button>
          </Link>
        </span>
        <span className="image-span">
          <img src={contractImg} alt="Contract" className="contract-img" />
        </span>
      </div>
      <CardTitle title="Features" />
      <div className="card flex-card">
        <span className="image-span">
          <img src={deployImg} alt="Contract deployment" style={{ width: '15em' }} />
          <h3>Smart Contract Deployment</h3>
        </span>
        <span className="image-span">
          <img src={interactImg} alt="Contract interection" style={{ width: '15em' }} />
          <h3>Smart Contract Interection</h3>
        </span>
      </div>
      <CardTitle title="Open Source" />
      <div className="card flex-card">
        <span className="image-span">
          <img src={openSrcImg} alt="Open source" className="open-src-img" />
        </span>
        <span className="text-span">
          <h2>GitHub Project</h2>
          <p>This project is open source at GitHub</p>
          <a
            href="https://github.com/luazhizhan/tezos-kt"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </span>
      </div>
    </>
  );
}

export default Home;
