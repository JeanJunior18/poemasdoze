import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom';

import './style.css';

import  Header from '../../components/header/index';

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
            
        },
        {
          title: 'Cordel da roça encantanda',
          author: 'Zé Lucas',
          imgLink: 'http://poemasdoze.epizy.com/Cordel_da_roca_encantada.png',
          downloadLink: 'https://bit.ly/download_rocaencantada'
          
      },
      {
        title: 'Cordel da roça encantanda',
        author: 'Zé Lucas',
        imgLink: 'http://poemasdoze.epizy.com/Cordel_da_roca_encantada.png',
        downloadLink: 'https://bit.ly/download_rocaencantada'
        
      },
      {
        title: 'Cordel da roça encantanda',
        author: 'Zé Lucas',
        imgLink: 'http://poemasdoze.epizy.com/Cordel_da_roca_encantada.png',
        downloadLink: 'https://bit.ly/download_rocaencantada'
        
      },
      {
        title: 'Cordel da roça encantanda',
        author: 'Zé Lucas',
        imgLink: 'http://poemasdoze.epizy.com/Cordel_da_roca_encantada.png',
        downloadLink: 'https://bit.ly/download_rocaencantada'
        
      },
    
    ];

    

    const user = localStorage.getItem('user')
    const history = useHistory();
    function logout(){
      localStorage.clear()
      history.push('/')
    }
  return (
		<div>
			<div className="content">
        {booklests.map(book=>(<div key={book.title}>
          <img src={book.imgLink} alt="Capa do Livro"/>
        <button className="download"><p>"{book.title}"</p><p>{book.author}</p></button>
        </div>))}
      </div>


		</div>
  );
}
