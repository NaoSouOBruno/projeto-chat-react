import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './Index.css'

export function Index() {
  
  const [nome, setNome] = useState('');
  const navigate = useNavigate();

  function enviarNome(e) {
    e.preventDefault();

    if (nome === '') {
      return;
    }
    else {
      console.log(`Nome enviado: ${nome}`);
      navigate('/chat', {
        state: { nome: nome }
      });
      setNome('');
    }
  }

  return (
      <div className='indexBody'>

        <h1>Bem-vindo à central de atendimento!</h1>
        <p>Digite seu nome para prosseguir:</p>

        <form
          onSubmit={enviarNome}
        >
          <input
            type='text'
            required
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
          <input 
            type='submit'
            value='Entrar'
          >
          </input>
        </form>

      </div>
  )
}