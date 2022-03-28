import React, { useState } from 'react'
import Filme from '../components/Filme'

const Home = () => {
  
  const [filmes, setFilmes] = useState([]);

  const [filme, setFilme] = useState({
    nome: '',
    categoria: null,
    ano: 0,
  });

  const cadastrar = () => {
    setFilmes([filme, ...filmes])
  };

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
                setFilme({...filme,
                nome: e.target.value
                });
              }} 
            />
            </div>
          
          <div className="col-4">
            <label htmlFor="">Categoria</label>
            <select 
              className="form-control"
              onChange={(e) => {
                setFilme({...filme,
                categoria: e.target.value
                });
              }}
              >
              <option value="Terror">Terror</option>
              <option value="Drama">Drama</option>
              <option value="Suspense">Suspense</option>
              <option value="Ação">Ação</option>
              <option value="Comédia">Comédia</option>
              <option value="Romance">Romance</option>
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
                });
              }}
            />
      </div>
    </div>
    <br />
    <button 
      type="button" 
      className="btn btn-success btn-lg btn-block"
      onClick={ cadastrar }
      >
      Cadastrar
      </button>
  </div>
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
