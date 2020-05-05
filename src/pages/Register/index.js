import React, {useState} from 'react';
import * as Yup from 'yup';
import Header from '../../components/header/index';
import './styles.css';
import req from '../../api/axios';

export default function Register() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword ] = useState('');
  const [confpass, setConfpass] = useState('');
  const [error, setError] = useState(false);
  let time = null;

  

  function handleSubmit(e){
    e.preventDefault();
    const schema = Yup.object().shape({
      firstname: Yup.string().required('O nome é obrigatótio'),
      lastname: Yup.string().required('O sobrenome é obrigatório'),
      email: Yup.string().email('Digite o email corretamente').required('O email é obrigatório'),
      password: Yup.string().required('Senha é obrigatória'),
      confpass: Yup.string().required('Confirmação de senha é obrigatório')
    })

    schema.validate({ firstname, lastname, email, password, confpass }).then(data=>{
      req.post('author', data).then(response=>{
        alert('Cadastrado com sucesso')
        console.log(response)
      }).catch(err=>{
        alert('Houve algum erro')
        console.log(err)
      })
      console.log(data)
    }).catch(err=>setError(err.message))
// irstname, lastname, email, password 
  }

  return (
    <div>
      <Header />

      <form className='box-register' onSubmit={handleSubmit}>
        <div className="form">
          <h2>Registre-se para começar a publicar!</h2>
          <label htmlFor="firstname">Nome </label>
          <input type="text" name="firstname" id="firstname" onChange={e=>setFirstname(e.target.value)} />
          <label htmlFor="lastname">Sobrenome </label>
          <input type="text" name="lastname" id="lastname" onChange={e=>setLastname(e.target.value)} />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={e=>setEmail(e.target.value)} />
          <label htmlFor="password">Senha </label>
          <input type="password" name="password" id="password" onChange={e=>setPassword(e.target.value)} />

          <label htmlFor="confpassword">Confirme sua senha </label>
          <input type="password" name="confpassword" id="confpassword" onChange={e=>{
              var target = e.target.value
              clearTimeout(time)
              time = setTimeout(()=>{
                if(target !== password) setError('As senhas não conferem')
                if(target === password) {
                  setError(false)
                  setConfpass(target)
                }
              }, 2000)
            }} />
            {error && <span className='error'>{error}</span>}
          <button type="submit">Registrar</button>
        </div>
      </form>
    </div>
  );
}
