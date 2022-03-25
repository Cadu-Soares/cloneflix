import React, { useState } from 'react'
import Filme from '../components/Filme'

const Home = (props) => {
  const [filmes, setFilmes] = useState([]);

  const [filme, setFilme] = useState({
    nome: '',
    ano: 0,
    categoria: null
  });

  const cadFilm = () => setFilmes([filme, ...filmes]);

  
  return (
    <div className="container">
      <br />
      <h1>Lista Filmes</h1> 
      <br />
      <div class="alert alert-secondary" role="alert">
    <div className="row">
    <br />
      <div className="col-4">
        <label htmlFor="">Nome</label>
        <input 
          type="text" 
          className="form-control" 
          placeholder='Nome do Filme' 
          onChange={(e) => {
            setFilme({
              ...filme,
              nome: e.target.value
            })
          }} 
        />
      </div>
      <div className="col-4">
        <label htmlFor="">Categoria</label>
        <select 
          className="form-control"
          onChange={(e) => {
            setFilme({
              ...filme,
              categoria: e.target.value
            })
          }}
        >
          <option value="">Terror</option>
          <option value="">Drama</option>
          <option value="">Suspense</option>
          <option value="">Ação</option>
          <option value="">Comédia</option>
          <option value="">Romance</option>
        </select>
      </div>
      <div className="col-4">
        <label htmlFor="">Ano</label>
        <input 
          type="number" 
          className="form-control" 
          placeholder='Ano de Lançamento do Filme' 
            onChange={(e) => {
              setFilme({
                ...filme,
                ano: e.target.value
              })
            }}
          />
      </div>
    </div>
    <br />
    <button 
      type="button" 
      class="btn btn-success btn-lg btn-block"
      onClick={cadFilm}
      >
      Cadastrar
      </button>
  </div>

      <br/>   
      <table class="table table-striped">
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
