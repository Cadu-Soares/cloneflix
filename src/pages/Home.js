import React from 'react'
import Filme from '../components/Filme'
import { Button } from 'reactstrap';
import { Container } from 'reactstrap';
import { Alert } from 'reactstrap';
import { Table } from 'reactstrap';

const Home = (props) => {
  const listFilmes = [
    { nome: 'filme 1', categoria:'Terror', ano:2020 },
    { nome: 'filme 2', categoria:'Ficção', ano:2007 },
    { nome: 'filme 3', categoria:'Romance', ano:2011 },
    { nome: 'filme 4', categoria:'Ação', ano:2019 },
    { nome: 'filme 5', categoria:'Comédia', ano:2015 },
  ]

  return (
    <Container>
      <h1>Lista Filmes</h1>  
      <br />
      <Alert color="secondary">
        <div className="row">
        <br />
          <div className="col-4">
            <label htmlFor="">Nome</label>
            <input type="text" className="form-control" placeholder='Nome do Filme' />
          </div>
          <div className="col-4">
            <label htmlFor="">Categoria</label>
            <select className="form-control">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>
          </div>
          <div className="col-4">
            <label htmlFor="">Ano</label>
            <input type="number" className="form-control" placeholder='Ano de Lançamento do Filme' />
          </div>
        </div>
        <br />
        <Button block color="success" size="lg">
          Cadastrar
        </Button>
      </Alert>
      <br/>   
      <Table responsive size="" striped>
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Categoria</th>
            <th scope="col">Ano de Lançamento</th>
            <th scope="col" >Ações</th>
          </tr>
        </thead>
        <tbody>
          {listFilmes.map(filme => (<Filme filme={filme} />))}
        </tbody>
      </Table>
    </Container>
  )
}

export default Home
