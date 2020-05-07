import React from 'react';
import { Link } from 'react-router-dom'

import './style.css';

import Header from '../../components/header/index'
// import Footer from '../../components/footer/index'

export default function Home() {
  return (
    <div>  
      <Header/>

      <div className="container">
         <h1>Seja bem vindo ao Poemas do Zé</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, nesciunt? Animi repellendus dicta neque, quas totam atque accusantium recusandae nulla voluptatum vel? Impedit, molestias dolor? Consectetur officiis laborum obcaecati dolore.</p>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis non ea, magni harum libero ipsa modi ducimus eos deserunt commodi eveniet corporis sunt, odit culpa, laborum quasi esse consequatur id.</p>
      </div>
      <div className="container"> 
        <h3>Fique a vontade para baixar os livretos</h3>
        <Link to='/main'><button>Clique aqui para baixar!</button></Link>
        <h3>Você também pode publicar gratuitamente seus livretos</h3>
        <Link to='/register'><button>Clique aqui para começar a publicar</button></Link>
      </div>

      
      {/* <Footer /> */}
    </div>
  );
}
