import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import req from '../../api/axios'


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
    try{
      schema.isValid({email, password}).then(async valid=>{
       if(valid){
          const {status, data} = await req.post('/login', {email, password});
          console.log(status, data);
          if(!data.error){
            localStorage.setItem('authorization', data.token);
            localStorage.setItem('user', `${data.user.firstname} ${data.user.lastname}`);
            history.push('/main');
          }
          else{
            setError(data.error)
          }
        }
        else
          setError('Usuário ou senha incorretos')
      })
      
    }catch(err){console.log(err)}
  }
  return (
    <div>
      {error && <span>{error}</span>} {/* Gera a mensagem de erro na tela */}
      <form onSubmit={handleSubmit}>

        <label htmlFor="email">Email: </label>
        <input type="text" name="email" id="email" onChange={e=>setEmail(e.target.value)} />

        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" onChange={e=>setPassword(e.target.value)} />

        <input type="submit" value="Enviar"/>

        <Link to='/register'>Registre-se!</Link>

      </form>
    </div>
  );
}
