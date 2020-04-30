import React from 'react';
import { Link } from 'react-router-dom'

import './style.css';

import Header from '../../components/header'

export default function Home() {
  return (
    <div>  
      <Header/>

      <section>    
        <p> Aqui poderia ter um carrossel de Imagens</p>
      </section>

      <section>
        <p>Publique sua história aqui, reservamos seus direitos... Algo assim</p>
      </section>

      <Link to='/main'>
        <button>baixar Livretos</button>
      </Link>
      <Link to='/login'>
        <button>Sign in</button>
      </Link>

    </div>
  );
}
