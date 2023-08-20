import { useState } from 'react';
import logo from 'Assets/PaginaLogin/UNICEPLAC.svg'//depois do import eu nomeio o arquivo como eu quero, depois importo a imagem que eu quero da pasta assets
import pessoa_cadastro from 'Assets/PaginaLogin/Imagem pessoa cadastro.png';
import linha from 'Assets/PaginaLogin/Linhas canto inf. dir..svg'
import styles from './PaginaCadastro.module.scss'
import Button from 'Components/Button';

function PaginaCadastro() {//o react pega uma função JavaScript que retorna html, que vai ser exportada e importada no index.js, que vai ser repassado pra nossa id 'root'
  const [name, setName] = useState("")//por padrão o React não altera diretamente o valor da variavel. ele vai receber um valor na variável setEmail, e repassar esse valor para a variável email para que o texto não fique em cima do outro no login.
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("")

  return (
    <div className={styles.container}>
      <div className={styles.container_left}>
        <div>
          <img className={styles.container_left_img} src={pessoa_cadastro} alt="pessoa_cadastro" />
        </div>
      </div>
      <div className={styles.container_right}>

        <div>
          <img className={styles.container_rigth_img} src={linha} alt='Linha da borda'></img>
        </div>

        <a className={styles.container_right_text_voltar} href='voltar'>
          Voltar
        </a>

        <div className={styles.container_cadastro}>
          <img className={tyles.cadastro_form_img} src={logo} alt="UNICEPLAC" />
          <form className={styles.cadastro_form}>

              <div className={styles.input_container}>
                <div className={styles.wrap_input}>
                  <input
                    className={name !== "" ? styles.has_val : styles.input}//o ? é um if ternário
                    type="name"
                    value={name}//pegamos o valor do email
                    onChange={e => setName(e.target.value)}//capturamos o valor do email com o onChange, que pega o setEmail e repassa o valor para essa variável.
                  />
                  <span className="focus_input" data_placeholder="Nome completo"></span>
                </div>

                <div className={styles.wrap_input}>
                  <input
                    className={email !== "" ? styles.has_val : styles.input}//o ? é um if ternário
                    type="email"
                    value={email}//pegamos o valor do email
                    onChange={e => setEmail(e.target.value)}//capturamos o valor do email com o onChange, que pega o setEmail e repassa o valor para essa variável.
                  />
                  <span className="focus_input" data_placeholder="Email institucional"></span>
                </div>

                <div className={styles.wrap_input}>
                  <input
                    className={password !== "" ? styles.has_val : styles.input}
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <span className="focus_input" data_placeholder="Senha"></span>
                </div>
                
                <div className={styles.wrap_input}>
                  <input
                    className={confirmPassword !== "" ? 'has_val input' : 'input'}
                    type='password'
                    value={confirmPassword}
                    onChange={e => setconfirmPassword(e.target.value)}
                  />
                  <span className="focus_input" data_placeholder="Confirmar senha"></span>
                </div>

                <div className='text_center'>
                  <span className='txt'>Verifique as informações colocadas antes de cadastrar!</span>
                </div>
              </div>

              <div className='container_cadastro_form_btn'>
                <Button label='ENTRAR' />
              </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default PaginaCadastro;