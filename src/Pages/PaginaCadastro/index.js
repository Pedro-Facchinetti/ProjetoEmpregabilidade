import { useState } from 'react';
import logo from 'Assets/PaginaLogin/UNICEPLAC.svg'
import pessoa_cadastro from 'Assets/PaginaLogin/Imagem pessoa cadastro.png';
import linha from 'Assets/PaginaLogin/Linhas canto inf. dir..svg'
import styles from './PaginaCadastro.module.scss'
import Button from 'Components/Button';
import { Link } from 'react-router-dom';

function PaginaCadastro() {
  const [name, setName] = useState("")
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

        <Link className={styles.container_right_text_voltar} to="/">
          Voltar
        </Link>

        <div className={styles.container_cadastro}>
          <img className={styles.cadastro_form_img} src={logo} alt="UNICEPLAC" />
          <form className={styles.cadastro_form}>

              <div className={styles.input_container}>
                <div className={styles.wrap_input}>
                  <input
                    className={name !== "" ? styles.has_val__input : styles.input}
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                  <span className={styles.focus_input} data_placeholder="Nome completo"></span>
                </div>

                <div className={styles.wrap_input}>
                  <input
                    className={email !== "" ? styles.has_val__input : styles.input}
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
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
                  <span className={styles.txt}>Verifique as informações colocadas antes de cadastrar!</span>
                </div>
              </div>

              <div className={styles.container_cadastro_form_btn}>
                <Button label='ENTRAR' />
              </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default PaginaCadastro;