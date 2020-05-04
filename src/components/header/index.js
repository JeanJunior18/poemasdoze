import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';
export default function Header() {

  return (
    <header> 
      <h1><Link to='/'>Poemas Do Zé</Link></h1>
      <p>Ficar em casa é melhor com poesia</p>
      <nav>
        <ul>
          <li><Link to='main'>Baixar</Link></li>
          <li><Link to='register'>Publicar</Link></li>
          <li><Link to='login'>Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}
