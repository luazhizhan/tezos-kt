import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../assets/images/notFound.svg';
import './Style.css';

function FourZeroFour() {
  return (
    <div className="card not-found-card">
      <h2>This page doesn&apos;t exist.</h2>
      <img src={notFound} alt="404 not found" className="not-found-img" />
      <br />
      <Link to="/">
        <button type="button" className="button btn-primary not-found-btn">
          Back to home
        </button>
      </Link>
    </div>
  );
}

export default FourZeroFour;
