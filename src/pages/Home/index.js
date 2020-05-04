import React from 'react';
import { Link } from 'react-router-dom'

import './style.css';

import Header from '../../components/header/index'

export default function Home() {
  return (
    <div>  
      <Header/>

      Home
{/* 
      <Link to='/main'>
        <button>baixar Livretos</button>
      </Link>
      <Link to='/login'>
        <button>Sign in</button>
      </Link> */}

    </div>
  );
}
