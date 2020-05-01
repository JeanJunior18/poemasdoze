import React from 'react';
import {useHistory} from 'react-router-dom';

import './style.css';

import  Header from '../../components/header';

export default function Main() {

    const booklests = [
        {
            title: 'Tudo que eu não disse',
            author: 'Zé Lucas',
            imgLink: 'http://poemasdoze.epizy.com/Livreto_tudo%20o%20que%20eu%20n%C3%A3o%20disse.png',
            downloadLink: 'https://bit.ly/download_tudooqueeunaodisse'
        },
        {
            title: 'Cordel da roça encantanda',
            author: 'Zé Lucas',
            imgLink: 'http://poemasdoze.epizy.com/Cordel_da_roca_encantada.png',
            downloadLink: 'https://bit.ly/download_rocaencantada'
            
        }
    ];
    const user = localStorage.getItem('user')
    const history = useHistory();
    function logout(){
      localStorage.clear()
      history.push('/')
    }
  return (
		<div>
			<Header/>
			<div className='container'>
				<div className='corpo'> 
                    <section><p>Olá {user}, sejá bem vindo!</p></section><br/><br/><br/>
                    <button onClick={logout}> <p>Logout</p> </button>
					{booklests.map(book=>(
					<div className="btn" key={book.title}>
					<img src={book.imgLink} alt="Capa do Livro"/>
					<a href={book.downloadLink}><button>Baixar<br/>"Tudo o que eu não disse"</button></a>
					</div>
					))}
				</div>
			</div>
		</div>
  );
}
