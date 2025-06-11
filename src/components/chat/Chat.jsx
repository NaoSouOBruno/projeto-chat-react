import { useState } from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import './Chat.css'

export function Chat() {

    const location = useLocation();
    const nome = location.state?.nome;

    if (!nome) { // retorna ao index ao tentar acessar pela url
        return <Navigate to="/" replace />; // gambiarra?? talvez.
    }

    const [mensagens, setMensagens] = useState([]);
    const [input, setInput] = useState('');

    function enviarMensagem(e) { 
        e.preventDefault();

        if (input === '') {
            return
        };

        setMensagens([...mensagens, input]);
        setInput('');
    }

  return (
    <>
      <main className="main">
        <div id="app" className="app">

        <header className="cabecalho">
            <div className="icone">
                <img className="foto" src="https://i.pinimg.com/736x/44/3d/a5/443da5b996e0017ae61c69b4bd5454bf.jpg"/>
            </div>

            <p className="nome">
                Pedro Pascal
            </p>
        </header>

        <div id="chat" className="chat">
            <div className="mensagemAtendente">
                hello {nome}, my big fan from brazil! 😍
            </div>

            <div className="mensagemUser">
                😱 pedro pascal famosíssimo ator internacional eu sou seu maior fã!
            </div>

            <div className="mensagemAtendente">
                sorry i dont speak portuguese
            </div>

            <div className="mensagemUser">
                💀
            </div>

            <div className="mensagemAtendente">
                💀
            </div>

            {mensagens.map((mensagem) => (
                <div className="mensagemUser">
                    {mensagem}
                </div> 
            ))}
            
            
        </div>

        <footer className="rodape">
            <form 
                id="formMensagem"
                className="mt-4" 
                onSubmit={enviarMensagem}
            >

              <div className="campoMensagem">
                <input
                    id="textoMensagem"
                    name="mensagem"
                    type="text"
                    className="inputMensagem"
                    placeholder="Digite sua mensagem..."
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
              </div>
              
              <div className="botaoEnviar">
                <button type="submit" className="inputEnviar"></button>
                <img className="imgEnviar" src="https://icons.veryicon.com/png/o/miscellaneous/utility/send-26.png" alt="Enviar"/>
              </div>
            </form>
        </footer>
        </div>
        </main>
    </>
    )
  
}