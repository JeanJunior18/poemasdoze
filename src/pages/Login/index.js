import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';


export default function Authors() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  async function handleSubmit(e){
    e.preventDefault()
    const schema = Yup.object().shape({
      email: Yup.string().email().required('Input your email'),
      password: Yup.string().required('Input your password'),
    })
    try{
      schema.isValid({email, password}).then(valid=>{
        if(valid)
          console.log(email, password)
        else
          setError(!valid)
      })
      
    }catch(err){console.log(err)}
  }
  return (
    <div>
      {error && <span>Email ou senha incorretos</span>}
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