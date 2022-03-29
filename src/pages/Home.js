import React, { useState } from 'react'
import Filme from '../components/Filme'
import CadFilm from '../components/CadFilm'

const Home = () => {
  
  const [filmes, setFilmes] = useState([]);

  return (
    <div className="container">
      <br />
      <h1>Lista Filmes</h1> 
      <br />
      <CadFilm 
        filmes={filmes} 
        setFilmes={setFilmes} 
      />     
      <br/>   
      <table className="table table-striped">
        <thead>
          <tr> 
            <th scope="col">Nome</th>
            <th scope="col">Categoria</th>
            <th scope="col">Ano de Lançamento</th>
            <th scope="col" >Ações</th>
          </tr>
        </thead>
        <tbody>
          {filmes.map((filme) => (
            <Filme filme={filme} />
          ))}
        </tbody>
      </table>
    </div>    
  )
}

export default Home
