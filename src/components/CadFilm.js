import React from 'react';
import { Button } from 'reactstrap';
import { Alert } from 'reactstrap';


const CadFilm = ({ filme, setFilme }) => {

  // const cadastrar = () => {
  //   console.log(filme)
  // }
  
  return(
    <Alert color="secondary">
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
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
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
    <Button 
      block 
      color="success" 
      size="lg" 
      // onClick={cadastrar}
      >
      Cadastrar
    </Button>
  </Alert>
  )
};

export default CadFilm