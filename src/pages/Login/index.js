import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import req from '../../api/axios';
import Header from '../../components/header/index';
import './styles.css';

export default function Authors() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const history = useHistory();

  async function handleSubmit(e){
    e.preventDefault()

    const schema = Yup.object().shape({
      email: Yup.string().email().required('Input your email'),
      password: Yup.string().required('Input your password'),
    })
    if(await schema.isValid({email, password})){
      req.post('/login', {email, password}).then(response =>{
          localStorage.setItem('authorization', response.data.token);
          localStorage.setItem('user', `${response.data.user.firstname} ${response.data.user.lastname}`);
          history.push('/main');
      }).catch(error=>setError(error.response.data.error))
    }
    else setError('Usuário ou senha inválidos')
  }
  return (
    <div className='login'>

      <Header />

      <form className='box-login' onSubmit={handleSubmit}>
        <div className="login-screen">
          <h2>Login</h2>
          {error && <span className="error">{error}</span>}
          {/* <label htmlFor="email">Email: </label> */}
          <input placeholder='Email' type="text" name="email" id="email" onChange={e=>setEmail(e.target.value)} />

          {/* <label htmlFor="password">Password: </label> */}
          <input placeholder='Password' type="password" name="password" id="password" onChange={e=>setPassword(e.target.value)} />

          <button type="submit">Entrar</button>

          <Link to='/register'>Ainda não é cadastrado? Registre-se!</Link>
          </div>
      </form>
    </div>
  );
}
