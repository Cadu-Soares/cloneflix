import React from 'react';

const Login = () => {

  return (
  <>
  <div className='bg_filmes'>
      <div className='container-fluid'>
            <header className='row'>
              <img className='logo' src={require('../assets/logo.png')} />
            </header>
            <div id='login-box' className='col-4 offset-4'>
                <h1 className='text-white'>Entrar</h1>
                <br />
                <form>
                  <input type='email' 
                  className='form-control form-control-lg' placeholder='Email ou número de telefone'
                  />
                  <br />
                  <input type='password' 
                  className='form-control form-control-lg' placeholder='Senha' 
                  />
                  <br />
                  <div className='d-grid gap-2'>
                    <button className='btn btn-danger btn-block btn-lg' type='button'>Entrar</button>
                  </div>
                  <div className='row mt-4'>
                    <div className='col text-muted'>
                      <input type="checkbox" /> Lembrar de mim.
                    </div>
                    <div className='col text-right'>
                      <a href='#' className='text-muted'>
                        Precisa de ajuda?
                      </a>
                    </div>
                  </div>
                </form>
              </div>
      </div>
  </div>

  </>
  )
}

export default Login;