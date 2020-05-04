import React, {useState} from 'react';
import * as Yup from 'yup';
import Header from '../../components/header/index';

// import { Container } from './styles';

export default function Register() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword ] = useState('');
  const [confpass, setConfpass] = useState('');

  function handleSubmit(e){
    e.preventDefault();
    const schema = Yup.object().shape({
      firstname: Yup.string().required('O nome é obrigatótio'),
      lastname: Yup.string().required('O sobrenome é obrigatório'),
      email: Yup.string().email('Digite o email corretamente').required('O email é obrigatório'),
      password: Yup.string().required('Senha é obrigatória'),
      confpass: Yup.string().required('Confirmação de senha é obrigatório')
    })

    schema.validate({ firstname, lastname, email, password, confpass })
    if(password===confpass)
      console.log({ firstname, lastname, email, password, confpass })
    else
    alert('As senhas não conferem')

  }

  return (
    <div>
      <Header />

      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">Nome: </label>
        <input type="text" name="firstname" id="firstname" onChange={e=>setFirstname(e.target.value)} />
        <label htmlFor="lastname">Sobrenome</label>
        <input type="text" name="lastname" id="lastname" onChange={e=>setLastname(e.target.value)} />
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" onChange={e=>setEmail(e.target.value)} />
        <label htmlFor="password">Senha: </label>
        <input type="password" name="password" id="password" onChange={e=>setPassword(e.target.value)} />

        <label htmlFor="confpassword">Confirme sua senha: </label>
        <input type="password" name="confpassword" id="confpassword" onChange={e=>{
            var target = e.target.value
            setTimeout(()=>{
              if(target !== password) console.log('As senhas não conferem')
              if(target === password) setConfpass(target)
            }, 2000)
          }} />
        <input type="submit" value="Registrar"/>
      </form>
    </div>
  );
}
