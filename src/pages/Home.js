import React from 'react'
import Filme from '../components/Filme'

const Home = () => {
  const listFilmes = [
    { nome: 'filme 1', categoria:'Terror', ano:2020 },
    { nome: 'filme 2', categoria:'Ficção', ano:2007 },
    { nome: 'filme 3', categoria:'Romance', ano:2011 },
    { nome: 'filme 4', categoria:'Ação', ano:2019 },
    { nome: 'filme 5', categoria:'Comédia', ano:2015 },
  ]

  return (
    <div className="container">
      <br/>
      <h1>Lista Filmes</h1>     
      <br/>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Categoria</th>
            <th scope="col">Ano de Lançamento</th>
            <th scope="col" className='text-right'>Ações</th>
          </tr>
        </thead>
        <tbody>
          {listFilmes.map(filme => (<Filme filme={filme} />))}
        </tbody>
      </table>
    </div>
  )
}

export default Home
