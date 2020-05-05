import React, { useEffect } from 'react';

import Header from '../../components/header/index';
import Main from './main';
import { useState } from 'react';


function EmailVerify() {

  const [haveEmail, setHaveEmail] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(()=>{
    const verify = localStorage.getItem('email');
    console.log('Eviar email para o mail trap')

    if(verify) setHaveEmail(true);
  });
  return (<>
    <Header/>

    {haveEmail && <Main/>}
    {!haveEmail && <>
      <form onSubmit={()=>localStorage.setItem('email', email)}>
        <label htmlFor="email">Cadastre o seu email para baixar gratuitamente os livretos</label>
        <input type="email" placeholder='Digite o seu email' onChange={e => setEmail(e.target.value)}/>
        <input type="submit" value="Cadastrar" />
      </form>
    </>}
    
  </>);
}

export default EmailVerify; 