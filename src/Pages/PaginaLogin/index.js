import React, { useState } from 'react';
import axios from 'axios';
import logo from 'Assets/PaginaLogin/UNICEPLAC.svg';
import pessoa_login from 'Assets/PaginaLogin/Imagem pessoa login.png';
import linha from 'Assets/PaginaLogin/Linhas canto inf. dir..svg';
import styles from './PaginaLogin.module.scss';
import Button from 'Components/Button';
import { Link } from 'react-router-dom';

function PaginaLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', { email, password });

      if (response.status === 200) {
        window.location.href = '/homealuno';
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

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
        <Link className={styles.container_right_text_voltar} to="/">
          Voltar
        </Link>
        <div className={styles.container_login}>
          <img className={styles.login_form_img} src={logo} alt="UNICEPLAC" />
          <form className={styles.login_form} onSubmit={handleSubmit}>
            <div className={styles.login_form_left}>
              <div className={styles.input_container}>
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
                  <a className={styles.txt} href='Esqueci_minha_senha'>Esqueci minha senha</a>
                </div>
              </div>
            </div>
            <div className={styles.login_form_line} />
            <div className={styles.login_form_rigth}>
              <div className={styles.container_login_form_btn}>
                <Button label='ENTRAR' type="submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PaginaLogin;