import React from 'react';
import {useHistory} from 'react-router-dom';
import req from '../../api/axios'

import './style.css';
import { useEffect } from 'react';
import { useState } from 'react';


export default function Main() {


  const [booklets, setBooklets] = useState([])

  async function loadBooks(){
    const response = await req.get('booklets')
    console.log(response.data)
    setBooklets(response.data)
  }
  

  useEffect(()=>{loadBooks()},[])
    // const booklests = [
    //     {
    //         title: 'Tudo que eu não disse',
    //         author: 'Zé Lucas',
    //         imgLink: 'http://poemasdoze.epizy.com/Livreto_tudo%20o%20que%20eu%20n%C3%A3o%20disse.png',
    //         downloadLink: 'https://bit.ly/download_tudooqueeunaodisse'
    //     },
    //     {
    //         title: 'Cordel da roça encantanda',
    //         author: 'Zé Lucas',
    //         imgLink: 'http://poemasdoze.epizy.com/Cordel_da_roca_encantada.png',
    //         downloadLink: 'https://bit.ly/download_rocaencantada'
            
    //     },
    //     {
    //       title: 'Cordel da roça encantanda',
    //       author: 'Zé Lucas',
    //       imgLink: 'http://poemasdoze.epizy.com/Cordel_da_roca_encantada.png',
    //       downloadLink: 'https://bit.ly/download_rocaencantada'
          
    //   },
    //   {
    //     title: 'Cordel da roça encantanda',
    //     author: 'Zé Lucas',
    //     imgLink: 'http://poemasdoze.epizy.com/Cordel_da_roca_encantada.png',
    //     downloadLink: 'https://bit.ly/download_rocaencantada'
        
    //   },
    //   {
    //     title: 'Cordel da roça encantanda',
    //     author: 'Zé Lucas',
    //     imgLink: 'http://poemasdoze.epizy.com/Cordel_da_roca_encantada.png',
    //     downloadLink: 'https://bit.ly/download_rocaencantada'
        
    //   },
    //   {
    //     title: 'Cordel da roça encantanda',
    //     author: 'Zé Lucas',
    //     imgLink: 'http://poemasdoze.epizy.com/Cordel_da_roca_encantada.png',
    //     downloadLink: 'https://bit.ly/download_rocaencantada'
        
    //   },
    
    // ];

    

  const user = localStorage.getItem('user')
  const history = useHistory();
  function logout(){
    localStorage.clear()
    history.push('/')
  }
  return (
		<div>
			<div className="content">
        {booklets.map(book=>(
        <div className='card' key={book.id} onClick={(()=>{window.location.href = book.downloadlink})}>
          <img src={book.imageLink} alt="Capa do Livro"/>
        <div className="download"><p>"{book.title}"</p><p>{book.author}</p></div>
        </div>))}
      </div>


		</div>
  );
}
