import { Link } from 'react-router-dom'

import './Index.css'

export function Index() {

  return (
    <>
      <div className='indexBody'>

        <h1>Bem-vindo à central de atendimento!</h1>
        <p>Digite seu nome para prosseguir:</p>

        <form>
          <input type='text' required/>
          <Link to='chat'><input type='submit' value='Entrar'></input></Link>
        </form>

      </div>
    </>
  )
}