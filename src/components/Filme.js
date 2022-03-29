import React from 'react';
import { Button } from 'reactstrap'; 

const Filme = ({ filme }) => {

  const showFilmName = () => {
    alert(filme.nome);
  };

  return (
    <tr>
      <td>{filme.nome}</td>
      <td>{filme.categoria}</td>
      <td>{filme.ano}</td>
      <td className='text-right'>
      <Button color="info" size="" onClick={showFilmName}>Informações</Button>{ ' ' }
      <Button color="danger" size="">Excluir</Button>
      </td>
    </tr>
    )
  }

export default Filme