import React, { useState } from 'react'
import Filme from '../components/Filme'
import { Container } from 'reactstrap';
import { Table } from 'reactstrap';
import CadFilm from '../components/CadFilm';

const Home = (props) => {

  const [filmes, setFilmes] = useState([]);
  const [filme, setFilme] = useState({
    nome:'',
    categoria: null,
    ano: 0,
  })

  return (
    <Container>
      <br />
      <h1>Lista Filmes</h1>  
      <br />
      <CadFilm />
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
          {filmes.map(filme => (<Filme filme={filme} />))}
        </tbody>
      </Table>
      
    </Container>
  )
}

export default Home
