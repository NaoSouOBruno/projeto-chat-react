import './Chat.css'

export function Chat() {

  return (
    <>
      <main class="main">
        <div id="app" class="app">

        <header class="cabecalho">
            <div class="icone">
                <img class="foto" src="https://i.pinimg.com/736x/44/3d/a5/443da5b996e0017ae61c69b4bd5454bf.jpg"/>
            </div>

            <p class="nome">
                Pedro Pascal
            </p>
        </header>

        <div id="chat" class="chat">
            <div class="mensagemAtendente">
                hello my big fan from brazil! 😍
            </div>

            <div class="mensagemUser">
                😱 pedro pascal famosíssimo ator internacional eu sou seu maior fã!
            </div>

            <div class="mensagemAtendente">
                sorry i dont speak portuguese
            </div>

            <div class="mensagemUser">
                💀
            </div>

            <div class="mensagemAtendente">
                💀
            </div>

            <div class="mensagemUser">
            </div>  
            
        </div>

        <footer class="rodape">
            <form id="formMensagem" class="mt-4">
              <div class="campoMensagem">
                <input id="textoMensagem"name="mensagem" type="text" class="inputMensagem" placeholder="Digite sua mensagem..."/>
              </div>
              <div class="botaoEnviar">
                <button type="submit" class="inputEnviar"></button>
                <img class="imgEnviar" src="https://icons.veryicon.com/png/o/miscellaneous/utility/send-26.png" alt="Enviar"/>
              </div>
            </form>
        </footer>
        </div>
        </main>
    </>
    )
  
}