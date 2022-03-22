import React from 'react';

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
          <button className='btn btn-info' onClick={showFilmName}>Informações</button>{' '}
          <button className='btn btn-danger'>Excluir</button>
      </td>
    </tr>
  )
}

export default Filme