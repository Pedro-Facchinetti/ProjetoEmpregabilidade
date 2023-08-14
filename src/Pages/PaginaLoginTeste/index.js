import { useState } from 'react';
import logo from 'Assets/PaginaLogin/UNICEPLAC.svg'//depois do import eu nomeio o arquivo como eu quero, depois importo a imagem que eu quero da pasta assets
import pessoa_login from 'Assets/PaginaLogin/Imagem pessoa login.png';
import linha from 'Assets/PaginaLogin/Linhas canto inf. dir..svg'
import './styles.scss'
import Button from 'Components/Button';

function PaginaLoginTeste() {//o react pega uma função JavaScript que retorna html, que vai ser exportada e importada no index.js, que vai ser repassado pra nossa id 'root'
  const [email, setEmail] = useState("")//por padrão o React não altera diretamente o valor da variavel. ele vai receber um valor na variável setEmail, e repassar esse valor para a variável email para que o texto não fique em cima do outro no login.
  const [password, setPassword] = useState("")

  return (
    <div className="container">
      <div className='container-left'>
        <div>
          <img className='container-left-img' src={pessoa_login} alt="pessoa_login" />
        </div>
      </div>
      <div className='container-right'>
        <div>
          <img className='container-rigth-img' src={linha} alt='Linha da borda'></img>
        </div>
        <div>
          <a className='container-right-text-voltar' href='voltar'>
            voltar
          </a>
        </div>
        <div className='container-login'>
          <div className='wrap-login'>
            <form className='login-form'>
              <img className='login-form-img' src={logo} alt="UNICEPLAC" />

              <div className='input-container'>
                <div className="wrap-input">
                  <input
                    className={email !== "" ? 'has-val input' : 'input'}//o ? é um if ternário
                    type="email"
                    value={email}//pegamos o valor do email
                    onChange={e => setEmail(e.target.value)}//capturamos o valor do email com o onChange, que pega o setEmail e repassa o valor para essa variável.
                  />
                  <span className="focus-input" data-placeholder="Email institucional"></span>
                </div>

                <div className="wrap-input">
                  <input
                    className={password !== "" ? 'has-val input' : 'input'}
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <span className="focus-input" data-placeholder="Senha"></span>
                </div>
              </div>

              <div className='container-login-form-btn'>
                <Button label='ENTRAR' />
              </div>

              <div className='text-center'>
                <span className='txt1'>Não possui conta?</span>
                <a className='txt2' href='Pagina-de-criação-de-conta'>Criar conta.</a>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaginaLoginTeste;