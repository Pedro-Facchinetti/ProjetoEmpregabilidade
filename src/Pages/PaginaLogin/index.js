import { useState } from 'react';
import logo from 'Assets/PaginaLogin/UNICEPLAC.svg'//depois do import eu nomeio o arquivo como eu quero, depois importo a imagem que eu quero da pasta assets
import pessoa_login from 'Assets/PaginaLogin/Imagem pessoa login.png';
import linha from 'Assets/PaginaLogin/Linhas canto inf. dir..svg'
import styles from './PaginaLogin.module.scss'
import Button from 'Components/Button';

function PaginaLogin() {//o react pega uma função JavaScript que retorna html, que vai ser exportada e importada no index.js, que vai ser repassado pra nossa id 'root'
  const [email, setEmail] = useState("")//por padrão o React não altera diretamente o valor da variavel. ele vai receber um valor na variável setEmail, e repassar esse valor para a variável email para que o texto não fique em cima do outro no login.
  const [password, setPassword] = useState("")

  return (
    <div className={styles.container}>
      <div className={styles.container_left}>
        <div>
          <img className={styles.container_left_img} src={pessoa_login} alt="pessoa_login" />
        </div>
      </div>
      <div className={styles.container_right}>

        <div>
          <img className={styles.container_rigth_img} src={linha} alt='Linha da borda'></img>
        </div>

        <a className={styles.container_right_text_voltar} href='voltar'>
          Voltar
        </a>

        <div className={styles.container_login}>
          <img className={styles.login_form_img} src={logo} alt="UNICEPLAC" />
          <form className={styles.login_form}>
            <div className={styles.login_form_left}>

              <div className={styles.input_container}>
                <div className={styles.wrap_input}>
                  <input
                    className={email !== "" ? styles.has_val__input : styles.input}//o ? é um if ternário
                    type="email"
                    value={email}//pegamos o valor do email
                    onChange={e => setEmail(e.target.value)}//capturamos o valor do email com o onChange, que pega o setEmail e repassa o valor para essa variável.
                  />
                  <span className={styles.focus_input} data_placeholder="Email institucional"></span>
                </div>

                <div className={styles.wrap_input}>
                  <input
                    className={password !== "" ? styles.has_val__input : styles.input}
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <span className={styles.focus_input} data_placeholder="Senha"></span>
                </div>
                <div className={styles.text_center}>
                  <a className={styles.txt} href='Esqueci_minha_senha'>Esqueci minha senha</a>
                </div>
              </div>
            </div>

            <div className={styles.login_form_line} />

            <div className={styles.login_form_rigth}>
              <div className={styles.container_login_form_btn}>
                <Button label='ENTRAR' />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PaginaLogin;